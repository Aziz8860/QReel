import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import { QRExample } from '../../assets';

export default class ShowQR extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View>
        <Text style={[styles.text, {marginTop: responsiveHeight(30)}]}>Silakan perlihatkan kepada pembeli</Text>
          <Text style={styles.text}>untuk dipindai</Text>
        <Image source={QRExample} style={styles.image}/>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace("MainApp")}>
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.black,
    alignSelf: 'center'
  },
  image: {
    marginTop: responsiveHeight(60),
    alignSelf: 'center'
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(56),
    marginBottom: responsiveHeight(8),
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
})