import React, { useState } from "react";  
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";  
  
export default function LoginScreen({ navigation, onLogin }) {  
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  
  const handleLogin = async () => {  
    try {  
      const response = await fetch("http://192.168.1.3:8000/api/auth/login", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        body: JSON.stringify({ username, password }),  
      });  
  
      const data = await response.json();  
  
      if (response.ok) {  
        onLogin(data.data.token);  
        Alert.alert("Success", "Login successful!");  
      } else {  
        Alert.alert("Error", data.message || "Invalid credentials");  
      }  
    } catch (error) {  
      Alert.alert("Error", "Failed to connect to server");  
    }  
  };  
  
  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Login</Text>  
      <TextInput  
        style={styles.input}  
        placeholder="Username"  
        value={username}  
        onChangeText={setUsername}  
      />  
      <TextInput  
        style={styles.input}  
        placeholder="Password"  
        secureTextEntry  
        value={password}  
        onChangeText={setPassword}  
      />  
      <Button title="Login" onPress={handleLogin} />  
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>  
        Don't have an account? Register  
      </Text>  
    </View>  
  );  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: "center",  
    padding: 20,  
  },  
  title: {  
    fontSize: 24,  
    marginBottom: 20,  
    textAlign: "center",  
  },  
  input: {  
    borderWidth: 1,  
    borderColor: "#ccc",  
    padding: 10,  
    marginBottom: 20,  
    borderRadius: 5,  
  },  
  registerText: {  
    marginTop: 20,  
    color: 'blue',  
    textAlign: 'center',  
  },  
});  
