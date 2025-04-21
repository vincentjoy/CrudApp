import { Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import data from "@/data/todos"

export default function Index() {
  const [todos, setTodos] = useState(data.sort((a,b) => b.id - a.id)) // Sorting todo's in reverse order
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1; // Because of reverse sorting, now the last element is the first one. So new id will be last id + 1 = 21 presently
      setTodos([ {id: newId, title: text, completed: false}, ...todos ]) // Add the latest todo to the start of the list
      setText('') // Reset the text
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)) // Filter out all id's that doesn't match the id to delete and set that as todos
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
