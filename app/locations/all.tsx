import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { LocationCard } from '@/components/LocationCard';
import { SearchBar } from '@/components/SearchBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { useLocationStore } from '@/store/locationStore';

export default function AllLocationsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    filteredLocations, 
    isLoading, 
    setSearchQuery: storeSetSearchQuery,
    refreshLocations 
  } = useLocationStore();

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    storeSetSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Stack.Screen 
        options={{
          title: 'All Locations',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
      
      <SearchBar 
        value={searchQuery}
        onChangeText={handleSearchChange}
        placeholder="Search locations..."
      />
      
      <FlatList
        data={filteredLocations}
        renderItem={({ item }) => <LocationCard location={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshLocations}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={typography.body}>No locations found</Text>
            <Text style={typography.bodySmall}>Try adjusting your search</Text>
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