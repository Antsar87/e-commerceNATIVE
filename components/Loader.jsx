import React from 'react';
import { SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../styles/styles';

const Loader = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center5'}}>
      <ActivityIndicator size={100} color={colors.color3} />
    </SafeAreaView>
  );
};

export default Loader;
