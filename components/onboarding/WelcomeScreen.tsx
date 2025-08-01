import { ThemedText } from '@/components/ThemedText';
import { AnimatedEmojis } from '@/components/ui/AnimatedEmojis';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AnimatedEmojis />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.heartIcon}>
            <View style={styles.heartGradient}>
              <Ionicons name="heart" size={40} color="#FF1493" />
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Tella</ThemedText>
          <ThemedText style={styles.subtitle}>
            Onde suas conversas ganham imaginação
          </ThemedText>
          <ThemedText style={styles.description}>
            Conheça pessoas aleatórias em chats.{'\n'}
            Dê ou receba tokens.{'\n'}
            Retire dinheiro ou resgate por coisas.
          </ThemedText>
        </View>

        <View style={[styles.buttonsContainer, { paddingBottom: insets.bottom }]}>
          <TouchableOpacity style={styles.appleButton} onPress={onNext}>
            <Ionicons name="logo-apple" size={20} color="#000" />
            <ThemedText style={styles.appleButtonText}>Entrar com Apple</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.googleButton} onPress={onNext}>
            <Ionicons name="logo-google" size={20} color="#4285f4" />
            <ThemedText style={styles.googleButtonText}>Entrar com Google</ThemedText>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 40,
    zIndex: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: height * 0.15, // Posicionamento responsivo
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
  heartGradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: Math.min(48, width * 0.12), // Responsivo
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Math.min(18, width * 0.045), // Responsivo
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: Math.min(14, width * 0.035), // Responsivo
    color: '#000',
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.8,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 20,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    minHeight: 56, // Garantir altura mínima
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    minHeight: 56, // Garantir altura mínima
  },
  appleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});