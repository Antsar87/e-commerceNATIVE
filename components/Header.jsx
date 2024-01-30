import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({ back }) => {
  const navigate = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row'}} activeOpacity={1}>
        {back && (
          <Pressable onPress={navigate.goBack}>
            <Avatar.Icon
              icon="arrow-left"
              style={{ backgroundColor: 'transparent' }}
              color={colors.color3}
            />
          </Pressable>
        )}

        <Avatar.Icon
          icon="cart-outline"
          style={{ backgroundColor: 'transparent', marginLeft: 'auto' }}
          color={colors.color3}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
