import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';

const SignUp = () => {
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
    <>
      <LayoutScreens title={'Sign up'}>
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
            <View style={{ marginBottom: 20 }}>
              <Avatar.Image
                size={80}
                style={{ backgroundColor: colors.color2, alignSelf: 'center' }}
                source={{
                  uri: 'https://th.bing.com/th/id/R.bc02443cfdbb46bad773c1fd5a0bae92?rik=WOj%2bAJL3d3pZvQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_181369.png&ehk=f%2f4GPvSh%2bAbwz1aWNGbWCl6en5XJp2ubj0Zn1ljTwe0%3d&risl=&pid=ImgRaw&r=0',
                }}
              />

              <TouchableOpacity>
                <Text style={{ textAlign: 'center', color: colors.color2 }}>
                  Change Photo
                </Text>
              </TouchableOpacity>
            </View>

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
              placeholder="Password"
              mode="outlined"
              outlineColor="transparent"
              activeOutlineColor={colors.color1_light2}
              onChangeText={setPassword}
              style={{ marginBottom: 20 }}
              secureTextEntry={true}
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

            <TouchableOpacity textColor={colors.color6} onPress={() => navigate.navigate('login')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.color6,
                  fontSize: 20,
                  textTransform: 'uppercase',
                }}
              >
                log In
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LayoutScreens>

      <Footer />
    </>
  );
};

export default SignUp;
