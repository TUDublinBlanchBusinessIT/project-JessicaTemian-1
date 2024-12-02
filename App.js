import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { auth, db } from './firebaseConfig'; // Import Firebase

// Create the stack navigator
const Stack = createStackNavigator();

// Main page with login and sign-up options
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Feather name="moon" size={48} color="#ECEFF1" style={styles.icon} />
        <Text style={styles.greeting}>Welcome Back!</Text>
        <Text style={styles.description}>Improve your sleep with personalized soundscapes.</Text>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.boxText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.boxText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// SignUp page where the user enters their details
function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Handle Sign Up logic
  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveData(user.uid);  // Save additional user details to Firestore
        Alert.alert('Sign Up Success', 'User created successfully!');
        navigation.navigate('Home');  // Navigate back to the Home screen
      })
      .catch((error) => {
        Alert.alert('Error', error.message); // Show any error that happens during sign-up
      });
  };

  // Save user data to Firestore
  const saveData = async (userId) => {
    try {
      await db.collection('users').add({
        userId: userId,
        name: name,
        email: email,
      });
      console.log('User saved to Firestore');
    } catch (err) {
      console.error('Error adding document:', err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.box} onPress={handleSignUp}>
        <Text style={styles.boxText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// Login page (similar to the SignUp page)
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Login Success', 'User logged in successfully!');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.box} onPress={handleLogin}>
        <Text style={styles.boxText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// App component that contains the navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
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


