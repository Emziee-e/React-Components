import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const ActIndi = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} />
      <ActivityIndicator style={styles.indicator} size="large" />
      <ActivityIndicator style={styles.indicator} size="small" color="#0000ff" />
      <ActivityIndicator style={styles.indicator} size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  indicator: {
    marginHorizontal: 8,
    marginVertical: 5,
  },
});

export default ActIndi;
