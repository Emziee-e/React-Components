import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatLs = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} // disable internal scrolling so parent ScrollView scrolls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});

export default FlatLs;
