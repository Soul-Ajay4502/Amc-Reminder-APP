import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>React Native</Text>
      <Text style={styles.bio}>
        Welcome to React Natrive
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default UserProfile;
