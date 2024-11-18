import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.greeting}>Welcome Back!</Text>
        <Text style={styles.description}>
          Improve your sleep with personalized soundscapes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3C4F3', // Soft Blue
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topSection: {
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#37474F', // Dark Gray
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ECEFF1', // Muted Gray
  },
});
