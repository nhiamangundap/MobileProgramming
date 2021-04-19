import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Pendaftaran from './components/pages/Pendaftaran';

const App = () => {
  return (
    <View>
      <Text style={styles.Title}>Screen Pendaftaran</Text>
      <Pendaftaran />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 18,
  },
});