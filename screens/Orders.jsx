import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../layout/LayoutScreens';
import Header from '../components/Header';

const Orders = () => {
  const navigate = useNavigation();

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: colors.color2,
      }}
    >
      <Header back={true} />

      <LayoutScreens title={'Orders'} top={false}>
        <View style={{ marginTop: 30, marginBottom: 70 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </ScrollView>
        </View>
      </LayoutScreens>
    </View>
  );
};

const OrderItem = ({}) => (
  <View style={{marginBottom: 10}}>
    <Text
      style={{
        backgroundColor: colors.color1_light,
        color: colors.color2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
      }}
    >
      ID - #fdlasjfklds
    </Text>

    <View style={{ backgroundColor: colors.color3, padding: 10 }}>
      <Text style={{ color: colors.color2, fontWeight: 300, marginBottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Address -</Text> 73 ester, met,india
      </Text>

      <Text style={{ color: colors.color2, fontWeight: 300, marginBottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Address -</Text> 73 ester, met,india
      </Text>

      <Text style={{ color: colors.color2, fontWeight: 300, marginBottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Address -</Text> 73 ester, met,india
      </Text>

      <Text style={{ color: colors.color2, fontWeight: 300, marginBottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Address -</Text> 73 ester, met,india
      </Text>

      <Text style={{ color: colors.color2, fontWeight: 300, marginBottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Address -</Text> 73 ester, met,india
      </Text>

      <Button
        icon={'update'}
        mode="outlined"
        textColor="white"
        style={{ width: 120, alignSelf: 'center' }}
      >
        Update
      </Button>
    </View>
  </View>
);

export default Orders;
