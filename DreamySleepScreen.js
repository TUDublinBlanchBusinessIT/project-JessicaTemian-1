import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Dreamy Sleep Screen
export default function DreamySleepScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dreamy Sleep</Text>

      <TouchableOpacity style={styles.button} onPress={() => { /* Logic for Ocean Waves */ }}>
        <Text style={styles.buttonText}>Ocean Waves</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { /* Logic for Rain & Thunder */ }}>
        <Text style={styles.buttonText}>Rain & Thunder</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { /* Logic for Forest Ambience */ }}>
        <Text style={styles.buttonText}>Forest Ambience</Text>
      </TouchableOpacity>

      {/* Move the "Go to Sound Mixer" button here */}
      <TouchableOpacity onPress={() => navigation.navigate('SoundMixer')} style={styles.soundMixerButton}>
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
