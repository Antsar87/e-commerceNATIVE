import { Camera, CameraType } from 'expo-camera';
import React, { useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { colors } from '../styles/styles';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const CameraScreen = ({ route }) => {
  const navigate = useNavigation();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  let camera;

  useEffect(() => {
    if (permission?.granted) return;
    requestPermission();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const pickerImageHandle = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult?.granted) return;
    console.log(permissionResult);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      console.log(result);
      navigate.navigate(route?.params.redirect, result.assets[0]);
    }
  };

  const handleCamera = async () => {
    if (!permission?.granted) return;
    const photo = await camera.takePictureAsync();

    navigate.navigate(route?.params.redirect, photo);
    console.log(photo);
  };

  if (!permission?.granted)
    return (
      <SafeAreaView>
        <Text>No camera access</Text>
      </SafeAreaView>
    );

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={{ flex: 1, aspectRatio: 1 }}
        ref={(e) => (camera = e)}
        zoom={0}
        // flashMode={false ? Camera.Constants.FlashMode.torch : false}
      />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flex: 1,
          gap: 10,
          width: '100%',
          position: 'absolute',
          bottom: 20,
        }}
      >
        <IconHandler icon={'image'} handle={pickerImageHandle} />
        <IconHandler icon={'camera'} handle={handleCamera} />
        <IconHandler icon={'camera-flip'} handle={toggleCameraType} />
      </SafeAreaView>
    </View>
  );
};

const IconHandler = ({ icon, handle }) => (
  <TouchableOpacity onPress={handle}>
    <Avatar.Icon
      icon={icon}
      size={50}
      style={{ backgroundColor: colors.color1_light2 }}
    />
  </TouchableOpacity>
);

export default CameraScreen;
