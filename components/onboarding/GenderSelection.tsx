import { ThemedText } from '@/components/ThemedText';
import { AnimatedEmojis } from '@/components/ui/AnimatedEmojis';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface GenderSelectionProps {
  onNext: (gender: string) => void;
}

export function GenderSelection({ onNext }: GenderSelectionProps) {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    setTimeout(() => onNext(gender), 300);
  };

  return (
    <View style={styles.container}>
      <AnimatedEmojis />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.heartIcon}>
            <ThemedText style={styles.heartEmoji}>💖</ThemedText>
          </View>
        </View>

        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Tella</ThemedText>
          <ThemedText style={styles.subtitle}>
            Onde suas conversas ganham imaginação
          </ThemedText>
        </View>

        <View style={styles.questionContainer}>
          <ThemedText style={styles.question}>
            Como você se identifica?
          </ThemedText>
          
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <TouchableOpacity 
                style={[
                  styles.optionButton,
                  selectedGender === 'female' && styles.optionButtonSelected
                ]}
                onPress={() => handleGenderSelect('female')}
              >
                <ThemedText style={styles.optionEmoji}>👩</ThemedText>
                <ThemedText style={styles.optionText}>Sou mulher</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.optionButton,
                  selectedGender === 'male' && styles.optionButtonSelected
                ]}
                onPress={() => handleGenderSelect('male')}
              >
                <ThemedText style={styles.optionEmoji}>👨</ThemedText>
                <ThemedText style={styles.optionText}>Sou homem</ThemedText>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={[
                styles.fullOptionButton,
                selectedGender === 'non-binary' && styles.optionButtonSelected
              ]}
              onPress={() => handleGenderSelect('non-binary')}
            >
              <ThemedText style={styles.optionText}>Sou não-binário</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    zIndex: 10,
  },
  logoContainer: {
    marginBottom: 40,
  },
  heartIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  heartEmoji: {
    fontSize: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    lineHeight: 24,
  },
  questionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 40,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    gap: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  optionButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  fullOptionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  optionButtonSelected: {
    backgroundColor: '#fff',
    transform: [{ scale: 0.98 }],
  },
  optionEmoji: {
    fontSize: 32,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});