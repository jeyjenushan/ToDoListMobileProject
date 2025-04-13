import React, { useState } from 'react';
import { FlatList, View, Pressable, Text, StyleSheet } from 'react-native';
import { useTaskStore } from '../store/taskStore';
import TaskItem from './TaskItem'; // Task Item Component
import TaskModal from './TaskModal'; // Separate Modal Component
import DeleteModal from './DeleteModal'; // Separate Delete Modal Component

const TodoList = () => {
  const { tasks, deleteTask, updateTask } = useTaskStore();
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedNote, setEditedNote] = useState('');

  const confirmDelete = (id: number) => {
    setSelectedTaskId(id);
    setModalVisible(true);
  };
  const toggleExpand = (taskId: number) => {
    setSelectedTaskId(prev => (prev === taskId ? null : taskId));
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
    setEditingTaskId(null);
    setEditedTitle('');
    setEditedNote('');
    setUpdateModalVisible(false);
  };
  const cancelRequest=()=>{
    setModalVisible(false)
  }

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

  return (
    <View style={{ flex: 1 }}>
      {tasks.length === 0 ? (
        <View style={styles.column4}>
          <View style={styles.box} />
          <Text style={styles.text4}>{"No tasks"}</Text>
          <View style={styles.box2} />
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              cancelEditing={cancelEditing}
              confirmDelete={confirmDelete}
              startEditing={startEditing}
              toggleComplete={toggleComplete}
              toggleExpand={toggleExpand}
              selectedTaskId={selectedTaskId}
            />
          )}
        />
      )}
      {/* Update Modal */}
      <TaskModal
        visible={updateModalVisible}
        cancelRequest={cancelRequest}
        saveChanges={saveChanges}
        editedTitle={editedTitle}
        setEditedTitle={setEditedTitle}
        editedNote={editedNote}
        setEditedNote={setEditedNote}
      />
      {/* Delete Confirmation Modal */}
      <DeleteModal
        visible={modalVisible}
        handleDelete={() => handleDelete()}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  column4: { alignItems: 'center', paddingBottom: 12 },
  box: { width: 64, height: 3, backgroundColor: '#FF8303', marginBottom: 9 },
  text4: { color: '#FFFFFF', fontSize: 24 },
  box2: { width: 64, height: 3, backgroundColor: '#FF8303', marginBottom: 623 },
});

export default TodoList;
