import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {Logo} from '../../assets';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('AddToCart');
    }, 1000); // set to 3000 or 1500
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgtext}>
          <Logo />
          <Text style={styles.textTitle}>QReel</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgtext: {
    flexDirection: 'row',
  },
  textTitle: {
    marginLeft: responsiveWidth(7),
    color: colors.black,
    fontFamily: fonts.secondary.bold,
    fontSize: 42,
  },
});
