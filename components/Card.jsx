import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate.push('product');
      }}
      style={{ width: 255, paddingRight: 35, paddingBottom: 10 }}
    >
      <View
        style={{
          backgroundColor: colors.color1_light,
          paddingHorizontal: 10,
          paddingTop: 20,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 25, color: colors.color2, fontWeight: 300 }}>
            Sample
          </Text>
          <Text style={{ fontSize: 25, color: colors.color2, fontWeight: 600 }}>
            $323232
          </Text>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
            paddingVertical: 70,
            transform: [{ translateX: 35 }],
          }}
        >
          <Image
            style={{ width: 170, height: 170 }}
            source={{
              uri: 'https://http2.mlstatic.com/como-poner-un-negocio-de-productos-quimicos-de-limpieza-D_NQ_NP_358701-MCO20409529135_092015-F.jpg',
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.color2,
          paddingVertical: 10,
          paddingHorizontal: 5,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
          borderBottomEndRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: colors.color1_light,
            fontWeight: 800,
            fontSize: 15,
          }}
        >
          Add To Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card;
