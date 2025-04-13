import React from 'react';
import { Modal, SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteModal = ({ visible, handleDelete, closeModal }: any) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.view}>
            <View style={styles.column}>
              <View style={styles.box7} />
              <View style={styles.view2}>
                <Text style={styles.text5}>{"Delete this task?"}</Text>
              </View>
              <View style={styles.view3}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.button} onPress={handleDelete}>
                    <Text style={styles.text6}>{"Yes"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2} onPress={closeModal}>
                    <Text style={styles.text6}>{"No"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default DeleteModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      scrollView: {
        flex: 1,
        backgroundColor: "#1B1A17",
      },
      view: {
        alignItems: "center",
        backgroundColor: "#070707E0",
        paddingVertical: 350,
      },
      view2: {
        alignItems: "center",
        marginBottom: 42,
      },
      view3: {
        alignItems: "center",
      },
      column: {
        alignItems: "flex-start",
        backgroundColor: "#1B1A17",
        borderRadius: 4,
        paddingBottom: 13,
      },
      box7: {
        width: 281,
        height: 4,
        backgroundColor: "#A35709",
        marginBottom: 33,
      },
      text5: {
        color: "#FFFFFF",
        fontSize: 18,
      },
      text6: {
        color: "#D9D9D9",
        fontSize: 10,
      },
      row: {
        flexDirection: "row",
        alignItems: "flex-start",
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
})