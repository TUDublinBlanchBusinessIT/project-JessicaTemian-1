import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db, auth } from './firebaseConfig'; // Ensure Firebase is configured

export default function SleepPreferencesScreen({ navigation }) {
  const [bedtime, setBedtime] = useState('');
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [sleepGoals, setSleepGoals] = useState('');
  const [relaxationPreference, setRelaxationPreference] = useState('');

  const handleSavePreferences = async () => {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    try {
      await db.ref(`users/${userId}/sleepPreferences`).set({
        bedtime,
        wakeUpTime,
        sleepGoals,
        relaxationPreference,
      });
      Alert.alert('Preferences Saved', 'Your sleep preferences have been saved.');
      navigation.navigate('DreamySleep'); // Navigate back to the main screen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Sleep Preferences</Text>

      <TextInput
        style={styles.input}
        placeholder="When do you usually go to bed? (e.g., 10:30 PM)"
        value={bedtime}
        onChangeText={setBedtime}
      />
      <TextInput
        style={styles.input}
        placeholder="When do you usually wake up? (e.g., 6:30 AM)"
        value={wakeUpTime}
        onChangeText={setWakeUpTime}
      />
      <TextInput
        style={styles.input}
        placeholder="What are your sleep goals? (e.g., Fall asleep faster)"
        value={sleepGoals}
        onChangeText={setSleepGoals}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you use this app for relaxation, meditation, or sleep?"
        value={relaxationPreference}
        onChangeText={setRelaxationPreference}
      />

      <TouchableOpacity style={styles.button} onPress={handleSavePreferences}>
        <Text style={styles.buttonText}>Save Preferences</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A3C4F3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#37474F',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ECEFF1',
    fontWeight: 'bold',
  },
});
