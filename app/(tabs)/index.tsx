import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { SponsorCarousel } from '@/components/SponsorCarousel';
import { EventCard } from '@/components/EventCard';
import { FilterBar } from '@/components/FilterBar';
import { SectionHeader } from '@/components/SectionHeader';
import { SearchBar } from '@/components/SearchBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { sponsors, tags } from '@/mocks/events';
import { useEventStore } from '@/store/eventStore';

export default function EventsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    liveEvents, 
    filteredEvents, 
    selectedTags, 
    isLoading,
    setSelectedTags, 
    setSearchQuery: storeSetSearchQuery,
    refreshEvents 
  } = useEventStore();

  useEffect(() => {
    refreshEvents();
  }, []);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    storeSetSearchQuery(text);
  };

  const handleFilterChange = (tagIds: string[]) => {
    setSelectedTags(tagIds);
  };

  const handleSeeAllLive = () => {
    router.push('/events/live');
  };

  const handleSeeAllEvents = () => {
    router.push('/events/all');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshEvents}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
      >
        <View style={styles.header}>
          <Text style={typography.h1}>Thurstan College</Text>
          <Text style={typography.bodySmall}>Exhibition 2025</Text>
        </View>
        
        <SearchBar 
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Search events, showrooms, lectures..."
        />
        
        <SponsorCarousel sponsors={sponsors} />
        
        <FilterBar 
          tags={tags}
          onFilterChange={handleFilterChange}
          onFilterPress={() => router.push('/events/filter')}
        />
        
        {liveEvents.length > 0 && (
          <View style={styles.section}>
            <SectionHeader 
              title="Live Now" 
              onSeeAll={handleSeeAllLive}
            />
            
            {liveEvents.slice(0, 3).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </View>
        )}
        
        <View style={styles.section}>
          <SectionHeader 
            title="All Events" 
            onSeeAll={handleSeeAllEvents}
          />
          
          {filteredEvents.length > 0 ? (
            filteredEvents.slice(0, 5).map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={typography.body}>No events found</Text>
              <Text style={typography.bodySmall}>Try adjusting your filters</Text>
            </View>
          )}
        </View>
        
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  section: {
    marginTop: 24,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  footer: {
    height: 40,
  },
});