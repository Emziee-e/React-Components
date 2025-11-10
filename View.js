import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewCompo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'blue', flex: 0.2 }]} />
        <View style={[styles.box, { backgroundColor: 'red', flex: 0.4 }]} />
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello World!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  box: {
    height: '100%',
  },
});

export default ViewCompo;
