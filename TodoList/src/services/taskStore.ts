import { create } from 'zustand';
import { saveTasksToStorage } from './storage';

import { Task } from '../types/Task';

type TaskStore = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: { title: string; note: string }) => void;
  updateTask: (id: number, updatedFields: Partial<Task>) => void;
  deleteTask: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: ({ title, note }) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      note,
      completed: false,
    };
    set((state) => {
      const updated = [...state.tasks, newTask];
      saveTasksToStorage(updated);
      return { tasks: updated };
    });
  },
  updateTask: (id, updatedFields) => {
    set((state) => {
      const updated = state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      );
      saveTasksToStorage(updated);
      return { tasks: updated };
    });
  },
  deleteTask: (id) => {
    set((state) => {
      const updated = state.tasks.filter((task) => task.id !== id);
      saveTasksToStorage(updated);
      return { tasks: updated };
    });
  },
}));