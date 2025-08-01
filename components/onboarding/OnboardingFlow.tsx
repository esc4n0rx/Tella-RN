import { GradientBackground } from '@/components/ui/GradientBackground';
import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { AvatarCapture } from './AvatarCapture';
import { BirthdaySelection } from './BirthdaySelection';
import { GenderSelection } from './GenderSelection';
import { InterestsSelection } from './InterestsSelection';
import { NotificationPermission } from './NotificationPermission';
import { WelcomeScreen } from './WelcomeScreen';

const { width } = Dimensions.get('window');

interface OnboardingData {
  gender: string;
  birthday: {
    month: string;
    day: number;
    year: number;
  };
  interests: string[];
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});
  const translateX = useSharedValue(0);

  const calculateAge = (birthday: { month: string; day: number; year: number }) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - birthday.year;
  };

  const animateToStep = (newStep: number, direction: 'forward' | 'backward' = 'forward') => {
    const slideDirection = direction === 'forward' ? -width : width;
    
    translateX.value = withTiming(slideDirection, { duration: 300 }, () => {
      runOnJS(setCurrentStep)(newStep);
      translateX.value = direction === 'forward' ? width : -width;
      translateX.value = withTiming(0, { duration: 300 });
    });
  };

  const handleNext = () => {
    animateToStep(currentStep + 1, 'forward');
  };

  const handleBack = () => {
    animateToStep(currentStep - 1, 'backward');
  };

  const handleGenderSelect = (gender: string) => {
    setOnboardingData(prev => ({ ...prev, gender }));
    animateToStep(currentStep + 1, 'forward');
  };

  const handleBirthdaySelect = (birthday: { month: string; day: number; year: number }) => {
    setOnboardingData(prev => ({ ...prev, birthday }));
    animateToStep(currentStep + 1, 'forward');
  };

  const handleComplete = (interests: string[]) => {
    const finalData = {
      ...onboardingData,
      interests,
    } as OnboardingData;
    
    onComplete(finalData);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen onNext={handleNext} />;
      
      case 1:
        return <GenderSelection onNext={handleGenderSelect} />;
      
      case 2:
        return (
          <NotificationPermission
            onNext={handleNext}
            onBack={handleBack}
            userGender={onboardingData.gender || ''}
          />
        );
      
      case 3:
        return (
          <BirthdaySelection
            onNext={handleBirthdaySelect}
            onBack={handleBack}
            userGender={onboardingData.gender || ''}
          />
        );
      
      case 4:
        return (
          <AvatarCapture
            onNext={handleNext}
            onBack={handleBack}
            userGender={onboardingData.gender || ''}
            userAge={onboardingData.birthday ? calculateAge(onboardingData.birthday) : 18}
          />
        );
      
      case 5:
        return (
          <InterestsSelection
            onComplete={handleComplete}
            onBack={handleBack}
            userGender={onboardingData.gender || ''}
            userAge={onboardingData.birthday ? calculateAge(onboardingData.birthday) : 18}
          />
        );
      
      default:
        return <WelcomeScreen onNext={handleNext} />;
    }
  };

  return (
    <GradientBackground>
      <Animated.View style={[styles.container, animatedStyle]}>
        {renderCurrentStep()}
      </Animated.View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});