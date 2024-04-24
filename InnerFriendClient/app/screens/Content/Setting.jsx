
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  logoutButtonText: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default Setting;