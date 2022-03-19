import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import {
    LineChart,
} from "react-native-chart-kit";

const LChart = () => {

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0.5,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: (opacity = 0.5) => `rgba(00, 50, 250,  ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        decimalPlaces: 0
      };
      
    const screenWidth = Dimensions.get("window").width * 85/100;

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43, 33],
            color: (opacity = 1) => `rgba(191, 221, 249, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Hours"] // optional
      };

  return (
    <LineChart
        data={data}
        width={screenWidth}
        height={180}
        chartConfig={chartConfig}
        style={styles.lineChart}
    />
  )
}

export default LChart

const styles = StyleSheet.create({
    lineChart: {
        marginTop: 40,
        borderRadius: 16,
    }
})