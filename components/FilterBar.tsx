import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Filter } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { Tag } from '@/mocks/events';

interface FilterOption {
  id: string;
  name: string;
  color?: string;
}

interface FilterBarProps {
  tags: FilterOption[];
  onFilterChange: (selectedIds: string[]) => void;
  showFilterIcon?: boolean;
  onFilterPress?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  tags, 
  onFilterChange, 
  showFilterIcon = true,
  onFilterPress
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterPress = (id: string) => {
    setSelectedFilters((prev) => {
      const newFilters = prev.includes(id)
        ? prev.filter((filterId) => filterId !== id)
        : [...prev, id];
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.filterItem,
              selectedFilters.includes(tag.id) && 
                (tag.color 
                  ? { backgroundColor: tag.color + '40', borderColor: tag.color }
                  : { backgroundColor: colors.primary + '40', borderColor: colors.primary })
            ]}
            onPress={() => handleFilterPress(tag.id)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                typography.tag,
                selectedFilters.includes(tag.id) && 
                  (tag.color 
                    ? { color: tag.color }
                    : { color: colors.primary })
              ]}
            >
              {tag.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {showFilterIcon && (
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={onFilterPress}
        >
          <Filter size={20} color={colors.text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  scrollContent: {
    paddingRight: 50,
  },
  filterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: colors.cardAlt,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  filterButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.cardAlt,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});