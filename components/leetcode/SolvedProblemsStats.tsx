'use client'

import { forwardRef, memo, useCallback } from "react";
import OverallProgress from "./OverallProgress";
import { useFetch } from "@/hooks/useFetch"
import LoadingOrError from "../LoadingOrError";
import leetcodeQuery from "../../utils/leetcodeQuery";
import { SubmitStats } from "../../types";

type Theme = {
  primaryColor?: string;
  secondaryColor?: string;
  bgColor?: string;
};

export type Props = {
  userName: string;
  loadingComponent?: React.ReactNode;
  theme?: Theme;
  showUserName?: boolean;
};

const SolvedProblemsStats = forwardRef<HTMLDivElement, Props>(
  ({ userName, loadingComponent, theme, showUserName = true }, ref) => {
    const mergedTheme: Theme = {
      primaryColor: "rgba(34,211,238,1)",
      secondaryColor: "rgba(209,213,219,1)",
      bgColor: "rgba(68,64,60,1)",
      ...theme,
    };

    const fetchData = useCallback(() => {
      return leetcodeQuery.fetchUserSolvedProblemsStats(userName);
    }, [userName]);

    const { data, loading: isLoading, error } = useFetch<SubmitStats>(fetchData);

    if (isLoading || error || !data) {
      return <LoadingOrError loading={isLoading} error={error} loadingComponent={loadingComponent} />;
    }

    const [totalQuestions, ...difficultyWiseTotal] = data.allQuestionsCount || [];
    const [totalSolved, ...sectionWiseSolved] = data.acSubmissionNum || [];

    const getColor: Record<string, string> = {
      Easy: "bg-green-600",
      Medium: "bg-amber-300",
      Hard: "bg-red-500",
    };

    return (
      <div
        ref={ref}
        className="w-full flex flex-col rounded-xl px-4 py-4 gap-2"
        style={{ background: mergedTheme.bgColor }}
      >
        <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-white-800 text-left">LeetCode</h2>
  <a
    href={`https://leetcode.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-s font-semibold text-white-600 hover:underline"
  >
    {userName}
  </a>
</div>

        <div className="w-full flex justify-between items-center">
          <OverallProgress
            totalQuestions={totalQuestions.count!}
            totalSolved={totalSolved.count!}
            primaryColor={mergedTheme.primaryColor}
          />

          <div className="w-full">
            {difficultyWiseTotal.map((difficulty, index) => {
              const section = sectionWiseSolved[index];
              const total = difficulty.count!;
              const solved = section.count!;
              const percentage = (solved / total) * 100;

              return (
                <div key={difficulty.difficulty} className="mt-3 first:mt-0 w-full">
                  <div className="flex justify-between px-1">
                    <span className="text-sm" style={{ color: mergedTheme.secondaryColor }}>
                      {difficulty.difficulty}
                    </span>
                    <span className="w-[4.5rem] text-end">
                      <span className="font-semibold" style={{ color: mergedTheme.primaryColor }}>
                        {section.count}
                      </span>
                      <span className="text-xs pb-2" style={{ color: mergedTheme.secondaryColor }}>
                        /{difficulty.count}
                      </span>
                    </span>
                  </div>
                  <div className={`${getColor[difficulty.difficulty]} bg-opacity-20 w-full rounded-full h-2`}>
                    <div style={{ width: `${percentage}%` }}>
                      <div className={`${getColor[difficulty.difficulty]} animate-slide h-2 rounded-full`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

export default memo(SolvedProblemsStats);
