import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';

const Home: React.FC = () => {
  const totalProblems = [
    ...patterns.flatMap((p) => p.problems),
    ...topics.flatMap((t) => t.problems),
  ];

  // Deduplicate by id
  const uniqueProblems = new Map(totalProblems.map((p) => [p.id, p]));
  const easyCount = [...uniqueProblems.values()].filter((p) => p.difficulty === 'Easy').length;
  const mediumCount = [...uniqueProblems.values()].filter((p) => p.difficulty === 'Medium').length;
  const hardCount = [...uniqueProblems.values()].filter((p) => p.difficulty === 'Hard').length;

  return (
    <div className="content">
      <section className="hero animate-in">
        <h1>
          Master <span className="gradient-text">LeetCode</span> with
          <br />
          Pattern-Based Learning
        </h1>
        <p>
          A curated collection of LeetCode solutions organized by patterns and topics,
          helping you recognize and apply the right approach to each problem.
        </p>
      </section>

      <div className="stats-bar animate-in">
        <div className="stat-card">
          <div className="stat-value">{uniqueProblems.size}</div>
          <div className="stat-label">Total Problems</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{patterns.length}</div>
          <div className="stat-label">Patterns</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{topics.length}</div>
          <div className="stat-label">Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ fontSize: '1rem', lineHeight: '2.5rem' }}>
            <span style={{ color: '#4ECDC4' }}>{easyCount}E</span>{' '}
            <span style={{ color: '#FFD93D' }}>{mediumCount}M</span>{' '}
            <span style={{ color: '#FF6B6B' }}>{hardCount}H</span>
          </div>
          <div className="stat-label">Difficulty Split</div>
        </div>
      </div>

      <section>
        <div className="section-header">
          <h2>🎯 Pattern-Based Solutions</h2>
          <span className="badge">{patterns.length} Patterns</span>
        </div>
        <div className="category-grid">
          {patterns.map((pattern) => (
            <CategoryCard
              key={pattern.id}
              id={pattern.id}
              name={pattern.name}
              icon={pattern.icon}
              description={pattern.description}
              color={pattern.color}
              problemCount={pattern.problems.length}
              type="patterns"
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>📂 Topic-Based Solutions</h2>
          <span className="badge">{topics.length} Topics</span>
        </div>
        <div className="category-grid">
          {topics.map((topic) => (
            <CategoryCard
              key={topic.id}
              id={topic.id}
              name={topic.name}
              icon={topic.icon}
              description={topic.description}
              color={topic.color}
              problemCount={topic.problems.length}
              type="topics"
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        Made with ⚡ for LeetCode enthusiasts · Solutions are for learning purposes
      </footer>
    </div>
  );
};

export default Home;
