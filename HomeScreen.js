import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME, USER</Text>

      <View style={styles.menuGrid}>
        <View style={styles.menuBox}>
          <Text>MENU 1</Text>
        </View>
        <View style={styles.menuBox}>
          <Text>MENU 1</Text>
        </View>
        <View style={styles.menuBox}>
          <Text>MENU 1</Text>
        </View>
        <View style={styles.menuBox}>
          <Text>MENU 1</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>TOMBOL LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 50,
  },
  menuBox: {
    width: 120,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 16,
  },
});