import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';
import Header from '../components/Header';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPincode] = useState('');
  const [avatar, setAvatar] = useState('');

  const navigate = useNavigation();

  return (
    <View style={{paddingTop: StatusBar.currentHeight, flex: 1, backgroundColor: colors.color2}}>
      <Header back={true} />

      <LayoutScreens title={'Edit Profile'} top={false}>
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
          <ScrollView>
            <TextInput
              placeholder="Name"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setName}
              style={{ marginBottom: 20 }}
            />

            <TextInput
              placeholder="Email"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setEmail}
              style={{ marginBottom: 20 }}
            />

            <TextInput
              placeholder="Address"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setAddress}
              style={{ marginBottom: 20 }}
            />
            <TextInput
              placeholder="City"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setCity}
              style={{ marginBottom: 20 }}
            />

            <TextInput
              placeholder="Country"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setCountry}
              style={{ marginBottom: 20 }}
            />

            <TextInput
              placeholder="Pin Code"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setPincode}
              style={{ marginBottom: 20 }}
            />

            <Button
              style={{ backgroundColor: colors.color1_light2 }}
              textColor={colors.color5}
            >
              Sign Up
            </Button>
          </ScrollView>
        </View>
      </LayoutScreens>
    </View>
  );
};

export default UpdateProfile;
