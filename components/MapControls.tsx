import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Navigation, Search, Layers, Map } from 'lucide-react-native';
import { colors } from '@/constants/colors';

interface MapControlsProps {
  onLocationPress: () => void;
  onSearchPress: () => void;
  onMapTypePress: () => void;
  mapType: 'standard' | 'satellite';
}

export const MapControls: React.FC<MapControlsProps> = ({
  onLocationPress,
  onSearchPress,
  onMapTypePress,
  mapType
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.controlButton}
        onPress={onLocationPress}
        activeOpacity={0.8}
      >
        <Navigation size={20} color={colors.text} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.controlButton}
        onPress={onSearchPress}
        activeOpacity={0.8}
      >
        <Search size={20} color={colors.text} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.controlButton,
          mapType === 'satellite' && styles.activeButton
        ]}
        onPress={onMapTypePress}
        activeOpacity={0.8}
      >
        {mapType === 'satellite' ? (
          <Map size={20} color={colors.primary} />
        ) : (
          <Layers size={20} color={colors.text} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    top: 120,
    gap: 12,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(18, 18, 20, 0.9)',
    backdropFilter: 'blur(10px)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  activeButton: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderColor: colors.primary,
  },
});