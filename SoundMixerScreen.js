import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'; // Ensure this package is installed

export default function SoundMixerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sound Mixer</Text>

      {/* Sliders for different sounds */}
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Ocean</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1E88E5"
          maximumTrackTintColor="#000000"
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Rain</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1E88E5"
          maximumTrackTintColor="#000000"
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Forest</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1E88E5"
          maximumTrackTintColor="#000000"
        />
      </View>

      {/* "Next" button at the bottom */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SleepPreferences')}
      >
        <Text style={styles.buttonText}>Next: Set Sleep Preferences</Text>
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#37474F',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  button: {
    backgroundColor: '#37474F',
    padding: 15,
    borderRadius: 10,
    marginTop: 'auto', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ECEFF1',
    fontWeight: 'bold',
  },
});

