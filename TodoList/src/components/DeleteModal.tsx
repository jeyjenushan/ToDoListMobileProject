import React from 'react';
import { Modal, SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../responsive/responsive';

const DeleteModal = ({ visible, handleDelete, closeModal }: any) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}
    
    >
    

          <View style={styles.view}>
            <View style={styles.column}>

              <View style={styles.box7} />

              <View style={styles.view2}>
                <Text style={styles.text5}>{"Delete this task?"}</Text>
              </View>
           
                <View style={styles.row}>
                  <TouchableOpacity style={styles.button} onPress={handleDelete}>
                  <View style={styles.textContainer}>
                  <Text style={styles.text6}>{"Yes"}</Text>
                  </View>
            
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={closeModal}>
                  <View style={styles.textContainer}>
                  <Text style={styles.text6}>{"No"}</Text>
                  </View>
                  </TouchableOpacity>
                </View>

              </View>
           
          </View>
  
    </Modal>
  );
};

export default DeleteModal;
const styles = StyleSheet.create({


      view: {
        width: scaleWidth(390),
height: scaleHeight(844),
gap: 10,
alignItems:"center",
justifyContent:"center",
backgroundColor: "#070707E3"


      },
      column: {
        backgroundColor: "#1B1A17",
        borderRadius: 4,
        width:scaleWidth(281),
        height:scaleHeight(143),
        overflow: 'hidden',
      },
      box7: {
        width: scaleWidth(281),
        height: scaleHeight(4.47),
        backgroundColor: "#A35709",

      },

      view2: {
        width:scaleWidth(163.54),
        height:scaleHeight(26.81),
        top:scaleHeight(37.24),
        left:scaleWidth(75.98),
    
      },
      text5: {
        color: "#FFFFFF",
        fontSize: normalizeFont(18),
        lineHeight:scaleHeight(18),
        fontWeight:400,
        fontFamily:"Roboto-Regular",
        justifyContent:"center",
        alignItems:"center"
      },
      row: {
        flexDirection: "row",
        position: 'absolute',
        width: scaleWidth(138),
        height: scaleHeight(24),
        top: scaleHeight(105.68),
        left: scaleWidth(70.76),
        gap: scaleWidth(10),
      },
      button: {
        backgroundColor: "#242320",
        borderColor: "#A35709",
        borderRadius: 4,
        borderWidth: 1,
         width:scaleWidth(64),
         height:scaleHeight(24),
         position:"relative"
      },
      textContainer:{
        width:scaleWidth(54.86),
        height:scaleHeight(12),
        top:scaleHeight(6),
        left:scaleWidth(4.57),
          justifyContent:"center",
        alignItems:"center",
        position:"absolute"
      },



    
      text6: {
        color: "#D9D9D9",
        fontSize: normalizeFont(10), // Should match 12px height container
        lineHeight: scaleHeight(12), // Match container height
        textAlign: 'center',
        width: '100%',
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
      
      },
  

  
})