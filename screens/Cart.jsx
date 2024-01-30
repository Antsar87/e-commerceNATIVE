import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigate = useNavigation();

  return (
    <View style={{ ...defaultStyle, paddingLeft: 0 }}>
      <Header back={true} />

      <View style={{ padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 25 }}>Shopping</Text>
        <Text style={{ fontSize: 25, fontWeight: 700 }}>Cart</Text>
      </View>

      <ScrollView>
        <View style={{ flex: 1 }}>
          {Array.from({ length: 5 }).map((item, idx) => (
            <Card key={idx} />
          ))}
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>5 items</Text>

          <Text>$5</Text>
        </View>

        <Pressable
          style={{
            backgroundColor: colors.color3,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
          onPress={() => navigate.navigate('confirmOrder')}
        >
          <Button icon={'cart'} textColor="white">
              Checkout
          </Button>
        </Pressable>
      </View>
    </View>
  );
};

const Card = () => (
  <View
    style={{
      flexDirection: 'row',
      gap: 20,
      paddingRight: 10,
      marginBottom: 20,
    }}
  >
    <View
      style={{
        backgroundColor: colors.color1_light,
        flexBasis: 150,
        paddingVertical: 5,
        alignItems: 'flex-end',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
      }}
    >
      <Image
        style={{
          width: 80,
          height: 80,
          transform: [{ translateX: 10 }, { translateY: -10 }],
        }}
        source={{
          uri: 'https://http2.mlstatic.com/como-poner-un-negocio-de-productos-quimicos-de-limpieza-D_NQ_NP_358701-MCO20409529135_092015-F.jpg',
        }}
      />
    </View>

    <View>
      <Text style={{ fontSize: 20 }}>Macbook</Text>
      <Text style={{ fontSize: 15, fontWeight: 700 }}>$4999</Text>
    </View>

    <View
      style={{
        marginLeft: 'auto',
      }}
    >
      <View style={{ gap: 5 }}>
        <Pressable style={{ ...styles.btn, backgroundColor: '#eee' }}>
          <Text>+</Text>
        </Pressable>
        <Text style={styles.btn}>0</Text>
        <Pressable style={{ ...styles.btn, backgroundColor: '#eee' }}>
          <Text>-</Text>
        </Pressable>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  btn: {
    width: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Cart;
