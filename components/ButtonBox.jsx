import { Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const ButtonBox = ({ text, onPressAction, icon }) => (
  <TouchableOpacity
    style={{
      backgroundColor: colors.color1_light2,
      paddingVertical: 5,
      height: 80,
      width: 80,
      borderRadius: 20,
    }}
    onPress={() => onPressAction(text)}
  >
    <Avatar.Icon
      icon={icon}
      size={45}
      style={{ backgroundColor: 'transparent', alignSelf: 'center' }}
    />

    <Text style={{ textAlign: 'center', color: colors.color2 }}>{text}</Text>
  </TouchableOpacity>
);

export default ButtonBox