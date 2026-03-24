import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">🎯 Patterns</div>
        {patterns.map((pattern) => (
          <Link
            to={`/patterns/${pattern.id}`}
            key={pattern.id}
            className={`sidebar-item ${location.pathname === `/patterns/${pattern.id}` ? 'active' : ''}`}
          >
            <span className="item-icon">{pattern.icon}</span>
            <span>{pattern.name}</span>
            <span className="item-count">{pattern.problems.length}</span>
          </Link>
        ))}
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">📂 Topics</div>
        {topics.map((topic) => (
          <Link
            to={`/topics/${topic.id}`}
            key={topic.id}
            className={`sidebar-item ${location.pathname === `/topics/${topic.id}` ? 'active' : ''}`}
          >
            <span className="item-icon">{topic.icon}</span>
            <span>{topic.name}</span>
            <span className="item-count">{topic.problems.length}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
