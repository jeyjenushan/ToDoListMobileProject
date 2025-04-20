
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useTodoList } from '../services/useTodoList';
import TaskItem from './TaskItem';
import TaskModal from '../screens/TaskModal';
import DeleteModal from '../screens/DeleteModal';
import ShareSocial from '../screens/ShareSocial';
import { scaleWidth, scaleHeight, normalizeFont } from '../constant/responsive';
import { Colors } from '../constant/Colors';

const TodoList = () => {
  const {
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
    handleShare
  } = useTodoList();

  return (
    <View style={{flex:1}}>
      {tasks.length === 0 ? (
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
              selectedTaskId={selectedTaskId}// This might need adjustment
              handleSocialModel={handleSocialModel}
            />
          )}
        />
      )}

      <DeleteModal
        visible={modalVisible}
        handleDelete={handleDelete}
        closeModal={closeDeleteModel}
      />

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
        onShare={handleShare}
        selectedTaskId={selectedTaskId}
        tasks={tasks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  column2: {
    width: scaleWidth(100),
    height: scaleHeight(53),
    alignItems: "center",
    marginTop: scaleHeight(78),
    marginLeft: scaleWidth(145),
    gap: scaleHeight(12),
  },
  box: {
    width: scaleWidth(64),
    height: scaleHeight(3),
    backgroundColor: Colors.accent,
  },
  box2: {
    width: scaleWidth(64),
    height: scaleHeight(3),
    backgroundColor: Colors.accent,
  },
  text: {
    fontFamily: "Inter_28pt-Regular",
    width: scaleWidth(100),
    height: scaleHeight(29),
    fontWeight: 400,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.white,
    fontSize: normalizeFont(24),
  },
  column10: { 
    marginTop: scaleHeight(33),
    left: scaleWidth(23),
    width: scaleWidth(345)
  },
});

export default TodoList;