import React, { useRef } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';

const slider_width = Dimensions.get('window').width;

const data = [
  {
    src: 'https://images.unsplash.com/photo-1704319180538-f57994377412?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    src: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const Product = () => {
  const isCarusel = useRef();

  const addToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Agregado',
      text2: 'Agregado al carrito',
    });
  };

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color1_light,
          paddingHorizontal: 0,
          paddingBottom: 0
        }}
      >
        <Header back={true} />

        <Carousel
          itemWidth={slider_width}
          sliderWidth={slider_width}
          renderItem={Slide}
          ref={isCarusel}
          data={data}
          layout="tinder"
        />

        <View
          style={{
            flex: 1,
            backgroundColor: colors.color2,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            marginTop: -380,
            paddingTop: 20,
            paddingHorizontal: 50,
          }}
        >
          <Text style={{ fontSize: 30 }}>Macbook pro</Text>
          <Text style={{ fontSize: 20, fontWeight: 800 }}>$32332</Text>

          <Text style={{ fontSize: 15, lineHeight: 25, marginTop: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            pariatur veritatis, maiores ea ducimus quaerat debitis rem, hic
            aspernatur reprehenderit perferendis tempora voluptas, vitae dolore
            et quibusdam odio autem voluptatibus.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text>Quantity</Text>

            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Pressable style={{ ...styles.btn, backgroundColor: '#eee' }}>
                <Text>+</Text>
              </Pressable>
              <Text style={styles.btn}>0</Text>
              <Pressable style={{ ...styles.btn, backgroundColor: '#eee' }}>
                <Text>-</Text>
              </Pressable>
            </View>
          </View>

          <Pressable
            style={{
              backgroundColor: colors.color3,
              paddingVertical: 10,
              borderRadius: 20,
              marginTop: 20,
            }}
            onPress={addToCart}
          >
            <Text style={{ textAlign: 'center', color: colors.color2 }}>
              Add To Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const Slide = ({ item }) => (
  <View
    style={{
      backgroundColor: colors.color1_light,
      height: 350,
      paddingTop: 30,
    }}
  >
    <Image
      source={{
        uri: item.src,
      }}
      style={{ width: slider_width, height: 250, resizeMode: 'contain' }}
    />
  </View>
);

const styles = StyleSheet.create({
  btn: {
    width: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
});
