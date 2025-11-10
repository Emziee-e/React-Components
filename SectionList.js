import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const SectionListCompo = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        scrollEnabled={false}
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
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default SectionListCompo;
