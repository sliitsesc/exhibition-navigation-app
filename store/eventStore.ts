import { create } from 'zustand';
import { Event, Tag, events, tags, getLiveEvents, getEventsByTag } from '@/mocks/events';

interface EventState {
  events: Event[];
  filteredEvents: Event[];
  liveEvents: Event[];
  selectedTags: string[];
  searchQuery: string;
  isLoading: boolean;
  
  // Actions
  setSelectedTags: (tagIds: string[]) => void;
  setSearchQuery: (query: string) => void;
  filterEvents: () => void;
  refreshEvents: () => Promise<void>;
  likeEvent: (eventId: string) => void;
}

export const useEventStore = create<EventState>((set, get) => ({
  events: events,
  filteredEvents: events,
  liveEvents: getLiveEvents(),
  selectedTags: [],
  searchQuery: '',
  isLoading: false,
  
  setSelectedTags: (tagIds) => {
    set({ selectedTags: tagIds });
    get().filterEvents();
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterEvents();
  },
  
  filterEvents: () => {
    const { events, selectedTags, searchQuery } = get();
    
    let filtered = [...events];
    
    // Filter by tags if any are selected
    if (selectedTags.length > 0) {
      filtered = filtered.filter(event => 
        event.tags.some(tag => selectedTags.includes(tag.id))
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.name.toLowerCase().includes(query) || 
          event.description.toLowerCase().includes(query) ||
          event.society.name.toLowerCase().includes(query) ||
          event.tags.some(tag => tag.name.toLowerCase().includes(query))
      );
    }
    
    set({ filteredEvents: filtered });
  },
  
  refreshEvents: async () => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({ 
      events: events,
      liveEvents: getLiveEvents(),
      isLoading: false 
    });
    
    get().filterEvents();
  },
  
  likeEvent: (eventId) => {
    set(state => {
      // Update events
      const updatedEvents = state.events.map(event => 
        event.id === eventId 
          ? { ...event, likes: event.likes + 1 } 
          : event
      );
      
      // Update filtered events
      const updatedFilteredEvents = state.filteredEvents.map(event => 
        event.id === eventId 
          ? { ...event, likes: event.likes + 1 } 
          : event
      );
      
      // Update live events
      const updatedLiveEvents = state.liveEvents.map(event => 
        event.id === eventId 
          ? { ...event, likes: event.likes + 1 } 
          : event
      );
      
      return { 
        events: updatedEvents, 
        filteredEvents: updatedFilteredEvents,
        liveEvents: updatedLiveEvents
      };
    });
  }
}));