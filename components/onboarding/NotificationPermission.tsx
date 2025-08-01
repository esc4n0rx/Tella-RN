import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface NotificationPermissionProps {
  onNext: () => void;
  onBack: () => void;
  userGender: string;
}

export function NotificationPermission({ onNext, onBack, userGender }: NotificationPermissionProps) {
  const getGenderEmoji = () => {
    switch (userGender) {
      case 'female': return '👩';
      case 'male': return '👨';
      default: return '🧑';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Notificações</ThemedText>
          <ThemedText style={styles.subtitle}>
            Precisamos da sua permissão para te avisar{'\n'}
            sobre novas mensagens e eventos
          </ThemedText>
        </View>

        <View style={styles.permissionCard}>
          <View style={styles.iconContainer}>
            <ThemedText style={styles.appIcon}>💫</ThemedText>
          </View>
          
          <ThemedText style={styles.permissionTitle}>
            "Tella" Gostaria de Te Enviar{'\n'}Notificações
          </ThemedText>
          
          <ThemedText style={styles.permissionDescription}>
            As notificações podem incluir alertas,{'\n'}
            sons e ícones de emblemas. Estes podem{'\n'}
            ser configurados em Configurações.
          </ThemedText>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.allowButton} onPress={onNext}>
              <ThemedText style={styles.allowButtonText}>Permitir</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.summaryButton} onPress={onNext}>
              <ThemedText style={styles.summaryButtonText}>
                Permitir no Resumo Programado
              </ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.denyButton} onPress={onNext}>
              <ThemedText style={styles.denyButtonText}>Não Permitir</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userTag}>
        <ThemedText style={styles.userTagText}>
          {getGenderEmoji()} {userGender === 'female' ? 'Mulher' : userGender === 'male' ? 'Homem' : 'Não-binário'}
        </ThemedText>
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
  permissionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 16,
  },
  appIcon: {
    fontSize: 32,
  },
  permissionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  permissionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  buttonsContainer: {
    width: '100%',
    gap: 1,
  },
  allowButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  summaryButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  denyButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  allowButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  summaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  denyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
});