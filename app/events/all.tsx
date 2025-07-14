import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { EventCard } from '@/components/EventCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { tags } from '@/mocks/events';
import { useEventStore } from '@/store/eventStore';

export default function AllEventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    filteredEvents, 
    selectedTags, 
    isLoading, 
    setSelectedTags, 
    setSearchQuery: storeSetSearchQuery,
    refreshEvents 
  } = useEventStore();

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    storeSetSearchQuery(text);
  };

  const handleFilterChange = (tagIds: string[]) => {
    setSelectedTags(tagIds);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Stack.Screen 
        options={{
          title: 'All Events',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
      
      <SearchBar 
        value={searchQuery}
        onChangeText={handleSearchChange}
        placeholder="Search events..."
      />
      
      <FilterBar 
        tags={tags}
        onFilterChange={handleFilterChange}
        showFilterIcon={false}
      />
      
      <FlatList
        data={filteredEvents}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshEvents}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={typography.body}>No events found</Text>
            <Text style={typography.bodySmall}>Try adjusting your filters</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    marginTop: 32,
  },
});