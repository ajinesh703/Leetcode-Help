import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { patterns } from '../data/patterns';
import { topics } from '../data/topics';

interface SearchResult {
  id: string;
  title: string;
  difficulty: string;
  source: string;
  path: string;
}

function getAllProblems(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const pattern of patterns) {
    for (const problem of pattern.problems) {
      results.push({
        id: problem.id,
        title: problem.title,
        difficulty: problem.difficulty,
        source: pattern.name,
        path: `/problem/${problem.id}`,
      });
    }
  }

  for (const topic of topics) {
    for (const problem of topic.problems) {
      // avoid duplicates by id
      if (!results.find(r => r.id === problem.id)) {
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

const difficultyColor: Record<string, string> = {
  Easy: '#00b8a3',
  Medium: '#ffc01e',
  Hard: '#ff375f',
};

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allProblems = getAllProblems();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
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
    navigate(path);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '340px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--input-bg, #1e1e2e)',
        border: '1.5px solid var(--border-color, #333)',
        borderRadius: '10px',
        padding: '6px 14px',
        gap: '8px',
      }}>
        <span style={{ fontSize: '16px', opacity: 0.5 }}>🔍</span>
        <input
          type="text"
          placeholder="Search problems..."
          value={query}
          onChange={e => handleSearch(e.target.value)}
          onFocus={() => { if (results.length > 0 || searched) setIsOpen(true); }}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary, #fff)',
            fontSize: '14px',
            width: '100%',
          }}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); setIsOpen(false); setSearched(false); }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-secondary, #aaa)', fontSize: '16px', padding: 0,
            }}
          >✕</button>
        )}
      </div>

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
          zIndex: 1000,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          {results.length === 0 && searched ? (
            <div style={{
              padding: '32px 16px',
              textAlign: 'center',
              color: 'var(--text-secondary, #aaa)',
              fontSize: '15px',
            }}>
              <div style={{ fontSize: '40px', marginBottom: '8px' }}>😕</div>
              <div>No problem found for <strong>"{query}"</strong></div>
              <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.6 }}>
                Try a different keyword
              </div>
            </div>
          ) : (
            results.map(result => (
              <div
                key={result.id}
                onClick={() => handleSelect(result.path)}
                style={{
                  padding: '10px 16px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-color, #2a2a3a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--hover-bg, #2a2a3a)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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
  );
}