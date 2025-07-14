import { create } from 'zustand';
import { Location, locations, getHighOccupancyLocations } from '@/mocks/locations';

interface LocationState {
  locations: Location[];
  filteredLocations: Location[];
  highOccupancyLocations: Location[];
  selectedBuilding: string | null;
  selectedFloor: number | null;
  searchQuery: string;
  isLoading: boolean;
  
  // Actions
  setSelectedBuilding: (building: string | null) => void;
  setSelectedFloor: (floor: number | null) => void;
  setSearchQuery: (query: string) => void;
  filterLocations: () => void;
  refreshLocations: () => Promise<void>;
}

export const useLocationStore = create<LocationState>((set, get) => ({
  locations: locations,
  filteredLocations: locations,
  highOccupancyLocations: getHighOccupancyLocations(),
  selectedBuilding: null,
  selectedFloor: null,
  searchQuery: '',
  isLoading: false,
  
  setSelectedBuilding: (building) => {
    set({ selectedBuilding: building });
    get().filterLocations();
  },
  
  setSelectedFloor: (floor) => {
    set({ selectedFloor: floor });
    get().filterLocations();
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterLocations();
  },
  
  filterLocations: () => {
    const { locations, selectedBuilding, selectedFloor, searchQuery } = get();
    
    let filtered = [...locations];
    
    // Filter by building
    if (selectedBuilding) {
      filtered = filtered.filter(location => location.building === selectedBuilding);
    }
    
    // Filter by floor
    if (selectedFloor !== null) {
      filtered = filtered.filter(location => location.floor === selectedFloor);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        location => 
          location.name.toLowerCase().includes(query) || 
          location.description.toLowerCase().includes(query) ||
          location.building.toLowerCase().includes(query)
      );
    }
    
    set({ filteredLocations: filtered });
  },
  
  refreshLocations: async () => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({ 
      locations: locations,
      highOccupancyLocations: getHighOccupancyLocations(),
      isLoading: false 
    });
    
    get().filterLocations();
  },
}));