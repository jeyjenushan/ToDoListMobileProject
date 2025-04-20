import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { normalizeFont, scaleHeight, scaleWidth } from '../constant/responsive';
import { Colors } from "../constant/Colors";
import { SOCIAL_ICONS } from "../constant/socialIcons";
import { ShareSocialProps } from "../types/ShareSocialProps";

const ShareSocial: React.FC<ShareSocialProps> = ({ 
  visible, 
  closeModal,
  onShare,
  selectedTaskId,
  tasks
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}
    >
      {/* Outer TouchableOpacity: Closes modal when tapping outside */}
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={closeModal}
      >
        {/* Inner View: Prevents modal close when tapping inside the row */}
        <View style={styles.rowContainer} onStartShouldSetResponder={() => true}>
          <View style={styles.row}>
            {SOCIAL_ICONS.map((icon) => (
              <TouchableOpacity 
                key={icon.id}
                onPress={() => {
                  if (onShare) {
                    onShare(icon.id, selectedTaskId, tasks);
                  } else {
                    closeModal();
                  }
                }}
                activeOpacity={0.7}
                style={styles.circle}
              >
                <Image source={icon.source} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  rowContainer: {
    // Prevents taps inside from closing modal
  },
  row: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(20),
    justifyContent: "space-around",
    height: scaleHeight(76)
  },
  circle: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderRadius: scaleWidth(24),
    backgroundColor: Colors.circleBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: scaleWidth(24),
    height: scaleHeight(24),
    resizeMode: "contain",
  },
});

export default ShareSocial;