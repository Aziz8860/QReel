import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveWidth, responsiveHeight} from '../../utils';

export default class Receipt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: responsiveHeight(14)}]}>
            <Text style={styles.buttonText}>+ Add to customer's cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveWidth(14),
    paddingHorizontal: responsiveHeight(24),
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(46),
    width: '100%',
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
});
