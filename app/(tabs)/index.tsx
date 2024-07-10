import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image  
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Rayan Omar App</ThemedText> 
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">"What does Rayan Omar mean to you?"</ThemedText>
        <ThemedText>
          "But I...Wanna be a Hero Too! Like Rayan Omar!" - Dylan Hoang 2023{"\n\n"}
          "I will kill Rayan Omar!" - Kenneth Khoi Nguyen-Tran 1986{"\n\n"}
          "He is My Hero Academia!" - Carson Garner 2024
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});