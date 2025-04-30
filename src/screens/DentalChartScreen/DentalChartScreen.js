import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const DentalChartScreen = () => (
  <View style={{ flex: 1 }}>
    <Text style={styles.header}>3D Mouth Model</Text>
    <WebView
      source={{ uri: 'http://192.168.1.166:3001/' }}
      style={{ flex: 1 }}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default DentalChartScreen;
