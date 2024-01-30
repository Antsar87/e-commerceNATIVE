import { Image, Pressable,  ScrollView,  Text, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ConfirmOrder = () => {
  const navigate = useNavigation()
  
  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <View style={{ padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 25 }}>Confirm</Text>
        <Text style={{ fontSize: 25, fontWeight: 700 }}>Order</Text>
      </View>

      <ScrollView>
        <View style={{ flex: 1 }}>
          {Array.from({ length: 5 }).map((item, idx) => (
            <Card key={idx} />
          ))}
        </View>
      </ScrollView>

      <View style={{paddingTop: 15}}>
        <ResumeText title={'Subtotal'} mount={'$4000'} />

        <ResumeText title={'Shipping'} mount={'$200'} />

        <ResumeText title={'Tax'} mount={'$720'} />

        <ResumeText title={'Total'} mount={'$4920'} />
      </View>

      <Pressable
        style={{
          backgroundColor: colors.color3,
          paddingVertical: 10,
          borderRadius: 20,
          marginTop: 5,
        }}
        onPress={() => navigate.navigate('payment')}
      >
        <Button icon={'chevron-right'} textColor='white'>
          Payment
        </Button>
      </Pressable>
    </View>
  );
};

const ResumeText = ({ title, mount }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    }}
  >
    <Text style={{ fontWeight: 600 }}>{title}</Text>
    <Text>{mount}</Text>
  </View>
);

const Card = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      paddingRight: 10,
      marginBottom: 20,
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

    <Text style={{ fontSize: 15 }}>Macbook</Text>

    <View>
      <Text style={{ fontSize: 15 }}>2 x 8$</Text>
    </View>
  </View>
);

export default ConfirmOrder;
