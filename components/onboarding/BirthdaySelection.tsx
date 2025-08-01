import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

interface BirthdaySelectionProps {
  onNext: (birthday: { month: string; day: number; year: number }) => void;
  onBack: () => void;
  userGender: string;
}

export function BirthdaySelection({ onNext, onBack, userGender }: BirthdaySelectionProps) {
  const insets = useSafeAreaInsets();
  const [selectedMonth, setSelectedMonth] = useState('September');
  const [selectedDay, setSelectedDay] = useState(4);
  const [selectedYear, setSelectedYear] = useState(2007);

  const months = [
    'September', 'October', 'November', 'December', 
    'January', 'February', 'March'
  ];
  
  const days = [3, 4, 5];
  const years = [2006, 2007, 2008];

  const getGenderEmoji = () => {
    switch (userGender) {
      case 'female': return '👩';
      case 'male': return '👨';
      default: return '🧑';
    }
  };

  const getGenderText = () => {
    switch (userGender) {
      case 'female': return 'M';
      case 'male': return 'M';
      default: return 'NB';
    }
  };

  const handleContinue = () => {
    onNext({
      month: selectedMonth,
      day: selectedDay,
      year: selectedYear,
    });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.userTag}>
        <ThemedText style={styles.userTagText}>
          {getGenderEmoji()} {getGenderText()}, 18
        </ThemedText>
      </View>

      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Seu aniversário</ThemedText>
          <ThemedText style={styles.subtitle}>
            Dessa forma você e outras pessoas poderão{'\n'}
            se encontrar pela idade
          </ThemedText>
        </View>

        <View style={styles.pickerContainer}>
          <View style={styles.pickerRow}>
            <View style={styles.pickerColumn}>
              <ThemedText style={styles.columnHeader}>Mês</ThemedText>
              <View style={styles.selectedItem}>
                <ThemedText style={styles.selectedText}>September</ThemedText>
              </View>
              <ThemedText style={styles.unselectedText}>October</ThemedText>
            </View>

            <View style={styles.pickerColumn}>
              <ThemedText style={styles.columnHeader}>Dia</ThemedText>
              <ThemedText style={styles.unselectedText}>3</ThemedText>
              <View style={styles.selectedItem}>
                <ThemedText style={styles.selectedText}>4</ThemedText>
              </View>
              <ThemedText style={styles.unselectedText}>5</ThemedText>
            </View>

            <View style={styles.pickerColumn}>
              <ThemedText style={styles.columnHeader}>Ano</ThemedText>
              <ThemedText style={styles.unselectedText}>2006</ThemedText>
              <View style={styles.selectedItem}>
                <ThemedText style={styles.selectedText}>2007</ThemedText>
              </View>
              <ThemedText style={styles.unselectedText}>2008</ThemedText>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <ThemedText style={styles.continueButtonText}>Continuar</ThemedText>
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
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 120,
    paddingBottom: 40,
    zIndex: 10,
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: Math.min(32, width * 0.08),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Math.min(16, width * 0.04),
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  pickerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    width: '100%',
    minHeight: 180,
    flex: 1,
    maxHeight: 250,
  },
  pickerRow: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pickerColumn: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  columnHeader: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    marginBottom: 8,
  },
  selectedItem: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  unselectedText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    minHeight: 56,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});