import { Text, TouchableOpacity, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';

const Verify = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigation();

  return (
    <>
      <LayoutScreens title={'reset passwords'}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.color3,
            borderRadius: 5,
            marginTop: 20,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            placeholder="OTP"
            mode="outlined"
            outlineColor="transparent"
            keyboardType="numeric"
            activeOutlineColor={colors.color1_light2}
            onChangeText={setEmail}
            style={{ marginBottom: 20 }}
          />

          <TextInput
            placeholder="New Password"
            mode="outlined"
            outlineColor="transparent"
            activeOutlineColor={colors.color1_light2}
            onChangeText={setPassword}
            style={{ marginBottom: 20 }}
          />

          {/* <Button
            style={{ alignSelf: 'flex-end', marginBottom: 20, opacity: 0.4 }}
            textColor={colors.color6}
          >
            Forget Password?
          </Button> */}

          <Button
            style={{ backgroundColor: colors.color1_light2 }}
            textColor={colors.color5}
          >
            Send OTP
          </Button>

          <Text
            style={{
              marginVertical: 10,
              textAlign: 'center',
              color: colors.color5,
              fontSize: 20,
              opacity: 0.4,
            }}
          >
            OR
          </Text>

          <TouchableOpacity
            textColor={colors.color6}
            onPress={() => navigate.navigate('forgetPassword')}
          >
            <Text
              style={{
                textAlign: 'center',
                color: colors.color6,
                fontSize: 20,
                textTransform: 'uppercase',
              }}
            >
              Resend otp
            </Text>
          </TouchableOpacity>
        </View>
      </LayoutScreens>

      <Footer />
    </>
  );
};

export default Verify;
