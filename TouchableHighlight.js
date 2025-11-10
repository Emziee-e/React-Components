import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Highlight = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} style={styles.touchable}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count > 0 ? count : null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
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

export default Highlight;
