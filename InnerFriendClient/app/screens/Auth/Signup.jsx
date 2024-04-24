import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

import { signup } from '../../apis/user';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = async () => {
        // Perform signup logic here
        const signedUp = await signup(email, password, confirmPassword);
        if (signedUp.success === true) {
          navigation.navigate('Login');
        } else {
            setErrorMessage(signedUp.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                autoCompleteType="email"
                autoCorrect={false}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title={showPassword ? 'Hide' : 'Show'}
                    onPress={togglePasswordVisibility}
                />
            </View>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Button
                    title={showPassword ? 'Hide' : 'Show'}
                    onPress={togglePasswordVisibility}
                />
            </View>
            <Button title="Sign Up" onPress={handleSignup} />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      padding: 8,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    passwordInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 8,
      padding: 8,
    },
    error: {
      color: 'red',
      marginTop: 8,
    },
    success: {
      color: 'green',
      marginTop: 8,
    },
  });

export default Signup;