import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, Navigation, Layers, Search } from 'lucide-react-native';
import * as Location from 'expo-location';

import { InteractiveMap } from '@/components/InteractiveMap';
import { MapControls } from '@/components/MapControls';
import { LocationMarker } from '@/components/LocationMarker';
import { SearchOverlay } from '@/components/SearchOverlay';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { useLocationStore } from '@/store/locationStore';

export default function MapScreen() {
  const [userLocation, setUserLocation] = useState<{latitude: number, longitude: number} | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  const { locations, refreshLocations } = useLocationStore();

  useEffect(() => {
    getCurrentLocation();
    refreshLocations();
  }, []);

  const getCurrentLocation = async () => {
    if (Platform.OS === 'web') {
      // Use web geolocation API
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.log('Location error:', error);
            // Fallback to Thurstan College location
            setUserLocation({
              latitude: 6.9031,
              longitude: 79.8622,
            });
          }
        );
      }
    } else {
      // Use Expo Location for mobile
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Fallback to Thurstan College location
          setUserLocation({
            latitude: 6.9031,
            longitude: 79.8622,
          });
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.log('Location error:', error);
        // Fallback to Thurstan College location
        setUserLocation({
          latitude: 6.9031,
          longitude: 79.8622,
        });
      }
    }
  };

  const handleLocationPress = () => {
    getCurrentLocation();
  };

  const toggleMapType = () => {
    setMapType(prev => prev === 'standard' ? 'satellite' : 'standard');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <InteractiveMap
        locations={locations}
        userLocation={userLocation}
        mapType={mapType}
      />
      
      <MapControls
        onLocationPress={handleLocationPress}
        onSearchPress={() => setShowSearch(true)}
        onMapTypePress={toggleMapType}
        mapType={mapType}
      />
      
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={typography.h2}>Live Campus Map</Text>
          <Text style={typography.bodySmall}>Real-time occupancy data</Text>
        </View>
      </View>
      
      {showSearch && (
        <SearchOverlay
          locations={locations}
          onClose={() => setShowSearch(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(18, 18, 20, 0.9)',
    backdropFilter: 'blur(10px)',
  },
  headerContent: {
    alignItems: 'center',
  },
});