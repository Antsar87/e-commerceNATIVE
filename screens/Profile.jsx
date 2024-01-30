import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';
import Loader from '../components/Loader';

const Profile = ({ route }) => {
  const [image, setImage] = useState({});
  const navigate = useNavigation();

  const loading = false;

  const handleActions = (type) => {
    switch (type) {
      case 'Orders':
        navigate.navigate('orders');
        break;

      case 'Admin':
        navigate.navigate('adminPanel');
        break;

      case 'Profile':
        navigate.navigate('updateProfile');
        break;

      case 'Password':
        navigate.navigate('changePassword');
        break;

      case 'Sign Out':
        Alert.alert('Sign Out');
        break;

      default:
        navigate.navigate('order');
        break;
    }
  };

  useEffect(() => {
    setImage(route?.params || {});
  }, [route?.params?.uri]);

  return (
    <>
      <LayoutScreens title={'Profile'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <View
              style={{
                backgroundColor: colors.color3,
                borderRadius: 5,
                marginTop: 20,
                justifyContent: 'center',
                padding: 20,
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <Avatar.Image
                  size={80}
                  style={{
                    backgroundColor: colors.color2,
                    alignSelf: 'center',
                  }}
                  source={{
                    uri:
                      image.uri ||
                      'https://th.bing.com/th/id/R.bc02443cfdbb46bad773c1fd5a0bae92?rik=WOj%2bAJL3d3pZvQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_181369.png&ehk=f%2f4GPvSh%2bAbwz1aWNGbWCl6en5XJp2ubj0Zn1ljTwe0%3d&risl=&pid=ImgRaw&r=0',
                  }}
                />

                <TouchableOpacity
                  onPress={() =>
                    navigate.navigate('camera', { redirect: 'profile' })
                  }
                >
                  <Text style={{ textAlign: 'center', color: colors.color2 }}>
                    Change Photo
                  </Text>
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  color: colors.color2,
                  textAlign: 'center',
                  fontSize: 20,
                }}
              >
                Test Name
              </Text>
              <Text
                style={{
                  color: colors.color2,
                  textAlign: 'center',
                  fontSize: 15,
                }}
              >
                sample@gmail.com
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
                gap: 30,
              }}
            >
              <ButtonBox
                onPressAction={handleActions}
                icon={'format-list-bulleted-square'}
                text={'Orders'}
              />

              <ButtonBox
                onPressAction={handleActions}
                icon={'view-dashboard'}
                text={'Admin'}
              />

              <ButtonBox
                onPressAction={handleActions}
                icon={'pencil'}
                text={'Profile'}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
                gap: 30,
              }}
            >
              <ButtonBox
                onPressAction={handleActions}
                icon={'pencil'}
                text={'Password'}
              />

              <ButtonBox
                onPressAction={handleActions}
                icon={'exit-to-app'}
                text={'Sign Out'}
              />
            </View>
          </>
        )}
      </LayoutScreens>

      <Footer />
    </>
  );
};

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

export default Profile;
