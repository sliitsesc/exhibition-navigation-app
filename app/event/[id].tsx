import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Share } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, MessageCircle, Share2, MapPin, Clock, Users, ArrowLeft } from 'lucide-react-native';

import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';
import { events } from '@/mocks/events';
import { getLocationById } from '@/mocks/locations';
import { useEventStore } from '@/store/eventStore';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  useEventStore();
  const [liked, setLiked] = useState(false);
  
  const event = events.find(e => e.id === id);
  const location = event ? getLocationById(event.locationId) : null;
  
  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={typography.body}>Event not found</Text>
      </View>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
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

  const handleLike = () => {
    if (!liked) {
      likeEvent(event.id);
      setLiked(true);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out "${event.name}" at the Thurstan College Exhibition!`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewLocation = () => {
    if (location) {
      router.push(`/location/${location.id}`);
    }
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
          <Image source={{ uri: event.image }} style={styles.image} />
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
          
          {event.isLive && (
            <View style={styles.liveContainer}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          )}
        </View>
        
        <View style={styles.content}>
          <Text style={typography.h1}>{event.name}</Text>
          
          <View style={styles.societyContainer}>
            <Text style={typography.bodySmall}>{event.society.name}</Text>
          </View>
          
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
          
          <View style={styles.statsContainer}>
            <TouchableOpacity 
              style={[styles.statButton, liked && styles.statButtonActive]}
              onPress={handleLike}
            >
              <Heart size={20} color={liked ? colors.accent : colors.text} />
              <Text style={typography.body}>{liked ? event.likes + 1 : event.likes}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.statButton}>
              <MessageCircle size={20} color={colors.text} />
              <Text style={typography.body}>{event.comments}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.statButton}
              onPress={handleShare}
            >
              <Share2 size={20} color={colors.text} />
              <Text style={typography.body}>Share</Text>
            </TouchableOpacity>
            
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{event.rank.toFixed(1)}</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Clock size={20} color={colors.primary} />
              <View style={styles.detailText}>
                <Text style={typography.body}>{formatDate(event.startTime)}</Text>
                <Text style={typography.bodySmall}>
                  {formatTime(event.startTime)} - {formatTime(event.endTime)}
                </Text>
                {event.isRecurring && event.recurringInterval !== undefined && (
                  <Text style={[typography.bodySmall, styles.recurringText]}>
                    Repeats every {event.recurringInterval === 1440 ? 'day' : `${event.recurringInterval / 60} hours`}
                  </Text>
                )}
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.detailItem}
              onPress={handleViewLocation}
            >
              <MapPin size={20} color={colors.secondary} />
              <View style={styles.detailText}>
                <Text style={typography.body}>{event.location}</Text>
                <Text style={typography.bodySmall}>
                  {location?.building}, Floor {location?.floor}
                </Text>
              </View>
            </TouchableOpacity>
            
            <View style={styles.detailItem}>
              <Users size={20} color={getLoadColor(event.currentLoad)} />
              <View style={styles.detailText}>
                <Text style={typography.body}>Current Capacity</Text>
                <Text style={[typography.bodySmall, { color: getLoadColor(event.currentLoad) }]}>
                  {event.currentLoad}% full ({event.capacity} max)
                </Text>
              </View>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={typography.h3}>About</Text>
          <Text style={[typography.body, styles.description]}>
            {event.description}
          </Text>
          
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
    height: 300,
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
  societyContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    gap: 8,
    paddingVertical: 8,
  },
  statButtonActive: {
    opacity: 1,
  },
  ratingContainer: {
    marginLeft: 'auto',
    backgroundColor: colors.primary + '30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  rating: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '700',
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
  recurringText: {
    marginTop: 4,
    color: colors.primary,
  },
  description: {
    marginTop: 12,
    lineHeight: 24,
  },
  footer: {
    height: 40,
  },
  liveContainer: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: 'rgba(239, 68, 68, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginRight: 6,
  },
  liveText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

function likeEvent(id: string) {
    throw new Error('Function not implemented.');
}
