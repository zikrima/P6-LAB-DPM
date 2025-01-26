
// src/screens/Beranda/BerandaScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BerandaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Beranda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
