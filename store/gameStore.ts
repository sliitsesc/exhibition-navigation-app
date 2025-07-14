import { create } from 'zustand';
import { Game, games, getNewGames, getMostPopularGames } from '@/mocks/games';

interface GameState {
  games: Game[];
  filteredGames: Game[];
  newGames: Game[];
  popularGames: Game[];
  selectedDifficulty: string | null;
  searchQuery: string;
  isLoading: boolean;
  
  // Actions
  setSelectedDifficulty: (difficulty: string | null) => void;
  setSearchQuery: (query: string) => void;
  filterGames: () => void;
  refreshGames: () => Promise<void>;
}

export const useGameStore = create<GameState>((set, get) => ({
  games: games,
  filteredGames: games,
  newGames: getNewGames(),
  popularGames: getMostPopularGames(),
  selectedDifficulty: null,
  searchQuery: '',
  isLoading: false,
  
  setSelectedDifficulty: (difficulty) => {
    set({ selectedDifficulty: difficulty });
    get().filterGames();
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterGames();
  },
  
  filterGames: () => {
    const { games, selectedDifficulty, searchQuery } = get();
    
    let filtered = [...games];
    
    // Filter by difficulty
    if (selectedDifficulty) {
      filtered = filtered.filter(game => game.difficulty === selectedDifficulty);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        game => 
          game.name.toLowerCase().includes(query) || 
          game.description.toLowerCase().includes(query)
      );
    }
    
    set({ filteredGames: filtered });
  },
  
  refreshGames: async () => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({ 
      games: games,
      newGames: getNewGames(),
      popularGames: getMostPopularGames(),
      isLoading: false 
    });
    
    get().filterGames();
  },
}));