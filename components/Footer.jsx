import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigate = useNavigation();

  const autenticated = true;

  return (
    <View
      style={{
        backgroundColor: colors.color1_light,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        paddingHorizontal: 20,
      }}
    >
      <SafeAreaView
        style={{
          // paddingVertical: 2,
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigate.navigate('cart')}>
          <Avatar.Icon
            icon="shopping-outline"
            size={50}
            style={{ backgroundColor: 'transparent' }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate.navigate('Home')}>
          <Avatar.Icon
            icon="home"
            size={50}
            style={{ backgroundColor: 'transparent' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate.navigate(autenticated ? 'profile' : 'login')}
        >
          <Avatar.Icon
            icon="account-outline"
            size={50}
            style={{ backgroundColor: 'transparent' }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Footer;
