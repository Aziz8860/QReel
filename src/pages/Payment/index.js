import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class Payment extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Payment</Text>
            <Text style={styles.text}>Rp70.000</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Discount</Text>
            <Text style={styles.text}>Rp0</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tax</Text>
            <Text style={styles.text}>Rp0</Text>
          </View>

          <View style={styles.textPaymentContainer}>
            <Text style={styles.textTotal}>Total Payment</Text>
            <Text style={styles.textTotal}>Rp70.000</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ShowQR")}>
            <Text style={styles.buttonText}>Generate QR Code</Text>
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
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(20),
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(12),
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.black,
  },
  textPaymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTotal: {
    marginTop: responsiveHeight(16),
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.black,
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
});
