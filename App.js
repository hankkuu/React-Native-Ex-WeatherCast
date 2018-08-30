import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Weather from './Weather';

const API_KEY = "c391b7145cc1004b938016579e394943";

export default class App extends Component {
  state = {
    isLoaded: false,     // 외부 API 호출로 이 부분을 컨트롤하게 되면 아래 View에서 화면이 보일지 말지 정해진다.    
    error: null,
    temperature: null,
    name: null
  };
  // 앱이 시작될 때 마다 이 부분을 실행하는 것 같다 
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords.latitude, position.coords.longitude);
        // this.setState({
        //   isLoaded: true
        // });
      },
      (error) => {
        console.log(error);
        this.setState({
          error:error
        })        
      },      
      // console.log("position"), 이유는 모르겠지만 위의 API를 사용할 수 없다... 일단 나중에알아보자
      //  this.setState({
      //    isLoaded: true
      //  })
    );
  }

  _getWeather = (lat, lon) => {
    //console.log(API_KEY);
    //let a = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
    //console.log(a);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    ).then(response => response.json())
     .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        })
     })
     .catch(error => {
       console.log(error.message);
      throw error;
    });
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
            <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> 
          ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null }
            </View>
        )}        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25   
    // padding: 30 30 54 30 이런 방식은 동작하지 않음
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 24
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  }
});
