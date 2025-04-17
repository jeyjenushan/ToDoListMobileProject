import React, { useEffect } from 'react';
import { StatusBar,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTaskStore } from './store/taskStore';
import { loadTasksFromStorage } from "./utils/storage"
import { scaleWidth } from './responsive/responsive'; 

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
  
    
      <SafeAreaView  style={styles.container}>
        <StatusBar hidden/>
	<TodoInput />
    <TodoList />
     </SafeAreaView>

  );
}

const styles = StyleSheet.create({

	container: {
    flex: 1,
		backgroundColor: "#1B1A17",
	},

});