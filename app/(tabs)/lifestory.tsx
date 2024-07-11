import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LifeStory(){
    return(
        <ParallaxScrollView 
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
            <Image source={require('@/assets/images/THERayanOmar.jpg')}
            style={styles.mainImage}/>
        }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Rayan Omar: The Man</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Achievements</ThemedText>
                <ThemedText>
                    Professional Bloons-TD Player{'\n'}
                    Co-Founder of Rome industries
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    mainImage:{
        width:500,
        height:500,
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