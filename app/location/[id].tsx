import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Users, Building, ArrowLeft } from 'lucide-react-native';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { getLocationById } from '@/mocks/locations';
import { events } from '@/mocks/events';
import { EventCard } from '@/components/EventCard';

export default function LocationDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const location = getLocationById(id);
  const locationEvents = events.filter(event => event.locationId === id);
  
  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={typography.body}>Location not found</Text>
      </View>
    );
  }

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 50) return colors.success;
    if (percentage < 80) return colors.warning;
    return colors.danger;
  };

  const occupancyColor = getOccupancyColor(location.currentOccupancy, location.capacity);
  const occupancyPercentage = Math.round((location.currentOccupancy / location.capacity) * 100);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: location.image }} style={styles.image} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
          
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          <Text style={typography.h1}>{location.name}</Text>
          
          <View style={styles.buildingContainer}>
            <Text style={typography.bodySmall}>{location.building}, Floor {location.floor}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Building size={20} color={colors.primary} />
              <View style={styles.detailText}>
                <Text style={typography.body}>Building</Text>
                <Text style={typography.bodySmall}>{location.building}</Text>
              </View>
            </View>
            
            <View style={styles.detailItem}>
              <MapPin size={20} color={colors.secondary} />
              <View style={styles.detailText}>
                <Text style={typography.body}>Floor</Text>
                <Text style={typography.bodySmall}>Level {location.floor}</Text>
              </View>
            </View>
            
            <View style={styles.detailItem}>
              <Users size={20} color={occupancyColor} />
              <View style={styles.detailText}>
                <Text style={typography.body}>Current Capacity</Text>
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
                  <Text style={[typography.bodySmall, { color: occupancyColor }]}>
                    {location.currentOccupancy}/{location.capacity} ({occupancyPercentage}%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={typography.h3}>About</Text>
          <Text style={[typography.body, styles.description]}>
            {location.description}
          </Text>
          
          {locationEvents.length > 0 && (
            <>
              <View style={styles.divider} />
              
              <Text style={typography.h3}>Events at this Location</Text>
              <View style={styles.eventsContainer}>
                {locationEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </View>
            </>
          )}
          
          <View style={styles.mapContainer}>
            <Text style={typography.h3}>Location on Map</Text>
            <View style={styles.map}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1000' }} 
                style={styles.mapImage} 
              />
              <View style={styles.mapPin}>
                <MapPin size={24} color={colors.primary} />
              </View>
            </View>
          </View>
          
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    height: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  buildingContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 20,
  },
  detailsContainer: {
    gap: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  detailText: {
    flex: 1,
  },
  occupancyContainer: {
    marginTop: 8,
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
  description: {
    marginTop: 12,
    lineHeight: 24,
  },
  eventsContainer: {
    marginTop: 16,
  },
  mapContainer: {
    marginTop: 24,
  },
  map: {
    height: 200,
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapPin: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -24,
  },
  footer: {
    height: 40,
  },
});