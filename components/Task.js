import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circular}
        onPress={props.click}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "75%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
