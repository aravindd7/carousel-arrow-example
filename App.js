import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          style={this.state.size}
          leftArrowText={'＜'}
          leftArrowStyle={{color: 'white', fontSize: 22, margin: 20}}
          rightArrowText={'＞'}
          rightArrowStyle={{color: 'white', fontSize: 22, margin: 20}}
          arrows
          bullets
          isLooped={false}
          autoplay={false}
        ><View style={[{ backgroundColor: '#BADA55', alignItems: 'center',marginTop: 40 }, this.state.size]}>
             <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
             />
          </View>
          <View style={[{ backgroundColor: 'red', alignItems: 'center', marginTop: 40}, this.state.size]}>
             <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
             />
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
             <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
             />
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B'
];

const generateRandomColorsArray = length =>
  Array.from(Array(length)).map(
    () => colors[Math.floor(Math.random() * colors.length)]
  );

const generatePages = (length, size) =>
  generateRandomColorsArray(length).map((color, i) => (
    <View style={[{ backgroundColor: color }, size]} key={i}>
      <Text style={styles.text}>{i}</Text>
    </View>
  ));
