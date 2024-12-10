import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av'; // Import the Audio module

export default function DreamySleepScreen({ navigation }) {
  // Function to play sound
  const playSound = async (sound) => {
    try {
      const { sound: playbackObject } = await Audio.Sound.createAsync(sound);
      await playbackObject.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dreamy Sleep</Text>

      {/* Ocean Waves Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => playSound(require('./assets/sounds/ocean.wav.mp3'))}
      >
        <Text style={styles.buttonText}>Ocean Waves</Text>
      </TouchableOpacity>

      {/* Rain & Thunder Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => playSound(require('./assets/sounds/rain.wav.mp3'))}
      >
        <Text style={styles.buttonText}>Rain & Thunder</Text>
      </TouchableOpacity>

      {/* Forest Ambience Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => playSound(require('./assets/sounds/forest.wav.mp3'))}
      >
        <Text style={styles.buttonText}>Forest Ambience</Text>
      </TouchableOpacity>

      {/* Go to Sound Mixer Button */}
      <TouchableOpacity
        style={styles.soundMixerButton}
        onPress={() => navigation.navigate('SoundMixer')}
      >
        <Text style={styles.buttonText}>Go to Sound Mixer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3C4F3',
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#37474F',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ECEFF1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  soundMixerButton: {
    backgroundColor: '#ECEFF1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#37474F',
  },
});
