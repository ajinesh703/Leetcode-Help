import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { patterns } from '../data/patterns';
import ProblemCard from '../components/ProblemCard';

const PatternPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pattern = patterns.find((p) => p.id === id);

  if (!pattern) {
    return (
      <div className="content">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Pattern not found</h3>
          <p>The pattern you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content animate-in">
      <div className="problem-list-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ←
        </button>
        <div className="header-info">
          <h1>
            {pattern.icon} {pattern.name}
          </h1>
          <p>{pattern.description}</p>
        </div>
      </div>

      <div className="problems-grid">
        {pattern.problems.map((problem, index) => (
          <ProblemCard key={problem.id} problem={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PatternPage;
