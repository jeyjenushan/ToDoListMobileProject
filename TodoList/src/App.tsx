import React, { useEffect } from 'react';
import { StatusBar,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTaskStore } from './services/taskStore';
import { loadTasksFromStorage } from "./services/storage"
import { scaleHeight, scaleWidth } from './constant/responsive'; 
import { Colors } from './constant/Colors';

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
        <StatusBar/>
	<TodoInput />
    <TodoList />
     </SafeAreaView>

  );
}

const styles = StyleSheet.create({

	container: {
       height:scaleHeight(844),
       width:scaleWidth(390),
      backgroundColor: Colors.backgroundLight
	},

});