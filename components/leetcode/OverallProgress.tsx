'use client'

import { useState } from "react";

type Props = {
  totalQuestions: number;
  totalSolved: number;
  primaryColor?: string;
  secondaryColor?: string;
};

export default function OverallProgress({
  totalQuestions,
  totalSolved,
  primaryColor = "rgba(34,211,238,1)",
  secondaryColor = "rgba(209,213,219,1)"
}: Props) {
  const [showPercentage, setShowPercentage] = useState(false);

  const solvedPercentage = ((totalSolved / totalQuestions) * 100).toFixed(2);
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * ((100 - parseFloat(solvedPercentage)) / 100);

  const [percentageBefore, percentageAfter] = solvedPercentage.split(".");
  
  return (
    <svg
      viewBox="0 0 160 160"
      style={{ transform: "rotate(-90deg)" }}
      className="h-[75%] w-[75%]"
      onMouseOver={() => setShowPercentage(true)}
      onMouseOut={() => setShowPercentage(false)}
    >
      <circle
        r={radius}
        cx="80"
        cy="80"
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth="5px"
        opacity={0.3}
      />
      <circle
        r={radius}
        cx="80"
        cy="80"
        fill="transparent"
        stroke={primaryColor}
        strokeWidth="6px"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        fill={primaryColor}
        fontSize="30px"
        textAnchor="middle"
        fontWeight="bold"
        style={{ transform: "rotate(90deg) translate(0, -156px)" }}
      >
        {showPercentage ? percentageBefore : totalSolved}
        {showPercentage && <tspan fontSize="12px">.{percentageAfter}%</tspan>}
      </text>
      <text
        x="62px"
        y="100px"
        fill={secondaryColor}
        fontSize="12px"
        style={{ transform: "rotate(90deg) translate(0, -156px)" }}
      >
        solved
      </text>
    </svg>
  );
}
