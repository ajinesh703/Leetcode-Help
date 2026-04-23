import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle Button - always visible */}
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? '◀' : '▶'}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Close button inside sidebar */}
        <button
          className="sidebar-close-btn"
          onClick={() => setIsOpen(false)}
          title="Close sidebar"
        >
          ✕
        </button>

        <div className="sidebar-section">
          <div className="sidebar-title">🎯 Patterns</div>
          {patterns.map((pattern) => (
            <Link
              to={`/patterns/${pattern.id}`}
              key={pattern.id}
              className={`sidebar-item ${location.pathname === `/patterns/${pattern.id}` ? 'active' : ''}`}
              onClick={() => window.innerWidth < 768 && setIsOpen(false)}
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
              onClick={() => window.innerWidth < 768 && setIsOpen(false)}
            >
              <span className="item-icon">{topic.icon}</span>
              <span>{topic.name}</span>
              <span className="item-count">{topic.problems.length}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;