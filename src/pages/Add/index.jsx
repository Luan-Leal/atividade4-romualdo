import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Add = ({ navigation }) => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");

  function toHome() {
    navigation.navigate("HomeScreen", { label: label, value: value });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar um novo controle de gastos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setLabel}
        value={label}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor gasto"
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={toHome}>
        <Text style={styles.text}>Confirmar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
    width: "75%",
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Add;
