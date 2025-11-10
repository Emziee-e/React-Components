import React from 'react';
import { StyleSheet, ScrollView, Text, View, StatusBar } from 'react-native';
import ActIndi from './ActivityIndicator';
import Btn from './Button';
import FlatLs from './FlatList';
import DisplayImage from './Image';
import Switch from './Switch';
import TextInputs from './TextInput';
import Highlight from './TouchableHighlight';
import Opacity from './TouchableOpacity';
import WithoutFeedback from './TouchableWithoutFeedback';
import ViewCompo from './View';
import VirtualListCompo from './VirtualizedList';
import SectionListCompo from './SectionList';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/adaptive-icon.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>ActivityIndicator Component</Text>
        <ActIndi />

        <Text style={styles.title}>Button Component</Text>
        <Btn />

        <Text style={styles.title}>FlatList Component</Text>
        <FlatLs />

        <Text style={styles.title}>Image Component</Text>
        <DisplayImage />

        <Text style={styles.title}>SectionList Component</Text>
        <SectionListCompo />

        <Text style={styles.title}>Switch Component</Text>
        <Switch />

        <Text style={styles.title}>TextInput Component</Text>
        <TextInputs />

        <Text style={styles.title}>TouchableHighlight Component</Text>
        <Highlight />

        <Text style={styles.title}>TouchableOpacity Component</Text>
        <Opacity />

        <Text style={styles.title}>TouchableWithoutFeedback Component</Text>
        <WithoutFeedback />

        <Text style={styles.title}>View Component</Text>
        <ViewCompo />

        <Text style={styles.title}>VirtualizedList Component</Text>
        <VirtualListCompo />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
});
