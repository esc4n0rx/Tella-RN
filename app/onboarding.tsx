import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function OnboardingScreen() {
  const handleOnboardingComplete = (data: any) => {
    console.log('Onboarding completed with data:', data);
    // Aqui você salvaria os dados do usuário
    // E redirecionaria para a tela principal
    router.replace('/(tabs)');
  };

  return (
    <OnboardingFlow onComplete={handleOnboardingComplete} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});