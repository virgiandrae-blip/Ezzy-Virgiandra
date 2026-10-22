import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-ntive';
export default function LoginScreen({navigation}){
    return(
        <view style={style.container}>
            <text style={style.appName}>MY APP</text>
            <text style={style.yourName}>NAMA KAMU</text>

            <TextInput
        style={styles.input}
        placeholder="INPUT EMAIL"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="INPUT PASSWORD"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>TOMBOL LOGIN</Text>
      </TouchableOpacity>
    </view>
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
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  yourName: {
    fontSize: 18,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});