import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Clock, Award, Users, ArrowLeft, Play } from 'lucide-react-native';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { games } from '@/mocks/games';

export default function GameDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const game = games.find(g => g.id === id);
  
  if (!game) {
    return (
      <View style={styles.container}>
        <Text style={typography.body}>Game not found</Text>
      </View>
    );
  }

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

  const difficultyColor = getDifficultyColor(game.difficulty);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real app, this would navigate to the actual game
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

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
          <Image source={{ uri: game.image }} style={styles.image} />
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
          
          {game.isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newText}>NEW</Text>
            </View>
          )}
        </View>
        
        <View style={styles.content}>
          <Text style={typography.h1}>{game.name}</Text>
          
          <View style={styles.statsContainer}>
            <View style={[styles.difficultyBadge, { backgroundColor: difficultyColor + '30' }]}>
              <Text style={[styles.difficultyText, { color: difficultyColor }]}>
                {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
              </Text>
            </View>
            
            <View style={styles.stat}>
              <Clock size={16} color={colors.textSecondary} />
              <Text style={typography.bodySmall}>{game.estimatedTime} min</Text>
            </View>
            
            <View style={styles.stat}>
              <Award size={16} color={colors.textSecondary} />
              <Text style={typography.bodySmall}>{game.points} points</Text>
            </View>
            
            <View style={styles.stat}>
              <Users size={16} color={colors.textSecondary} />
              <Text style={typography.bodySmall}>{game.completedCount} played</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={typography.h3}>About</Text>
          <Text style={[typography.body, styles.description]}>
            {game.description}
          </Text>
          
          <View style={styles.divider} />
          
          <View style={styles.rewardsContainer}>
            <Text style={typography.h3}>Rewards</Text>
            <View style={styles.rewardItem}>
              <Award size={24} color={colors.primary} />
              <View style={styles.rewardText}>
                <Text style={typography.body}>Complete the Game</Text>
                <Text style={typography.bodySmall}>{game.points} points</Text>
              </View>
            </View>
            <View style={styles.rewardItem}>
              <Award size={24} color={colors.secondary} />
              <View style={styles.rewardText}>
                <Text style={typography.body}>Perfect Score</Text>
                <Text style={typography.bodySmall}>+100 bonus points</Text>
              </View>
            </View>
            <View style={styles.rewardItem}>
              <Award size={24} color={colors.accent} />
              <View style={styles.rewardText}>
                <Text style={typography.body}>Speed Run</Text>
                <Text style={typography.bodySmall}>+50 bonus points</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.playButton, isPlaying && styles.playingButton]}
            onPress={handlePlay}
            disabled={isPlaying}
          >
            {isPlaying ? (
              <Text style={styles.playButtonText}>Loading...</Text>
            ) : (
              <>
                <Play size={20} color="#fff" fill="#fff" />
                <Text style={styles.playButtonText}>Play Now</Text>
              </>
            )}
          </TouchableOpacity>
          
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </View>
  );
}

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
  newBadge: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  newText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 16,
    gap: 16,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '600',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 20,
  },
  description: {
    marginTop: 12,
    lineHeight: 24,
  },
  rewardsContainer: {
    gap: 16,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
  },
  rewardText: {
    flex: 1,
  },
  playButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  playingButton: {
    backgroundColor: colors.primary + '80',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    height: 40,
  },
});