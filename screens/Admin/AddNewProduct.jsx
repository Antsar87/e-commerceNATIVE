import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, defaultStyle } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../../layout/LayoutScreens';
import Header from '../../components/Header';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useEffect } from 'react';

const AddNewProduct = ({ route }) => {
  const navigate = useNavigation();

  console.log(route?.params, 'PRODUCTO');

  const [category, setCategory] = useState('');
  const [image, setImage] = useState({});

  const loading = false;

  useEffect(() => {
    setImage(route?.params || {});
  }, [route?.params?.uri]);

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
        <LayoutScreens top={false} title={'Add New Product'}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.color3,
              borderRadius: 5,
              marginTop: 20,
              padding: 20,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: colors.color3,
                  borderRadius: 5,
                  marginTop: 20,
                  justifyContent: 'center',
                  padding: 20,
                }}
              >
                <View style={{ marginBottom: 20 }}>
                  <Avatar.Image
                    size={80}
                    source={{ uri: image?.uri }}
                    style={{
                      backgroundColor: colors.color1_light,
                      alignSelf: 'center',
                    }}
                  />

                  <TouchableOpacity
                    style={{ position: 'absolute', bottom: -5, left: '53%' }}
                    onPress={() =>
                      navigate.navigate('camera', { redirect: 'addNewProduct' })
                    }
                  >
                    <Avatar.Icon
                      icon={'camera'}
                      size={30}
                      style={{
                        backgroundColor: colors.color2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                placeholder="Name"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor={colors.color1_light2}
                style={{ marginBottom: 20 }}
              />

              <TextInput
                placeholder="Description"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor={colors.color1_light2}
                style={{ marginBottom: 20 }}
              />

              <TextInput
                placeholder="Price"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor={colors.color1_light2}
                style={{ marginBottom: 20 }}
              />

              <TextInput
                placeholder="Stock"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor={colors.color1_light2}
                style={{ marginBottom: 20 }}
              />

              <Picker
                style={styles.inputText}
                itemStyle={{
                  color: colors.color2,
                }}
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>

              <Button
                style={{ backgroundColor: colors.color1_light2 }}
                textColor={colors.color5}
              >
                Create
              </Button>
            </ScrollView>
          </View>
        </LayoutScreens>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputText: { color: colors.color2, marginBottom: 20 },
});

export default AddNewProduct;
