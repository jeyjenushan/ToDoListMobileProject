import { Image, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from "../constant/Colors";


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
    backgroundColor: Colors.shareModelBackground
  },
  row: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(20),
    marginHorizontal: scaleWidth(15),
    alignItems: "center",
    justifyContent: "center",
    height:scaleHeight(76)
  },
  circle: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderRadius: scaleWidth(24),
   backgroundColor:Colors.circleBackground,
    marginRight: scaleWidth(16),
    justifyContent: "center",
    alignItems: "center",
 
  },
  icon: {
    width:scaleWidth(24),
    height: scaleHeight(24),
   
    resizeMode: "contain",

  },
});
