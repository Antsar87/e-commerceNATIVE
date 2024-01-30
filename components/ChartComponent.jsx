import React from 'react';
import { Dimensions, Text } from 'react-native';
import { colors } from '../styles/styles';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('screen').width;

const ChartComponent = () => {

  const data = [
    {
      stock: 90,
      name: "Stock",
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      stock: 60,
      name: "no Stock",
      color: "blue",
      legendFontColor: colors.color2,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={'stock'}
      backgroundColor={'transparent'}
      paddingLeft={'15'}
      // center={[10, 50]}
      // absolute
    />
  );
};

export default ChartComponent;
