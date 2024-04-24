// Landing screen after login 
// or from the Splash Screen directly in case the user has already logged in

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomedButton from '../../components/CustomedButton';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.container}>
        <Button title="Calendar"></Button>
        <CustomedButton title="+" onPress={() => navigation.navigate('NewJournal')}/>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <Text style={styles.subtitle}>Good Morning</Text>
        <Text style={styles.title}>Thu Ha Ngo</Text>
        <Text style={styles.date}>Monday, 22 April 2024</Text>
        <Text style={styles.subtitle}>What do you feel like doing today?</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <CustomedButton title="Writing" onPress={() => navigation.navigate('NewJournal')} />
        <CustomedButton title="Reflecting" onPress={() => navigation.navigate('Insight')} />
      </View>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Home;