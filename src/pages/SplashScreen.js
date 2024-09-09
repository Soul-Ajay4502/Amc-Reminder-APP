import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Navigate to Login Screen after 2 seconds
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color="#FFBB1A" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBB1A',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
