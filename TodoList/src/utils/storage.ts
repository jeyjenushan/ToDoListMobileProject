import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../store/taskStore';

const STORAGE_KEY = 'TASKS';

export const saveTasksToStorage = async (tasks: Task[]) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving tasks', e);
  }
};

export const loadTasksFromStorage = async (): Promise<Task[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error loading tasks', e);
    return null;
  }
};