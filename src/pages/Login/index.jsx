import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = React.useState("");
  const [saldo, setSaldo] = React.useState("");

  function toHomeScreen() {
    navigation.navigate("HomeScreen", { name: name, saldo: saldo });
    handleAsyncStorage();
  }

  async function handleAsyncStorage() {
    await AsyncStorage.setItem("@loginData", name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.warning}>
        Insira suas informações para prosseguir
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        onChangeText={setSaldo}
        value={saldo}
      />
      <Pressable style={styles.button} onPress={toHomeScreen}>
        <Text style={styles.text}>Confirmar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 55,
    marginBottom: 12,
  },
  warning: {
    marginBottom: 24,
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "75%",
    borderRadius: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#8000ff",
    marginTop: 15,
    width: "75%",
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
