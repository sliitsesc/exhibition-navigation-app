import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { X, MapPin, Users } from 'lucide-react-native';
import { Location } from '@/mocks/locations';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface SearchOverlayProps {
  locations: Location[];
  onClose: () => void;
  onLocationSelect?: (location: Location) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  locations,
  onClose,
  onLocationSelect
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLocations = searchQuery.trim() === ''
    ? locations
    : locations.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.building.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 50) return colors.success;
    if (percentage < 80) return colors.warning;
    return colors.danger;
  };

  const renderLocationItem = ({ item }: { item: Location }) => {
    const occupancyPercentage = Math.round((item.currentOccupancy / item.capacity) * 100);
    const occupancyColor = getOccupancyColor(item.currentOccupancy, item.capacity);

    return (
      <TouchableOpacity
        style={styles.locationItem}
        onPress={() => {
          onLocationSelect?.(item);
          onClose();
        }}
        activeOpacity={0.8}
      >
        <View style={styles.locationInfo}>
          <Text style={typography.h4} numberOfLines={1}>{item.name}</Text>
          <View style={styles.locationDetails}>
            <MapPin size={14} color={colors.textSecondary} />
            <Text style={typography.bodySmall}>{item.building}, Floor {item.floor}</Text>
          </View>
          <Text style={[typography.bodySmall, styles.description]} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        
        <View style={styles.occupancyInfo}>
          <View style={[styles.occupancyBadge, { backgroundColor: occupancyColor + '30' }]}>
            <Users size={14} color={occupancyColor} />
            <Text style={[typography.caption, { color: occupancyColor }]}>
              {occupancyPercentage}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={typography.h2}>Search Locations</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search locations, buildings..."
            placeholderTextColor={colors.textSecondary}
            autoFocus
          />
        </View>
        
        <FlatList
          data={filteredLocations}
          renderItem={renderLocationItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={typography.body}>No locations found</Text>
              <Text style={typography.bodySmall}>Try a different search term</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  closeButton: {
    padding: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: colors.cardAlt,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 16,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  locationItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationInfo: {
    flex: 1,
  },
  locationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    marginBottom: 8,
  },
  description: {
    marginTop: 4,
  },
  occupancyInfo: {
    alignItems: 'flex-end',
  },
  occupancyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
});