import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, defaultStyle } from '../../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Footer from '../../components/Footer';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../../layout/LayoutScreens';
import Loader from '../../components/Loader';
import ButtonBox from '../../components/ButtonBox';
import Header from '../../components/Header';
import ChartComponent from '../../components/ChartComponent';

const AdminPanel = () => {
  const navigate = useNavigation();

  const loading = false;

  const handleActions = (type) => {
    switch (type) {
      case 'All Orders':
        navigate.navigate('orders');
        break;

      case 'Product':
        navigate.navigate('addNewProduct');
        break;

      case 'Category':
        navigate.navigate('addNewCategory');
        break;

      default:
        navigate.navigate('adminPanel');
        break;
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.color2,
          ...defaultStyle,
          paddingHorizontal: 0,
        }}
      >
        <Header back={true} />
        <LayoutScreens title={'Admin Panel'} top={false}>
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
                <ChartComponent />
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
                  icon={'plus'}
                  text={'Product'}
                />

                <ButtonBox
                  onPressAction={handleActions}
                  icon={'format-list-bulleted-square'}
                  text={'All Orders'}
                />

                <ButtonBox
                  onPressAction={handleActions}
                  icon={'plus'}
                  text={'Category'}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.color3,
                  marginTop: 15,
                  paddingVertical: 5,
                }}
              >
                <Text style={styles.text}>Image</Text>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Category</Text>
                <Text style={styles.text}>Stock</Text>
              </View>

              <AdminItem />
            </>
          )}
        </LayoutScreens>
      </View>
    </>
  );
};

const AdminItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.color1_light2,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'center',
    color: colors.color2,
  },
});

export default AdminPanel;
