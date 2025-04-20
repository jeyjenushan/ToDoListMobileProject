import { Image, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from "../constant/Colors";
import { SOCIAL_ICONS } from "../constant/socialIcons";
import { ShareSocialProps } from "../types/ShareSocialProps";



const ShareSocial: React.FC<ShareSocialProps> = ({ 
  visible, 
  closeModal,
  onIconPress 
}) => {
  const handleIconPress = (iconId: string) => {
    if (onIconPress) {
      onIconPress(iconId);
    }

  };

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
            {SOCIAL_ICONS.map((icon) => (
              <TouchableWithoutFeedback 
                key={icon.id}
                onPress={() => handleIconPress(icon.id)}
              >
                <View style={styles.circle}>
                  <Image source={icon.source} style={styles.icon} />
                </View>
              </TouchableWithoutFeedback>
            ))}
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
