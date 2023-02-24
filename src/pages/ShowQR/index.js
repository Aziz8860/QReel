import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import { QRExample } from '../../assets';

export default class ShowQR extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ShowQR</Text>
        <Image source={QRExample}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(20),
    alignItems: 'center'
  }
})