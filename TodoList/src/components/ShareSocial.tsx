import { Image, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

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
            <Image source={require("../assets/Content.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../assets/vk.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../assets/telegram.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../assets/whatsapp.png")} style={styles.icon} />
          </View>
          <View style={styles.circle}>
            <Image source={require("../assets/facebook.png")} style={styles.icon} />
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
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ffffff20", // semi-transparent white or your preferred color
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
});
