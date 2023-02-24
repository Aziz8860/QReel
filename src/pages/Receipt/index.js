import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveWidth, responsiveHeight} from '../../utils';
import {CardCartItem} from '../../components';

export default class Receipt extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <CardCartItem />
          <CardCartItem />
        </View>
        <View style={styles.bottomContent}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: responsiveHeight(14)}]}
            onPress={() => navigation.navigate('AddToCart')}>
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
  },
  contentContainer: {
    flex: 1,
    paddingBottom: responsiveHeight(16),
  },
  bottomContent: {
    marginBottom: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(20),
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(48),
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
