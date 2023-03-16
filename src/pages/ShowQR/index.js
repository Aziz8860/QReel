import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import { QRExample } from '../../assets';

export default class ShowQR extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScan}>
          Silakan perlihatkan kepada pembeli untuk dipindai
        </Text>
        <Image source={QRExample} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textScan: {
    fontFamily: fonts.primary.regular,
    color: colors.black,
    fontSize: 12,
    marginTop: responsiveHeight(60)
  },
  image: {
    marginTop: responsiveHeight(30),
    borderRadius: 16
  }
});
