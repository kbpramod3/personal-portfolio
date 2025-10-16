'use client'

import { Card } from "@/components/ui/card"
import { Code2, GitBranch, Trophy, Target, TrendingUp, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useCallback } from "react"
import { LeetcodeQuery } from "@/utils/leetcodeQuery"
import { useFetch } from "@/hooks/useFetch"
import SolvedProblemsStats from "@/components/leetcode/SolvedProblemsStats"
import ProblemStatsChart from "@/components/geeksforgeeks/ProblemsStats"
import HackerRankStats from "@/components/hackerrank/Stats"
import { fetchAllStats } from "@/services/queries"


const githubStats = {
  totalRepos: 25,
  publicRepos: 20,
  privateRepos: 5,
  stars: 45,
  forks: 12,
  contributions: 850,
  languages: [
    { name: "JavaScript", percentage: 45, color: "bg-yellow-500" },
    { name: "TypeScript", percentage: 30, color: "bg-blue-500" },
    { name: "Python", percentage: 15, color: "bg-green-500" },
    { name: "CSS", percentage: 10, color: "bg-purple-500" },
  ],
}

const achievements = [
  {
    title: "100 Days of Code",
    description: "Completed 100 consecutive days of coding",
    icon: Trophy,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to 5+ open source projects",
    icon: GitBranch,
  },
  {
    title: "Problem Solver",
    description: "Solved 450+ coding problems",
    icon: Target,
  },
  {
    title: "Full-Stack Developer",
    description: "Built 10+ production-ready applications",
    icon: Code2,
  },
]

export default function AnalyticsPage() {
  const fetchStats = useCallback(() => fetchAllStats(), []);
  const { data, error, loading } = useFetch(fetchStats);
  console.log('Fetched stats:', { data, error, loading });

  const codingStats = {
  totalProblems: data?.totalSolved?.total || 0,
  easy: 180,
  medium: 220,
  hard: 50,
  platforms: [
    { name: "LeetCode", solved: data?.totalSolved?.leetcode, total: 3000 },
    { name: "HackerRank", solved: data?.totalSolved?.hackerrank, total: 1500 },
    { name: "GeeksforGeeks", solved: data?.totalSolved?.gfg, total: 2000 },
  ],
}
  
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Analytics</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A comprehensive overview of my coding journey, problem-solving skills, and development contributions.
          </p>
        </div>

        <section className="mb-12">
  <h2 className="text-3xl font-bold mb-8">Coding Stats</h2>
  <div className="grid md:grid-cols-4 gap-6 mb-8">
    <Card className="p-6 bg-card border-border">
      <div className="text-3xl font-bold text-primary mb-2">{codingStats.totalProblems}</div>
      <div className="text-sm text-muted-foreground">Total Problems Solved</div>
    </Card>

    {codingStats.platforms.map((platform, idx) => (
      <Card key={idx} className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
        <Progress value={(platform.solved / platform.total) * 100} className="h-2 mb-2"/>
        <p className="text-sm text-muted-foreground">
          {platform.solved} / {platform.total} solved
        </p>
      </Card>
    ))}
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <SolvedProblemsStats userName="kbpramod7"/>
    <ProblemStatsChart />
    <HackerRankStats />
  </div>
</section>



        {/* GitHub Stats */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">GitHub Activity</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{githubStats.totalRepos}</h3>
                  <p className="text-sm text-muted-foreground">Total Repositories</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">{githubStats.publicRepos}</p>
                  <p className="text-xs text-muted-foreground">Public</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-muted-foreground">{githubStats.privateRepos}</p>
                  <p className="text-xs text-muted-foreground">Private</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{githubStats.contributions}</h3>
                  <p className="text-sm text-muted-foreground">Contributions This Year</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">{githubStats.stars}</p>
                  <p className="text-xs text-muted-foreground">Stars Received</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-muted-foreground">{githubStats.forks}</p>
                  <p className="text-xs text-muted-foreground">Forks</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Language Distribution */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-6">Language Distribution</h3>
            <div className="space-y-4">
              {githubStats.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className={`${lang.color} h-2 rounded-full`} style={{ width: `${lang.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Note */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            <Award className="w-4 h-4 inline mr-2 text-primary" />
            These statistics are representative examples. Connect with me to discuss my actual coding journey and
            achievements.
          </p>
        </Card>
      </div>
    </div>
  )
}
