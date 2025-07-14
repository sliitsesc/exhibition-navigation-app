import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Sponsor } from '@/mocks/events';
import { typography } from '@/constants/typography';
import { colors } from '@/constants/colors';

interface SponsorCarouselProps {
  sponsors: Sponsor[];
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_SPACING = 10;

export const SponsorCarousel: React.FC<SponsorCarouselProps> = ({ sponsors }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList>(null);

  useEffect(() => {
    const scrollToNext = () => {
      if (flatListRef.current && sponsors.length > 1) {
        // Use type assertion to access _value
        const currentIndex = Math.floor((scrollX as any)._value / (ITEM_WIDTH + ITEM_SPACING));
        const nextIndex = (currentIndex + 1) % sponsors.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      }
    };

    const interval = setInterval(scrollToNext, 5000);
    return () => clearInterval(interval);
  }, [sponsors.length, scrollX]);

  const renderItem = ({ item, index }: { item: Sponsor; index: number }) => {
    const inputRange = [
      (index - 1) * (ITEM_WIDTH + ITEM_SPACING),
      index * (ITEM_WIDTH + ITEM_SPACING),
      (index + 1) * (ITEM_WIDTH + ITEM_SPACING),
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.itemContainer,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Image source={{ uri: item.banner }} style={styles.bannerImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <View style={styles.contentContainer}>
          <Image source={{ uri: item.logo }} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={typography.h3}>{item.name}</Text>
            <Text style={typography.bodySmall}>{item.description}</Text>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={sponsors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginVertical: 10,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: 180,
    marginHorizontal: ITEM_SPACING / 2,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: colors.background,
  },
  textContainer: {
    flex: 1,
  },
});