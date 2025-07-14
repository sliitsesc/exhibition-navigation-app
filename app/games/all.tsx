import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GameCard } from '@/components/GameCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { useGameStore } from '@/store/gameStore';

export default function AllGamesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    filteredGames, 
    isLoading, 
    setSearchQuery: storeSetSearchQuery,
    refreshGames,
    setSelectedDifficulty
  } = useGameStore();

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    storeSetSearchQuery(text);
  };

  const difficultyFilters = [
    { id: 'all', name: 'All' },
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  const handleFilterChange = (selectedIds: string[]) => {
    const difficulty = selectedIds.includes('all') || selectedIds.length === 0 
      ? null 
      : selectedIds[0];
    setSelectedDifficulty(difficulty);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Stack.Screen 
        options={{
          title: 'All Games',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
      
      <SearchBar 
        value={searchQuery}
        onChangeText={handleSearchChange}
        placeholder="Search games..."
      />
      
      <FilterBar 
        tags={difficultyFilters}
        onFilterChange={handleFilterChange}
        showFilterIcon={false}
      />
      
      <FlatList
        data={filteredGames}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshGames}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={typography.body}>No games found</Text>
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