import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

// This is a placeholder for the 3D map component
// In a real app, you would integrate with a mapping library or 3D rendering engine
export const MapView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1000' }} 
        style={styles.mapImage} 
      />
      <View style={styles.overlay}>
        <Text style={typography.h3}>Thurstan College Campus</Text>
        <Text style={typography.bodySmall}>Interactive 3D Map</Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    margin: 16,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
  },
});