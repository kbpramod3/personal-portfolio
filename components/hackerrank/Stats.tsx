'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { HackerrankQuery } from '@/utils/hackerrank';

type Badge = {
  badge_name: string;
  stars: number;
  total_stars: number;
  current_points: number;
  total_points: number;
  progress_to_next_star: number;
  solved: number;
  total_challenges: number;
};

export default function HackerRankStats() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "kbpramod7";

  useEffect(() => {
    async function fetchBadges() {
      try {
        const json = await HackerrankQuery.fetchProblemsData();
        if (json?.models) {
          const filtered = json.models.filter((b: any) => b.solved >= 10);
          setBadges(filtered);
        }
      } catch (err) {
        console.error('Error fetching HackerRank data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBadges();
  }, []);

  if (loading) return <p className="text-gray-500 text-center">Loading HackerRank stats...</p>;
  if (!badges.length) return <p className="text-gray-500 text-center">No badges to display.</p>;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-gray-800">HackerRank</h2>
  <a
    href={`https://www.hackerrank.com/${username}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-s font-semibold text-gray-600 hover:underline"
  >
    {username}
  </a>
</div>

      <div className="space-y-3">
        {badges.map((badge) => (
          <motion.div
            key={badge.badge_name}
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-base font-semibold text-gray-800 mb-1">{badge.badge_name}</h3>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: badge.total_stars }).map((_, i) => (
                <Star
                  key={i}
                  size={14} // smaller stars
                  fill={i < badge.stars ? '#FFD700' : 'none'}
                  stroke={i < badge.stars ? '#FFD700' : '#ccc'}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
              <motion.div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${badge.progress_to_next_star * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${badge.progress_to_next_star * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between text-xs text-gray-600">
              <span>{badge.solved} / {badge.total_challenges} problems</span>
              <span>{badge.current_points.toFixed(0)} pts</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
