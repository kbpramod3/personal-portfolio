// services/queries.ts
import { LeetcodeQuery } from '@/utils/leetcodeQuery';
import { GeeksforGeeksQuery } from '@/utils/geeksforgeeks';


const HACKERRANK_API = '/api/hackerrank';
const LEETCODE_USER = 'kbpramod7';
const GFG_USER = 'kbpramod7';

export async function fetchHackerRankData(){
  const res = await fetch(HACKERRANK_API);
  if (!res.ok) throw new Error(`HackerRank fetch failed: ${res.status}`);
  const json = await res.json();
  return json?.models ?? [];
}

export async function fetchLeetCodeData(){
    let leetcodequery = new LeetcodeQuery();
  return leetcodequery.fetchUserSolvedProblemsStats(LEETCODE_USER);
}

export async function fetchGFGData() {
  const json = await GeeksforGeeksQuery.fetchProblemsData(GFG_USER);
  if (!json?.result) return [];
  
  return Object.entries(json.result).map(([key, val]) => ({
    name: key,
    value: Object.keys(val as object).length,
  }));
}

/**
 * Combine all stats into a single object
 */
export async function fetchAllStats() {
  const [hackerrank, leetcode, gfg] = await Promise.all([
    fetchHackerRankData(),
    fetchLeetCodeData(),
    fetchGFGData(),
  ]);


  const totalSolved = {
    hackerrank: hackerrank.reduce((sum: number, b: any) => sum + (b.solved || 0), 0),
    leetcode: leetcode?.acSubmissionNum?.reduce((sum: number, l: any) => sum + (l.count || 0), 0) ?? 0,
    gfg: gfg.reduce((sum: number, g: any) => sum + g.value, 0),
    total: 0,
  };

  // Add a combined total
  totalSolved.total = totalSolved.hackerrank + totalSolved.leetcode + totalSolved.gfg;

  return { hackerrank, leetcode, gfg, totalSolved };
}
