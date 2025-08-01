import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface AvatarCaptureProps {
  onNext: () => void;
  onBack: () => void;
  userGender: string;
  userAge: number;
}

export function AvatarCapture({ onNext, onBack, userGender, userAge }: AvatarCaptureProps) {
  const [avatarCaptured, setAvatarCaptured] = useState(false);

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

  const handleCapture = () => {
    // Simular captura de foto
    setAvatarCaptured(true);
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

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Seu avatar</ThemedText>
          <ThemedText style={styles.subtitle}>
            Tire uma selfie para gerar{'\n'}
            seu próprio avatar anônimo
          </ThemedText>
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            {avatarCaptured ? (
              <Image 
                source={{ uri: 'https://via.placeholder.com/200x200/FFB6C1/000000?text=👩' }}
                style={styles.avatarImage}
              />
            ) : (
              <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
                <Ionicons name="camera" size={40} color="#007AFF" />
              </TouchableOpacity>
            )}
            <View style={styles.dotsContainer}>
              {Array.from({ length: 20 }, (_, i) => (
                <View 
                  key={i} 
                  style={[
                    styles.dot, 
                    { 
                      transform: [
                        { rotate: `${(i * 18)}deg` },
                        { translateY: -110 }
                      ] 
                    }
                  ]} 
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.securityContainer}>
          <Ionicons name="lock-closed" size={24} color="#666" />
          <ThemedText style={styles.securityText}>
            Ninguém verá sua foto real: não armazenamos nada{'\n'}
            e a usamos apenas para gerar um avatar
          </ThemedText>
        </View>

        <TouchableOpacity 
          style={[styles.continueButton, avatarCaptured && styles.continueButtonActive]} 
          onPress={onNext}
          disabled={!avatarCaptured}
        >
          <ThemedText style={[
            styles.continueButtonText,
            avatarCaptured && styles.continueButtonTextActive
          ]}>
            Continuar
          </ThemedText>
        </TouchableOpacity>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
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
  userTagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    zIndex: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  avatarCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    width: 240,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  securityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  securityText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
  continueButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
  },
  continueButtonActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
    textAlign: 'center',
  },
  continueButtonTextActive: {
    color: '#000',
  },
  progressBar: {
    width: 60,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  },
  progressFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 2,
  },
});