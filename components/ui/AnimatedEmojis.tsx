import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const emojis = [
  { emoji: '😎', x: 120, y: 120 },
  { emoji: '😍', x: 280, y: 120 },
  { emoji: '👩‍💻', x: 50, y: 180 },
  { emoji: '🌶️', x: 200, y: 160 },
  { emoji: '💧', x: 320, y: 160 },
  { emoji: '👀', x: 120, y: 220 },
  { emoji: '🙈', x: 220, y: 240 },
  { emoji: '👅', x: 300, y: 220 },
  { emoji: '🔥', x: 80, y: 300 },
  { emoji: '💚', x: 280, y: 300 },
];

interface AnimatedEmojiProps {
  emoji: string;
  x: number;
  y: number;
  delay?: number;
}

function AnimatedEmoji({ emoji, x, y, delay = 0 }: AnimatedEmojiProps) {
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      scale.value = withRepeat(
        withSequence(
          withTiming(1.1, { duration: 800 }),
          withTiming(1, { duration: 800 })
        ),
        -1,
        true
      );
      
      translateY.value = withRepeat(
        withSequence(
          withTiming(-5, { duration: 1000 }),
          withTiming(5, { duration: 1000 })
        ),
        -1,
        true
      );
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <Animated.Text 
      style={[
        styles.emoji,
        { left: x, top: y },
        animatedStyle,
      ]}
    >
      {emoji}
    </Animated.Text>
  );
}

export function AnimatedEmojis() {
  return (
    <>
      {emojis.map((item, index) => (
        <AnimatedEmoji
          key={index}
          emoji={item.emoji}
          x={item.x}
          y={item.y}
          delay={index * 200}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  emoji: {
    position: 'absolute',
    fontSize: 24,
    zIndex: 1,
  },
});