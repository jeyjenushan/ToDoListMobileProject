import { Image, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { normalizeFont, scaleHeight, scaleWidth } from '../responsive/responsive';

const ShareSocial = ({ visible, closeModal }: any) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <View style={styles.row}>
          <View style={styles.circle}>
            <Image source={require("../../assets/Images/Content.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../../assets/Images/vk.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../../assets/Images/telegram.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../../assets/Images/whatsapp.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../../assets/Images/facebook.png")} style={styles.icon} />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ShareSocial;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#070707E0",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#1B1A17",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(20),
    marginHorizontal: scaleWidth(15),
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderRadius: 28,
    backgroundColor: "#ffffff20",
    marginRight: scaleWidth(16),
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width:scaleWidth(21),
    height: scaleHeight(21),
   
    resizeMode: "contain",

  },
});
