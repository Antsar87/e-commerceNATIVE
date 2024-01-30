import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';
import Header from '../components/Header';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const navigate = useNavigation();

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: colors.color2,
      }}
    >
      <Header back={true} />

      <LayoutScreens top={false} title={'Change Password'}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.color3,
            borderRadius: 5,
            marginTop: 20,
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <TextInput
            placeholder="Old Password"
            mode="outlined"
            outlineColor="transparent"
            activeOutlineColor={colors.color1_light2}
            onChangeText={setOldPassword}
            style={{ marginBottom: 20 }}
          />

          <TextInput
            placeholder="Password"
            mode="outlined"
            outlineColor="transparent"
            activeOutlineColor={colors.color1_light2}
            onChangeText={setPassword}
            style={{ marginBottom: 20 }}
          />

          <Button
            style={{ backgroundColor: colors.color1_light2 }}
            textColor={colors.color5}
          >
            Change
          </Button>
        </View>
      </LayoutScreens>
    </View>
  );
};

export default ChangePassword;
