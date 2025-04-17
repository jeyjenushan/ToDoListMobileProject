import React, { useState } from 'react';
import { FlatList, View, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import { useTaskStore } from '../store/taskStore';
import TaskItem from './TaskItem'; // Task Item Component
import TaskModal from './TaskModal'; // Separate Modal Component
import DeleteModal from './DeleteModal'; // Separate Delete Modal Component
import { scaleWidth, scaleHeight, normalizeFont } from '../responsive/responsive'
import ShareSocial from './ShareSocial';
const TodoList = () => {
  const { tasks, deleteTask, updateTask } = useTaskStore();
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedNote, setEditedNote] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const[socialModel,setSocialModel]=useState(false)


  const confirmDelete = (id: number) => {
    setSelectedTaskId(id);
    setModalVisible(true);
  };
  const toggleExpand = (taskId: number) => {
    setSelectedTaskId(prev => (prev === taskId ? null : taskId));
  };
  const handleSocialModel=()=>{
    setSocialModel(true)
  }
  const CloseSocialModel=()=>{
    setSocialModel(false)
  }
  const handleDelete = () => {
    if (selectedTaskId !== null) {
      deleteTask(selectedTaskId);
      setModalVisible(false);
      setSelectedTaskId(null);
      setIsDeleting(true)
    }
  };
  const startEditing = (task: any) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedNote(task.note);
    setUpdateModalVisible(true);
  };

  const cancelEditing = () => {
    setIsDeleting(true)
    setUpdateModalVisible(false);
    setEditingTaskId(null);

    setEditedTitle('');
    setEditedNote('');
 
  };

  const closeDeleteModel=()=>{
    setIsDeleting(true)
    setModalVisible(false)
    

  }
  const cancelRequest=()=>{
    setModalVisible(false)
    setSelectedTaskId(null);
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
    <View>
 {!modalVisible && (
        tasks.length === 0 ? (
          <View style={styles.column2}>
            <View style={styles.box} />
            <Text style={styles.text}>{"No tasks"}</Text>
            <View style={styles.box2} />
          </View>
        ) : (
          <FlatList
            style={styles.column10}
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
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
                handleSocialModel={handleSocialModel}
                
              />
            )}
          />
        )
      )}

      
      {/* Delete Confirmation Modal */}
      <DeleteModal
        visible={modalVisible}
        handleDelete={() => handleDelete()}
        closeModal={closeDeleteModel}
      />

      {/* Update Modal */}
      <TaskModal
        visible={updateModalVisible}
        cancelRequest={cancelRequest}
        saveChanges={saveChanges}
        editedTitle={editedTitle}
        setEditedTitle={setEditedTitle}
        editedNote={editedNote}
        setEditedNote={setEditedNote}
        cancelEditing={cancelEditing}
      />
     <ShareSocial
        visible={socialModel}
        
        closeModal={CloseSocialModel}
      />

 </View>
  );
};

const styles = StyleSheet.create({
  column2: {
    width: scaleWidth(100),
    height: scaleHeight(53),
    alignItems: "center",
    marginTop: scaleHeight(78), // similar to 'top' if used relatively
    marginLeft: scaleWidth(145), // if inside a row or container
    gap: scaleHeight(12), // this works only in RN 0.71+ or use margins between children manually
  },


  box: {
    width: scaleWidth(64),
    height: scaleHeight(3),
    backgroundColor: "#FF8303",
   
	},
	box2: {
    width: scaleWidth(64),
    height: scaleHeight(3),
    backgroundColor: "#FF8303",

  },

  
	text: {


    width:scaleWidth(100),
    height:scaleHeight(29),
    fontWeight:400,
    
    justifyContent:"center",
    alignItems:"center",
		color: "#FFFFFF",
    fontSize: normalizeFont(24),
	},
  column10: { 
    marginTop: scaleHeight(33),
    left: scaleWidth(23),
   
    width:scaleWidth(345)
   },



});

export default TodoList;
