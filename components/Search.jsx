import React, { useEffect } from 'react';
import {
  BackHandler,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Avatar, Searchbar } from 'react-native-paper';
import { colors, defaultStyle } from '../styles/styles';

const Search = ({ open, setOpen }) => {
  function handleBackButtonClick() {
    setOpen(false);
    console.log('SIRVEEE');
    return true;
  }

  return (
    <Modal visible={open} animationType="slide">
      <View style={{ ...defaultStyle, paddingHorizontal: 10, paddingTop: 40 }}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              // paddingRight: 10,
            }}
          >
            <Pressable onPress={handleBackButtonClick}>
              <Avatar.Icon
                icon="keyboard-backspace"
                size={40}
                color={colors.color1}
                style={{
                  backgroundColor: colors.color2,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 9.22,
                  elevation: 12,
                }}
              />
            </Pressable>

            <Searchbar placeholder="Search..." style={{ flex: 1 }} />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default Search;
