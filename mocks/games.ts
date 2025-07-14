export interface Game {
    id: string;
    name: string;
    description: string;
    image: string;
    difficulty: 'easy' | 'medium' | 'hard';
    estimatedTime: string; // in minutes
    points: number;
    completedCount: number;
    isNew: boolean;
  }
  
  export const games: Game[] = [
    {
      id: '1',
      name: 'Campus Explorer',
      description: 'Find all the hidden locations around the campus to earn points and unlock special content.',
      image: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=800',
      difficulty: 'medium',
      estimatedTime: '30-45',
      points: 500,
      completedCount: 1245,
      isNew: false,
    },
    {
      id: '2',
      name: 'Knowledge Quest',
      description: 'Test your knowledge about Thurstan College with this interactive quiz game.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800',
      difficulty: 'easy',
      estimatedTime: '15-20',
      points: 300,
      completedCount: 2187,
      isNew: false,
    },
    {
      id: '3',
      name: 'Exhibition Bingo',
      description: 'Complete your bingo card by visiting different exhibits and participating in activities.',
      image: 'https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?q=80&w=800',
      difficulty: 'easy',
      estimatedTime: '45-60',
      points: 400,
      completedCount: 1876,
      isNew: false,
    },
    {
      id: '4',
      name: 'Science Challenge',
      description: 'Solve scientific puzzles at different stations throughout the Science Complex.',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800',
      difficulty: 'hard',
      estimatedTime: '40-50',
      points: 600,
      completedCount: 987,
      isNew: false,
    },
    {
      id: '5',
      name: 'AR Treasure Hunt',
      description: 'Use augmented reality to find hidden treasures around the exhibition.',
      image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800',
      difficulty: 'medium',
      estimatedTime: '30-40',
      points: 500,
      completedCount: 1432,
      isNew: true,
    },
    {
      id: '6',
      name: 'Exhibition Selfie Challenge',
      description: 'Take creative selfies at designated spots and share them to earn points.',
      image: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=800',
      difficulty: 'easy',
      estimatedTime: '20-30',
      points: 250,
      completedCount: 2543,
      isNew: false,
    },
    {
      id: '7',
      name: 'Virtual Reality Experience',
      description: 'Immerse yourself in a virtual tour of future Thurstan College developments.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800',
      difficulty: 'easy',
      estimatedTime: '15-20',
      points: 300,
      completedCount: 1876,
      isNew: true,
    },
    {
      id: '8',
      name: 'Innovation Challenge',
      description: 'Propose solutions to real-world problems at the Engineering Block.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800',
      difficulty: 'hard',
      estimatedTime: '45-60',
      points: 700,
      completedCount: 765,
      isNew: false,
    },
  ];
  
  export const getNewGames = () => {
    return games.filter(game => game.isNew);
  };
  
  export const getGamesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    return games.filter(game => game.difficulty === difficulty);
  };
  
  export const getMostPopularGames = () => {
    return [...games].sort((a, b) => b.completedCount - a.completedCount);
  };