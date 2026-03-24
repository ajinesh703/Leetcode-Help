export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  leetcodeUrl: string;
  description: string;
  solution: string;
  language: string;
}

export interface Pattern {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  problems: Problem[];
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  problems: Problem[];
}
