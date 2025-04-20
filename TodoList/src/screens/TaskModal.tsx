import React from 'react';
import { Modal, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from '../constant/Colors';
import { TaskModalProps } from '../types/TaskModalProps';


const TaskModal: React.FC<TaskModalProps> = ({
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

          <View style={styles.view}>
            <View style={styles.editWindow}>
            <View style={styles.column8}>
              <View style={styles.minInputContainer}>
              <TextInput
                placeholder={"Mini Input..."}
         placeholderTextColor= "#F0E3CA"
                value={editedTitle}
                onChangeText={setEditedTitle}
                style={styles.input8}
                           
              />
              </View>
          
          <View style={styles.maxInputContainer}>
          <TextInput
                placeholder={"Max Input..."}
                 placeholderTextColor= "#F0E3CA"
                value={editedNote}
                onChangeText={setEditedNote}
                multiline
                style={styles.input9}
              />

          </View>

              <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={cancelEditing}>
                  <View style={styles.textContainer}>
                  <Text style={styles.text}>{"Cancel"}</Text>
                  </View>
             
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={saveChanges}>
                  <View style={styles.textContainer}>
                  <Text style={styles.text}>{"Save"}</Text>
                  </View>
             
                </TouchableOpacity>
              </View>
            </View>
            </View>
          </View>

    </Modal>
  );
};

export default TaskModal;
const styles = StyleSheet.create({

    view:{
      flex: 1,
      backgroundColor: Colors.shareModelBackground,
      justifyContent: 'flex-end',
      },
      editWindow:{
        width:scaleWidth(360),
        height:scaleHeight(451),
        padding: scaleWidth(18),
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#1B1A17",

      },
      column8: {
        width:scaleWidth(324),
        height:scaleHeight(415),
        gap:scaleHeight(8)
        },

        minInputContainer:{
          width:scaleWidth(324),
          height:scaleHeight(35),
          borderRadius:4,
          borderWidth:1,
          borderColor:Colors.primary,
          backgroundColor:Colors.backgroundDark,
         
        },
        maxInputContainer:{
          width:scaleWidth(324),
          height:scaleHeight(343),
          borderRadius:4,
          borderWidth:1,
          borderColor:Colors.primary,
          backgroundColor:Colors.backgroundDark
        }
,



        input8: {

         top:scaleHeight(3),
          left:scaleWidth(9),
          fontFamily: 'Roboto-Regular', 
          fontWeight: "400",
            color: Colors.textPrimary,
            fontSize: normalizeFont(14),
            lineHeight:scaleHeight(18),
            alignItems:"center",},


            input9: {
              textAlignVertical:"top",
              width:scaleWidth(306),
              height:scaleHeight(326.72),
              top:scaleHeight(4.14),
              left:scaleWidth(9),
              fontFamily: 'Roboto-Regular', 
              fontWeight: "400",
                color: Colors.textPrimary,
                fontSize: normalizeFont(14),
                lineHeight:scaleHeight(18),
                alignItems:"center",},

                row: {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap:scaleWidth(12),
                  width:scaleWidth(324),
                  height:scaleHeight(24)
                },



        button: {
            backgroundColor: Colors.backgroundDark,
            borderColor: Colors.primary,
            borderRadius: 4,
            borderWidth: 1,
            width:scaleWidth(64),
            height:scaleHeight(24),
            justifyContent:"center"
       
          },
          textContainer:{
            width:scaleWidth(54.86),
            height:scaleHeight(12),
            left:scaleWidth(4.57),
               justifyContent:"center",
            alignItems:"center",
            bottom:scaleHeight(1)
            
          },


          text: {
            color: Colors.textPrimary,
            fontSize: normalizeFont(10),
        fontFamily: 'Roboto-Regular', 
            fontWeight: "400",
            lineHeight:scaleHeight(18),
         
      
        },
        
   







  


 
    })
  