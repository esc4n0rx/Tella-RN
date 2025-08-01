import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Interest {
  id: string;
  emoji: string;
  label: string;
}

interface InterestsSelectionProps {
  onComplete: (interests: string[]) => void;
  onBack: () => void;
  userGender: string;
  userAge: number;
}

const interests: Interest[] = [
  { id: 'nsfw', emoji: '🛡️', label: 'NSFW' },
  { id: 'horny', emoji: '💦', label: 'Horny' },
  { id: 'gaming', emoji: '🎮', label: 'Gaming' },
  { id: 'anime', emoji: '👁️', label: 'Anime' },
  { id: 'movies', emoji: '☕', label: 'Movies' },
  { id: 'sports', emoji: '🏀', label: 'Sports' },
  { id: 'outdoor', emoji: '⚡', label: 'Outdoor' },
  { id: 'parties', emoji: '🎉', label: 'Parties' },
  { id: 'art', emoji: '🎨', label: 'Art' },
  { id: 'tiktok', emoji: '📱', label: 'TikTok' },
  { id: 'travel', emoji: '🌴', label: 'Travel' },
  { id: 'chilling', emoji: '😎', label: 'Chilling' },
  { id: 'food', emoji: '🍕', label: 'Food' },
  { id: 'hqd', emoji: '🚗', label: 'HQD' },
  { id: 'drinks', emoji: '❤️', label: 'Drinks' },
  { id: 'fashion', emoji: '👠', label: 'Fashion' },
  { id: 'work', emoji: '💼', label: 'Work' },
];

export function InterestsSelection({ onComplete, onBack, userGender, userAge }: InterestsSelectionProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const getGenderEmoji = () => {
    switch (userGender) {
      case 'female': return '👩';
      case 'male': return '👨';
      default: return '🧑';
    }
  };

  const getGenderText = () => {
    switch (userGender) {
      case 'female': return 'F';
      case 'male': return 'M';
      default: return 'NB';
    }
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleComplete = () => {
    onComplete(selectedInterests);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.userTag}>
        <ThemedText style={styles.userTagText}>
          {getGenderEmoji()} {getGenderText()}, {userAge}
        </ThemedText>
      </View>

      <TouchableOpacity style={styles.skipButton}>
        <ThemedText style={styles.skipButtonText}>Pular</ThemedText>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Do que você gosta?</ThemedText>
        </View>

        <ScrollView 
          style={styles.interestsContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.interestsGrid}>
            {interests.map((interest) => (
              <TouchableOpacity
                key={interest.id}
                style={[
                  styles.interestButton,
                  selectedInterests.includes(interest.id) && styles.interestButtonSelected,
                ]}
                onPress={() => toggleInterest(interest.id)}
              >
                <ThemedText style={styles.interestEmoji}>{interest.emoji}</ThemedText>
                <ThemedText style={[
                  styles.interestLabel,
                  selectedInterests.includes(interest.id) && styles.interestLabelSelected,
                ]}>
                  {interest.label}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
          <ThemedText style={styles.completeButtonText}>Completo</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  userTag: {
    position: 'absolute',
    top: 60,
    left: '50%',
    marginLeft: -40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  userTagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  skipButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 140,
    zIndex: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  interestsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  interestButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  interestButtonSelected: {
    backgroundColor: 'rgba(0, 122, 255, 0.8)',
  },
  interestEmoji: {
    fontSize: 16,
  },
  interestLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  interestLabelSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});