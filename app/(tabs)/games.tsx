import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { GameCard } from '@/components/GameCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { useGameStore } from '@/store/gameStore';

export default function GamesScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    newGames, 
    popularGames,
    filteredGames, 
    isLoading,
    setSearchQuery: storeSetSearchQuery,
    refreshGames,
    setSelectedDifficulty
  } = useGameStore();

  useEffect(() => {
    refreshGames();
  }, []);

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

  const handleSeeAllGames = () => {
    router.push('/games/all');
  };

  const handleSeeNewGames = () => {
    router.push('/games/new');
  };

  const handleSeePopularGames = () => {
    router.push('/games/popular');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshGames}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
      >
        <View style={styles.header}>
          <Text style={typography.h1}>Exhibition Games</Text>
          <Text style={typography.bodySmall}>Play & earn rewards</Text>
        </View>
        
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
        
        {newGames.length > 0 && (
          <View style={styles.section}>
            <SectionHeader 
              title="New Games" 
              onSeeAll={handleSeeNewGames}
            />
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {newGames.map(game => (
                <View key={game.id} style={styles.horizontalItem}>
                  <GameCard game={game} />
                </View>
              ))}
            </ScrollView>
          </View>
        )}
        
        {popularGames.length > 0 && (
          <View style={styles.section}>
            <SectionHeader 
              title="Most Popular" 
              onSeeAll={handleSeePopularGames}
            />
            
            {popularGames.slice(0, 3).map(game => (
              <GameCard key={game.id} game={game} compact />
            ))}
          </View>
        )}
        
        <View style={styles.section}>
          <SectionHeader 
            title="All Games" 
            onSeeAll={handleSeeAllGames}
          />
          
          {filteredGames.length > 0 ? (
            filteredGames.slice(0, 3).map(game => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={typography.body}>No games found</Text>
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
    paddingHorizontal: 16,
  },
  horizontalList: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  horizontalItem: {
    width: 280,
    marginRight: 16,
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