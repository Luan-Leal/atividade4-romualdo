import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Conta de luz",
    value: "120,00",
    date: "20/10/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix do Silvão",
    value: "50,00",
    date: "12/10/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "1212.00",
    date: "05/10/2022",
    type: 1,
  },
];

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Header name="Luan"> </Header>
      <Balance saldo="1.000,00"></Balance>

      <View style={styles.buttonDiv}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("AddScreen")}
        >
          <Text style={styles.text}>Adicionar</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Últimas movimentação</Text>

      <FlatList
        style={styles.moviments}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  buttonDiv: {
    marginStart: 14,
    marginEnd: 14,

    width: "90%",
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
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  moviments: {
    marginStart: 14,
    marginEnd: 14,
  },
});
