import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Problem } from '../types';

interface ProblemCardProps {
  problem: Problem;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index }) => {
  const navigate = useNavigate();

  return (
    <div
      className="problem-card"
      onClick={() => navigate(`/problem/${problem.id}`)}
    >
      <div className="problem-info">
        <span className="problem-number">#{index + 1}</span>
        <span className="problem-title">{problem.title}</span>
      </div>
      <div className="problem-actions">
        <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
          {problem.difficulty}
        </span>
        <a
          href={problem.leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-link"
          onClick={(e) => e.stopPropagation()}
        >
          LeetCode ↗
        </a>
        <span className="view-arrow">→</span>
      </div>
    </div>
  );
};

export default ProblemCard;
