import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTaskStore } from './store/taskStore';
import { loadTasksFromStorage } from "./utils/storage"

export default function App() {
  const { setTasks } = useTaskStore();

  useEffect(() => {
    const fetchData = async () => {
      const storedTasks = await loadTasksFromStorage();
      if (storedTasks) setTasks(storedTasks);
    };
    fetchData();
  }, []);

  return (
      <SafeAreaView style={styles.container}>

  
      <TodoInput />
      <TodoList />

 </SafeAreaView>
  );
}

const styles = StyleSheet.create({

	container: {
    width:390,
    height:844,
   
    

		flex: 1,
		backgroundColor: "#1B1A17",
	},
  scrollView: {
		flex: 1,
		backgroundColor: "#1B1A17",
		paddingHorizontal: 23,
	},
});