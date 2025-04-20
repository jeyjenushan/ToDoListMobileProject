// hooks/useTodoList.ts
import { useState } from 'react';
import { useTaskStore } from '../services/taskStore';

export const useTodoList = () => {
  const { tasks, deleteTask, updateTask } = useTaskStore();
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedNote, setEditedNote] = useState('');
  const [socialModel, setSocialModel] = useState(false);

  const confirmDelete = (id: number) => {
    setSelectedTaskId(id);
    setModalVisible(true);
  };

  const toggleExpand = (taskId: number) => {
    setSelectedTaskId(prev => (prev === taskId ? null : taskId));
  };

  const handleSocialModel = () => {
    setSocialModel(true);
  };

  const CloseSocialModel = () => {
    setSocialModel(false);
  };

  const handleDelete = () => {
    if (selectedTaskId !== null) {
      deleteTask(selectedTaskId);
      setModalVisible(false);
      setSelectedTaskId(null);
    }
  };

  const startEditing = (task: any) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedNote(task.note);
    setUpdateModalVisible(true);
  };

  const cancelEditing = () => {
    setUpdateModalVisible(false);
    setEditingTaskId(null);
    setEditedTitle('');
    setEditedNote('');
  };

  const closeDeleteModel = () => {
    setModalVisible(false);
    setSelectedTaskId(null);
  };

  const cancelRequest = () => {
    setModalVisible(false);
    setSelectedTaskId(null);
  };

  const saveChanges = () => {
    if (editingTaskId !== null) {
      updateTask(editingTaskId, { title: editedTitle, note: editedNote });
      setUpdateModalVisible(false);
      setEditingTaskId(null);
      setEditedTitle('');
      setEditedNote('');
    }
  };

  const toggleComplete = (id: number, completed: boolean) => {
    updateTask(id, { completed: !completed });
  };

  return {
    tasks,
    selectedTaskId,
    modalVisible,
    updateModalVisible,
    editingTaskId,
    editedTitle,
    editedNote,
    socialModel,
    confirmDelete,
    toggleExpand,
    handleSocialModel,
    CloseSocialModel,
    handleDelete,
    startEditing,
    cancelEditing,
    closeDeleteModel,
    cancelRequest,
    saveChanges,
    toggleComplete,
    setEditedTitle,
    setEditedNote,
  };
};