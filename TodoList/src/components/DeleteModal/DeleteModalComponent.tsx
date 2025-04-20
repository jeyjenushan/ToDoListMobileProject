import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { normalizeFont, scaleHeight, scaleWidth } from "../../constant/responsive";
import { Colors } from "../../constant/Colors";



export const DeleteModalComponent = () => {
// Reusable Button Component


// Reusable Modal Header Component
const ModalHeader = () => (
  <View style={styles.modalHeader} />
);

// Reusable Modal Title Component
const ModalTitle = ({ title }: { title: string }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.titleText}>{title}</Text>
  </View>
);
return {

ModalHeader,
ModalTitle
  };
}
export default DeleteModalComponent;

const styles = StyleSheet.create({

  modalHeader: {
    width: scaleWidth(281),
    height: scaleHeight(4.47),
    backgroundColor: Colors.primary,
  },
  titleContainer: {
    width: scaleWidth(163.54),
    height: scaleHeight(26.81),
    marginTop: scaleHeight(37.24),
    alignSelf: 'center',
  },
  titleText: {
    color: Colors.white,
    fontSize: normalizeFont(18),
    lineHeight: scaleHeight(18),
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },

});
