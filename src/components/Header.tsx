import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from "./ThemeToggle";
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';

interface SearchResult {
  id: string;
  title: string;
  difficulty: string;
  source: string;
  path: string;
}

const difficultyColor: Record<string, string> = {
  Easy: '#00b8a3',
  Medium: '#ffc01e',
  Hard: '#ff375f',
};

function getAllProblems(): SearchResult[] {
  const results: SearchResult[] = [];
  const seen = new Set<string>();

  for (const pattern of patterns) {
    for (const problem of pattern.problems) {
      if (!seen.has(problem.id)) {
        seen.add(problem.id);
        results.push({
          id: problem.id,
          title: problem.title,
          difficulty: problem.difficulty,
          source: pattern.name,
          path: `/problem/${problem.id}`,
        });
      }
    }
  }

  for (const topic of topics) {
    for (const problem of topic.problems) {
      if (!seen.has(problem.id)) {
        seen.add(problem.id);
        results.push({
          id: problem.id,
          title: problem.title,
          difficulty: problem.difficulty,
          source: topic.name,
          path: `/problem/${problem.id}`,
        });
      }
    }
  }

  return results;
}

const allProblems = getAllProblems();

const Header: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSearched(false);
  }, [location.pathname]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);

    if (value.trim() === '') {
      setResults([]);
      setSearched(false);
      setIsOpen(false);
      return;
    }

    const lower = value.toLowerCase();
    const filtered = allProblems.filter(p =>
      p.title.toLowerCase().includes(lower)
    );
    setResults(filtered);
    setSearched(true);
    setIsOpen(true);
  };

  const handleSelect = (path: string) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSearched(false);
    setActiveIndex(-1);
    navigate(path);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSearched(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && results[activeIndex]) {
        handleSelect(results[activeIndex].path);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img
              src="/logo.png"
              alt="Python Code Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          <div className="logo-text">
            <span>LeetCode</span> Solutions
          </div>
        </Link>

        {/* Search Bar */}
        <div ref={wrapperRef} style={{ position: 'relative', width: '320px' }}>
          <div className="search-bar" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search problems..."
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => { if (searched) setIsOpen(true); }}
              autoComplete="off"
            />
            {query && (
              <button
                onClick={handleClear}
                style={{
                  position: 'absolute',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary, #aaa)',
                  fontSize: '14px',
                  padding: '0',
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: 'var(--card-bg, #1e1e2e)',
              border: '1.5px solid var(--border-color, #333)',
              borderRadius: '12px',
              maxHeight: '380px',
              overflowY: 'auto',
              zIndex: 9999,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>

              {results.length === 0 && searched ? (
                <div style={{
                  padding: '32px 16px',
                  textAlign: 'center',
                  color: 'var(--text-secondary, #aaa)',
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>😕</div>
                  <div style={{ fontSize: '14px', fontWeight: 500 }}>
                    No problem found for <strong>"{query}"</strong>
                  </div>
                  <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.6 }}>
                    Try searching by a different keyword
                  </div>
                </div>
              ) : (
                results.map((result, index) => (
                  <div
                    key={`${result.id}-${index}`}
                    onClick={() => handleSelect(result.path)}
                    style={{
                      padding: '10px 16px',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--border-color, #2a2a3a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      background: activeIndex === index
                        ? 'var(--hover-bg, #2a2a3a)'
                        : 'transparent',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--text-primary, #fff)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {result.title}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: 'var(--text-secondary, #888)',
                        marginTop: '2px',
                      }}>
                        {result.source}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: difficultyColor[result.difficulty] ?? '#aaa',
                      flexShrink: 0,
                    }}>
                      {result.difficulty}
                    </span>
                  </div>
                ))
              )}

            </div>
          )}
        </div>

        {/* Nav Links */}
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

        {/* Theme Toggle */}
        <ThemeToggle />

      </div>
    </header>
  );
};

export default Header;