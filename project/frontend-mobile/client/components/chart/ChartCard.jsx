import React from "react"
import { LineChart } from "react-native-chart-kit"
import { View, Text, Dimensions } from "react-native"

const ChartCard = () => {
    const line = {
        labels: [
            "1/19/2023",
            "2/19/2023",
            "3/19/2023",
            "4/19/2023",
            "5/19/2023",
        ],
        datasets: [
            {
                data: [20, 40, 25, 35, 36, 40],
                strokeWidth: 1,
            },
        ],
    }

    return (
        <>
            <LineChart
                data={line}
                width={Dimensions.get("window").width - 40} // from react-native
                height={220}
                chartConfig={{
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 1,
                    color: (opacity) => `rgba(0, 109, 170, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    )
}
export default ChartCard
