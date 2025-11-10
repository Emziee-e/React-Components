import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Switch = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <Text style={styles.bodyText}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center', 
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Switch;
