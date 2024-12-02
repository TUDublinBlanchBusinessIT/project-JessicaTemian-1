import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.topSection}>
        <Feather name="moon" size={48} color="#ECEFF1" style={styles.icon} />
        <Text style={styles.greeting}>Welcome Back!</Text>
        <Text style={styles.description}>
          Improve your sleep with personalized soundscapes.
        </Text>
      </View>

      <View style={styles.boxContainer}>
     
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Sign Up</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Login</Text>
        </TouchableOpacity>
      </View>
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
  topSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    marginBottom: 10,
  },
  greeting: {
    fontSize: 32,
    fontFamily: 'Pacifico',
    color: '#37474F',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ECEFF1',
    textAlign: 'center',
  },
  boxContainer: {
    width: '90%',
    marginTop: 20,
  },
  box: {
    backgroundColor: '#ECEFF1',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#37474F',
  },
});

