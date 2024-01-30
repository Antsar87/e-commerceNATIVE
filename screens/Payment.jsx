import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Button, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  const [method, setMethod] = useState('');
  const navigate = useNavigation();

  const handlePayment = () => {
    if (!true) {
      navigate.navigate('logIn');
      return;
    }

    if (method === 'online') {
      console.log('Comprando online');
      return;
    }

    if (method === 'cod') {
      console.log('cod');
      return;
    }
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <View style={{ padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 25 }}>Payment</Text>
        <Text style={{ fontSize: 25, fontWeight: 700 }}>Method</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: colors.color3,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}
      >
        <RadioButton.Group onValueChange={setMethod} value={method}>
          <View style={style.container}>
            <Pressable onPress={() => setMethod('online')}>
              <Text style={style.text}>Cash on delivery</Text>
            </Pressable>
            <RadioButton color={colors.color1_light2} value="online" />
          </View>

          <View style={style.container}>
            <Pressable onPress={() => setMethod('cod')}>
              <Text style={style.text}>Online</Text>
            </Pressable>
            <RadioButton color={colors.color1_light2} value="cod" />
          </View>
        </RadioButton.Group>
      </View>

      {/* <Pressable onPress={() => navigate.navigate('payment')}> */}
      {method === 'online' && (
        <Button
          icon={'check-circle'}
          buttonColor={colors.color3}
          textColor="white"
          style={style.btn}
          onPress={handlePayment}
        >
          Place Order
        </Button>
      )}

      {method === 'cod' && (
        <Button
          icon={'circle-multiple-outline'}
          buttonColor={colors.color3}
          textColor="white"
          style={style.btn}
          onPress={handlePayment}
        >
          Pay
        </Button>
      )}
      {/* </Pressable> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  btn: {
    marginTop: 50,
  },

  text: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Payment;
