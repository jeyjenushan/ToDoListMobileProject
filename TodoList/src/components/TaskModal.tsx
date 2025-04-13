import React from 'react';
import { Modal, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const TaskModal = ({
  visible,
  cancelRequest,
  cancelEditing,
  saveChanges,
  editedTitle,
  setEditedTitle,
  editedNote,
  setEditedNote,
}: any) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={cancelRequest}
    >
      <SafeAreaView style={styles.container8}>
        <ScrollView style={styles.scrollView8}>
          <View style={styles.view8}>
            <View style={styles.column8}>
              <TextInput
                placeholder={"Mini Input..."}
                value={editedTitle}
                onChangeText={setEditedTitle}
                style={styles.input8}
              />
              <TextInput
                placeholder={"Max Input..."}
                value={editedNote}
                onChangeText={setEditedNote}
                style={styles.input9}
              />
              <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={cancelEditing}>
                  <Text style={styles.text}>{"Cancel"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={saveChanges}>
                  <Text style={styles.text}>{"Save"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default TaskModal;
const styles = StyleSheet.create({
    container8: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    view8:{
        backgroundColor: "#070707E0",
            paddingTop: 393,
      },
      column8: {
            backgroundColor: "#1B1A17",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 18,
            marginHorizontal: 15,
        },
        input8: {
            color: "#F0E3CA",
            fontSize: 14,
            marginBottom: 8,
            backgroundColor: "#242320",
            borderColor: "#A35709",
            borderRadius: 4,
            borderWidth: 1,
            paddingVertical: 7,
            paddingLeft: 9,
            paddingRight: 18,
        },
        input9: {
            color: "#F0E3CA",
            fontSize: 14,
            marginBottom: 8,
            backgroundColor: "#242320",
            borderColor: "#A35709",
            borderRadius: 4,
            borderWidth: 1,
            paddingVertical: 8,
            paddingLeft: 9,
            paddingRight: 18,
        },
        button: {
            backgroundColor: "#242320",
            borderColor: "#A35709",
            borderRadius: 4,
            borderWidth: 1,
            paddingVertical: 6,
            paddingHorizontal: 3,
            marginRight: 10,
          },
          button2: {
            backgroundColor: "#242320",
            borderColor: "#FF8303",
            borderRadius: 4,
            borderWidth: 1,
            paddingVertical: 6,
            paddingHorizontal: 3,
          },

          text: {
            color: "#F0E3CA",
            fontSize: 22,
        fontFamily: 'Roboto-Regular', 
            fontWeight: "normal",
            marginBottom: 4,
        },
        
      row: {
        flexDirection: "row",
        alignItems: "flex-start",
      },
      scrollView8: {
        flex: 1,
        backgroundColor: "#1B1A17",
      },






  


 
    })
  