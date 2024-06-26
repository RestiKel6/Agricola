import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase'; // Import Firestore configuration
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSignUp = async () => {
    console.log('handleSignUp called');
    if (password !== confirmPassword) {
      Alert.alert("Password Error", "Passwords do not match");
      return;
    }

    try {
      console.log('Attempting to create user with email:', email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created successfully');
  
      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: fullName,
        email: user.email,
      });
  
      Alert.alert("Success", "Account created successfully. Please log in.");
      router.push('/login');
    } catch (error) {
      console.log('Error during sign up:', error);
      if (error instanceof Error) {
        Alert.alert("Signup Error", error.message);
      } else {
        Alert.alert("Signup Error", "An unexpected error occurred.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logoAgricola.png')} style={styles.logo} />
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subheading}>Create an account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
          <Image source={require('../assets/images/eyePassword.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeButton}>
          <Image source={require('../assets/images/eyePassword.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        Sudah Punya Akun? {' '}
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.signInLink}>Log In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subheading: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FB6B2B',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: '#000',
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FB6B2B',
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    color: '#000',
  },
  eyeButton: {
    padding: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FB6B2B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: 'black',
  },
  signInLink: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});