import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from '../constant/Colors';
import { DeleteModalProps } from '../types/DelteModalProps';
import DeleteModalComponent from '../components/DeleteModal/DeleteModalComponent';
import ActionButton from '../components/ActionButton';





const DeleteModal: React.FC<DeleteModalProps> = ({
  visible,
  handleDelete,
  closeModal,
}) => {
    const {

      ModalHeader,
      ModalTitle

    } = DeleteModalComponent();
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <ModalHeader />
          <ModalTitle title="Delete this task?" />
          <View style={styles.buttonsContainer}>
            <ActionButton label="Yes" onPress={handleDelete} />
            <ActionButton label="No" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shareModelBackground,
  },
  modalContent: {
    backgroundColor: '#1B1A17',
    borderRadius: 4,
    width: scaleWidth(281),
    height: scaleHeight(143),
    overflow: 'hidden',
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    width: scaleWidth(138),
    height: scaleHeight(24),
    top: scaleHeight(105.68),
    left: scaleWidth(70.76),
    gap: scaleWidth(10),
  },

});

export default DeleteModal;