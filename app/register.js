import React, { useState } from 'react';
import { supabase } from '../Supabase';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Register = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([{ FirstName, LastName, address, city, email, phone }]);

      if (error) {
        console.error('Error saving registration:', error.message);
        Alert.alert('Error', 'Failed to save registration. Please try again.');
      } else {
        console.log('Registration successful:', data);
        
        // Show success popup
        Alert.alert('Success', 'Registration saved successfully!');

        // Clear form fields
        setFirstName('');
        setLastName('');
        setAddress('');
        setCity('');
        setEmail('');
        setPhone('');
      }
    } catch (err) {
      console.error('Unexpected error:', err.message);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <TextInput placeholder="First Name" value={FirstName} onChangeText={setFirstName} style={styles.input} />
      <TextInput placeholder="Last Name" value={LastName} onChangeText={setLastName} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default Register;
