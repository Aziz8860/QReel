import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

const CardCartItem = ({items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Sari Roti Tawar 270g</Text>
          <Text style={[styles.text, {color: colors.grayBold, fontFamily: fonts.primary.regular}]}>x 1</Text>
        </View>
        <Text
          style={[styles.text, {color: colors.grayBold, fontFamily: fonts.primary.regular, textAlign: 'right'}]}>
          Rp15.000
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, {color: colors.white}]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardCartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.grayCard,
  },
  content: {
    flexGrow: 1,
    paddingLeft: responsiveWidth(16),
    paddingRight: responsiveWidth(8),
    paddingVertical: responsiveHeight(10),
  },
  textPrice: {
    textAlign: 'right',
  },
  button: {
    flexGrow: 0.3,
    backgroundColor: colors.green600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 12,
  },
});
