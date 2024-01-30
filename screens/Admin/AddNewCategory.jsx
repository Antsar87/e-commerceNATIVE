import { StyleSheet, Text, View } from 'react-native';
import { colors, defaultStyle } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
import LayoutScreens from '../../layout/LayoutScreens';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { Avatar, Button, TextInput } from 'react-native-paper';

const AddNewCategory = ({ route }) => {
  const navigate = useNavigation();

  console.log(route)

  const loading = false;

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
        <LayoutScreens title={'Categories'} top={false}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <View
                style={{
                  ...styles.container,
                  backgroundColor: '#eee',
                  flex: 1,
                }}
              >
                <View style={styles.box}>
                  <Text>Laptop</Text>
                  <Avatar.Icon
                    icon="delete"
                    style={{ backgroundColor: colors.color1_light }}
                    size={30}
                  />
                </View>
              </View>

              <View
                style={{ ...styles.container, backgroundColor: colors.color3 }}
              >
                <TextInput
                  style={{ backgroundColor: 'white' }}
                  placeholder="Category"
                />
                <Button
                  mode="outlined"
                  textColor="white"
                  style={{ marginTop: 10 }}
                >
                  Add
                </Button>
              </View>
            </>
          )}
        </LayoutScreens>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.color2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default AddNewCategory;
