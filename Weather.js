import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropsTypes from 'prop-types';

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container} >            
//                 <View style={styles.upper}>
//                     {/* expo에 있는 Icon을 사용하는 것으로 expo를 설치하면 사용할 수 있는 패키지이다  */}
//                     <Ionicons color="white" size={144} name="ios-rainy"></Ionicons> 
//                     <Text style={styles.temp}> 35도</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subTitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining",
        subtitle: "우산챙기세요",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "선크림 발라라",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "번개 피해요",
        icon: 'ios-thunderstorm'
    },
    Cloud: {
        colors: ['#D7D2CC', '#304352'],
        title: "Cloud",
        subtitle: "날씨 좋다",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "눈온다",
        icon: 'ios-snow'
    },
    Dizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Dizzle",
        subtitle: "으악",
        icon: 'dizzy'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "으악",
        icon: 'dehaze'
    }

}

Weather.propsTypes = {
    temp: PropsTypes.number.isrequred,
    weatherName: PropsTypes.string.isrequred
}

function Weather( { temp, weatherName } ) {
    console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container} >
            <View style={styles.upper}>
                {/* expo에 있는 Icon을 사용하는 것으로 expo를 설치하면 사용할 수 있는 패키지이다  */}
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}></Ionicons>
                <Text style={styles.temp}> {temp}도</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",           // 정렬방법 이렇게 하면 모든 항목이 가운데로 온다(기본으로 접근하자)
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 10,
        fontWeight: "300"
    },
    subTitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 24
    }
});