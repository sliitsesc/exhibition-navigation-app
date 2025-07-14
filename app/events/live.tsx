import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { EventCard } from '@/components/EventCard';
import { SearchBar } from '@/components/SearchBar';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { useEventStore } from '@/store/eventStore';

export default function LiveEventsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { liveEvents, isLoading, refreshEvents } = useEventStore();
  
  const filteredEvents = searchQuery.trim() === ''
    ? liveEvents
    : liveEvents.filter(event => 
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.society.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Stack.Screen 
        options={{
          title: 'Live Events',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search live events..."
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
            <Text style={typography.body}>No live events found</Text>
            <Text style={typography.bodySmall}>Check back later for updates</Text>
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
    paddingTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    marginTop: 32,
  },
});