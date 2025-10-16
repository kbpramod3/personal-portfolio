'use client';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {GeeksforGeeksQuery} from '@/utils/geeksforgeeks';

type ProblemData = {
  [key: string]: any;
};

type ApiResponse = {
  status: string;
  message: string;
  result: Record<string, ProblemData>;
  count: number;
};

const COLORS = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'];

export default function ProblemStatsChart() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const gfgUsername = "kbpramod7";

  useEffect(() => {
    async function fetchData() {
      try {
        const json = await GeeksforGeeksQuery.fetchProblemsData('kbpramod7');
        //const json: ApiResponse = await res.json();

        if (json?.result) {
          const chartData = Object.entries(json.result).map(([key, val]) => ({
            name: key,
            value: Object.keys(val as object).length,
          }));
          setData(chartData);
        }
      } catch (err) {
        console.error('Error fetching problems:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-gray-500">Loading stats...</p>;

  return (
    <div className="flex flex-col bg-white shadow-md p-4 rounded-2xl w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-left text-gray-800">GeeksforGeeks</h2>
  <a
    href={`https://auth.geeksforgeeks.org/user/${gfgUsername}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-s font-semibold text-right text-gray-600 hover:underline"
  >
    {gfgUsername}
  </a>
</div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={4}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 text-gray-600">
        <p>Total Problems: <strong>{data.reduce((a, b) => a + b.value, 0)}</strong></p>
      </div>
    </div>
  );
}
