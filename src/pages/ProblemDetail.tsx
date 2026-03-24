import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';
import CodeBlock from '../components/CodeBlock';
import type { Problem } from '../types';

const ProblemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Search in both patterns and topics
  let problem: Problem | undefined;
  for (const pattern of patterns) {
    problem = pattern.problems.find((p) => p.id === id);
    if (problem) break;
  }
  if (!problem) {
    for (const topic of topics) {
      problem = topic.problems.find((p) => p.id === id);
      if (problem) break;
    }
  }

  if (!problem) {
    return (
      <div className="content">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Problem not found</h3>
          <p>The problem you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content animate-in">
      <div className="problem-detail">
        <div className="problem-list-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <div className="header-info">
            <h1>{problem.title}</h1>
          </div>
        </div>

        <div className="problem-meta" style={{ marginBottom: '1.5rem' }}>
          <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
            {problem.difficulty}
          </span>
          <a
            href={problem.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-link"
          >
            Open on LeetCode ↗
          </a>
        </div>

        <div className="problem-description">
          <h3>📋 Problem Description</h3>
          {problem.description}
        </div>

        <div className="solution-section">
          <h3>💡 Solution</h3>
          <CodeBlock code={problem.solution} language={problem.language} />
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
