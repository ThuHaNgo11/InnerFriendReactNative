// Screen to show insights from the user's journal entries
// mood patterns, word frequency, etc.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Insight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insight screen</Text>
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

export default Insight;