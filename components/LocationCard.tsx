import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MapPin, Users } from 'lucide-react-native';
import { Location } from '@/mocks/locations';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface LocationCardProps {
  location: Location;
  compact?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, compact = false }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/location/${location.id}`);
  };

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 50) return colors.success;
    if (percentage < 80) return colors.warning;
    return colors.danger;
  };

  const occupancyColor = getOccupancyColor(location.currentOccupancy, location.capacity);
  const occupancyPercentage = Math.round((location.currentOccupancy / location.capacity) * 100);

  if (compact) {
    return (
      <TouchableOpacity 
        style={styles.compactContainer} 
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Image source={{ uri: location.image }} style={styles.compactImage} />
        <View style={styles.compactContent}>
          <Text style={typography.h4} numberOfLines={1}>{location.name}</Text>
          <View style={styles.compactDetails}>
            <View style={styles.compactDetail}>
              <MapPin size={12} color={colors.textSecondary} />
              <Text style={typography.caption} numberOfLines={1}>{location.building}</Text>
            </View>
            <View style={styles.compactDetail}>
              <Users size={12} color={occupancyColor} />
              <Text style={[typography.caption, { color: occupancyColor }]}>
                {occupancyPercentage}%
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: location.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={typography.h3}>{location.name}</Text>
        <Text style={[typography.bodySmall, styles.description]} numberOfLines={2}>
          {location.description}
        </Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <MapPin size={14} color={colors.textSecondary} />
            <Text style={typography.bodySmall}>
              {location.building}, Floor {location.floor}
            </Text>
          </View>
          
          <View style={styles.occupancyContainer}>
            <View style={styles.occupancyBarBackground}>
              <View 
                style={[
                  styles.occupancyBarFill, 
                  { 
                    width: `${occupancyPercentage}%`,
                    backgroundColor: occupancyColor
                  }
                ]} 
              />
            </View>
            <View style={styles.occupancyText}>
              <Users size={14} color={occupancyColor} />
              <Text style={[typography.bodySmall, { color: occupancyColor }]}>
                {location.currentOccupancy}/{location.capacity} ({occupancyPercentage}%)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
  },
  description: {
    marginTop: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    gap: 12,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  occupancyContainer: {
    gap: 8,
  },
  occupancyBarBackground: {
    height: 6,
    backgroundColor: colors.cardAlt,
    borderRadius: 3,
    overflow: 'hidden',
  },
  occupancyBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  occupancyText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  // Compact styles
  compactContainer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    height: 80,
    marginBottom: 12,
  },
  compactImage: {
    width: 80,
    height: 80,
  },
  compactContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  compactDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compactDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});