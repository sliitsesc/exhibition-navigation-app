import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Clock, Award, Users } from 'lucide-react-native';
import { Game } from '@/mocks/games';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

interface GameCardProps {
  game: Game;
  compact?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, compact = false }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/game/${game.id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return colors.success;
      case 'medium':
        return colors.warning;
      case 'hard':
        return colors.danger;
      default:
        return colors.primary;
    }
  };

  if (compact) {
    return (
      <TouchableOpacity 
        style={styles.compactContainer} 
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Image source={{ uri: game.image }} style={styles.compactImage} />
        <View style={styles.compactContent}>
          <View style={styles.compactHeader}>
            <Text style={typography.h4} numberOfLines={1}>{game.name}</Text>
            {game.isNew && <View style={styles.newBadge}><Text style={styles.newText}>NEW</Text></View>}
          </View>
          <View style={styles.compactDetails}>
            <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(game.difficulty) + '30' }]}>
              <Text style={[styles.difficultyText, { color: getDifficultyColor(game.difficulty) }]}>
                {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
              </Text>
            </View>
            <View style={styles.compactStat}>
              <Clock size={12} color={colors.textSecondary} />
              <Text style={typography.caption}>{game.estimatedTime} min</Text>
            </View>
            <View style={styles.compactStat}>
              <Award size={12} color={colors.textSecondary} />
              <Text style={typography.caption}>{game.points} pts</Text>
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
      <Image source={{ uri: game.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={typography.h3} numberOfLines={2}>{game.name}</Text>
          {game.isNew && <View style={styles.newBadge}><Text style={styles.newText}>NEW</Text></View>}
        </View>
        <Text style={[typography.bodySmall, styles.description]} numberOfLines={2}>
          {game.description}
        </Text>
        <View style={styles.footer}>
          <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(game.difficulty) + '30' }]}>
            <Text style={[styles.difficultyText, { color: getDifficultyColor(game.difficulty) }]}>
              {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Clock size={14} color={colors.textSecondary} />
              <Text style={typography.caption}>{game.estimatedTime} min</Text>
            </View>
            <View style={styles.stat}>
              <Award size={14} color={colors.textSecondary} />
              <Text style={typography.caption}>{game.points} pts</Text>
            </View>
            <View style={styles.stat}>
              <Users size={14} color={colors.textSecondary} />
              <Text style={typography.caption}>{game.completedCount}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'column',
    gap: 12,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  newBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  newText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
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
  compactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compactDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  compactStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});