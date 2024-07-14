import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image source={require('@/assets/images/MunozvsOmar.jpg')}
        style={styles.rivalImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Rivalry with Edwin Munoz{'\n\n'}Stats</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">G/A</ThemedText>
        <ThemedText>
          Munoz: 5798 in 6 Games{'\n'}
          Omar: 4 in 69530 Games{'\n'}
        </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Header Goals Scored</ThemedText>
        <ThemedText>
          Munoz: 326 in 6 Games {'\n'}
          Omar: 1 in 69530 Games 
        </ThemedText>
      </ThemedView>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  rivalImage: { 
    width: 400,
    height: 500,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
