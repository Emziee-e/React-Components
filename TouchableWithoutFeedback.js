import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const WithoutFeedback = () => {
  const [count, setCount] = useState(0);

  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 5,
  },
  countText: {
    color: '#FF00FF',
    fontSize: 18,
  },
});

export default WithoutFeedback;
