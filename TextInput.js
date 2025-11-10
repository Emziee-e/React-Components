import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const TextInputs = () => {
  const [text, setText] = useState('Useless Text');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  input: {
    height: 40,
    marginVertical: 5,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputs;
