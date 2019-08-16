import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import GradientLineExample from './GradientLine';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GradientLineExample/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
});

export default App;
