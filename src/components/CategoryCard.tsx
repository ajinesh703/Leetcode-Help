import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  problemCount: number;
  type: 'patterns' | 'topics';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  icon,
  description,
  color,
  problemCount,
  type,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      style={{ '--card-accent': color } as React.CSSProperties}
      onClick={() => navigate(`/${type}/${id}`)}
    >
      <div className="card-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <span className="problem-count">{problemCount} problems</span>
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default CategoryCard;
