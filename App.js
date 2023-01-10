import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [sortSwitch, setSortSwitch] = useState(true);
  const [taskItems, setTaskItems] = useState([]);
  const handleAdd = () => {
    Keyboard.dismiss();
    if(sortSwitch==false)
    {
      taskItems.push(task)
      taskItems.sort()
      setTaskItems(taskItems)
    }
    else{
      taskItems.splice(0, 0, task);
      setTaskItems(taskItems);
    }
    setTask(null);
  };
  const sortHandler=()=>{
    setSortSwitch(!sortSwitch)
    let buffer1=[...taskItems]
    let buffer2=[...taskItems]
    if(sortSwitch==true)
    {
      buffer1=taskItems.sort()
      setTaskItems(buffer1)
    }
    else{
      setTaskItems(buffer2)
    }

  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskWrapper}>
        <View style={styles.header}>
          <Text style={styles.sectiontitle}>Todays'Task</Text>
          <TouchableOpacity onPress={sortHandler}>
            {sortSwitch == false ? (
              <Text style={styles.sortTitle}>Normal View</Text>
            ) : (
              <Text style={styles.sortTitle}>Sorted View</Text>
            )}
          </TouchableOpacity>
        </View>
        {taskItems.length === 0 ? (
          <View>
            <Text style={{ marginTop: 15, lineHeight: 20 }}>
              You're done with all your tasks 🎉
            </Text>
            <Text style={{ marginTop: 15, lineHeight: 20 }}>
              To add the items in sorted order, select Sorted View 🔠.
            </Text>
            <Text style={{ marginTop: 15, lineHeight: 20 }}>
              To add the items in the most recently added order, select Normal
              View 🆕.
            </Text>
          </View>
        ) : null}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemList}
        >
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Write a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sortTitle: {
    fontWeight: "bold",
    borderWidth: 1.5,
    borderColor: "#55BCF6",
    padding:5,
    borderRadius:5
  },
  sectiontitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemList: {
    marginTop: 30,
    height: "80%",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText: {
    fontSize: 24,
  },
});
