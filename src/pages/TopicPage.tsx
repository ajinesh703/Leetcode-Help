import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import ProblemCard from '../components/ProblemCard';

const TopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return (
      <div className="content">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Topic not found</h3>
          <p>The topic you're looking for doesn't exist.</p>
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
            {topic.icon} {topic.name}
          </h1>
          <p>{topic.description}</p>
        </div>
      </div>

      <div className="problems-grid">
        {topic.problems.map((problem, index) => (
          <ProblemCard key={problem.id} problem={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TopicPage;
