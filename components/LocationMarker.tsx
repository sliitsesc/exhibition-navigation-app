import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface LocationMarkerProps {
  occupancyPercentage: number;
  size?: number;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({ 
  occupancyPercentage, 
  size = 40 
}) => {
  const getOccupancyColor = (percentage: number) => {
    if (percentage < 50) return colors.success;
    if (percentage < 80) return colors.warning;
    return colors.danger;
  };

  const color = getOccupancyColor(occupancyPercentage);

  return (
    <View style={[
      styles.container, 
      { 
        width: size, 
        height: size, 
        borderRadius: size / 2,
        borderColor: color 
      }
    ]}>
      <Text style={[
        styles.text, 
        { 
          fontSize: size * 0.3,
          color: color 
        }
      ]}>
        {occupancyPercentage}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18, 18, 20, 0.9)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  text: {
    fontWeight: '700',
  },
});