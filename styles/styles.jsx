import { StatusBar, StyleSheet } from 'react-native';

export const colors = {
  color1: '#370049',
  color1_light: 'rgb(227, 25, 99)',
  color1_light2: 'rgba(199, 0, 73, 0.8)',
  color2: 'white',
  color3: 'rgb(45,45,45)',
  color4: 'transparent',
  color5: '#f2f2f2',
  color6: '#f8f8f8',
};

export const defaultStyle = StyleSheet.create({
  padding: 10,
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  backgroundColor: colors.color2,
});

export const inputSyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});
