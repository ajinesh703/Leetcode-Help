import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            <span>LeetCode</span> Solutions
          </div>
        </Link>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search problems..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <nav className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/patterns/two-pointer"
            className={`nav-link ${location.pathname.startsWith('/patterns') ? 'active' : ''}`}
          >
            Patterns
          </Link>
          <Link
            to="/topics/array"
            className={`nav-link ${location.pathname.startsWith('/topics') ? 'active' : ''}`}
          >
            Topics
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
