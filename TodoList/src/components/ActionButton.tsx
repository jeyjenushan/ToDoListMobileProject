import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constant/Colors";
import { normalizeFont, scaleHeight, scaleWidth } from "../constant/responsive";


const ActionButton = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default ActionButton;

const styles = StyleSheet.create({



  button: {
    backgroundColor: Colors.backgroundDark,
    borderColor: Colors.primary,
    borderRadius: 4,
    borderWidth: 1,
    width: scaleWidth(64),
    height: scaleHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.text6primary,
    fontSize: normalizeFont(10),
    lineHeight: scaleHeight(18),
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    textAlign: 'center',
    width: '100%',
  },
});
