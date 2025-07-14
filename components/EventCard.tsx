import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Heart, MessageCircle, Clock, Users } from 'lucide-react-native';
import { Event } from '@/mocks/events';
import { typography } from '@/constants/typography';
import { colors } from '@/constants/colors';

interface EventCardProps {
  event: Event;
  showDetails?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, showDetails = true }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/event/${event.id}`);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getLoadColor = (load: number) => {
    if (load < 50) return colors.success;
    if (load < 80) return colors.warning;
    return colors.danger;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.9}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      
      {event.isLive && (
        <View style={styles.liveContainer}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={typography.h3} numberOfLines={2}>{event.name}</Text>
          <View style={styles.societyContainer}>
            <Text style={typography.caption}>{event.society.name}</Text>
          </View>
        </View>
        
        {showDetails && (
          <>
            <View style={styles.tagsContainer}>
              {event.tags.map((tag) => (
                <View 
                  key={tag.id} 
                  style={[styles.tag, { backgroundColor: tag.color + '40' }]}
                >
                  <Text style={[typography.tag, { color: tag.color }]}>{tag.name}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Clock size={14} color={colors.textSecondary} />
                <Text style={typography.caption}>
                  {formatTime(event.startTime)} - {formatTime(event.endTime)}
                </Text>
              </View>
              
              <View style={styles.detail}>
                <Users size={14} color={colors.textSecondary} />
                <Text style={typography.caption}>
                  <Text style={{ color: getLoadColor(event.currentLoad) }}>{event.currentLoad}%</Text> full
                </Text>
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Heart size={16} color={colors.accent} />
                <Text style={typography.caption}>{event.likes}</Text>
              </View>
              
              <View style={styles.stat}>
                <MessageCircle size={16} color={colors.secondary} />
                <Text style={typography.caption}>{event.comments}</Text>
              </View>
              
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{event.rank.toFixed(1)}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.card,
    marginBottom: 16,
  },
  image: {
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
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  societyContainer: {
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    gap: 4,
  },
  ratingContainer: {
    marginLeft: 'auto',
    backgroundColor: colors.primary + '30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    ...typography.tag,
    color: colors.primary,
    fontWeight: '700',
  },
  liveContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(239, 68, 68, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginRight: 4,
  },
  liveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});