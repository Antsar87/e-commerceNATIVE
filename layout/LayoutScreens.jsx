import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';

const LayoutScreens = ({ title, children, top = true }) => {
  return (
    <View style={{...defaultStyle, paddingTop: top ? StatusBar.currentHeight : 0}}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: colors.color3,
            color: colors.color2,
            fontSize: 20,
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 10,
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Text>

        {children}
      </SafeAreaView>
    </View>
  );
};

export default LayoutScreens;
