import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container} >            
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"></Ionicons>  {/* expo에 있는 Icon을 사용하는 것으로 expo를 설치하면 사용할 수 있는 패키지이다  */}
                    <Text style={styles.temp}> 35도</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subTitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",           // 정렬방법 이렇게 하면 모든 항목이 가운데로 온다(기본으로 접근하자)
        justifyContent: "center"
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