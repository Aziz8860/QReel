import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {IconNotification, IconSearch} from '../../../assets';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.background}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.green,
  },
  textAndIcon: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: responsiveWidth(22),
    justifyContent: 'space-between',
  },
  textHello: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.white,
    marginBottom: responsiveHeight(-8),
  },
  textUsername: {
    fontFamily: fonts.primary.medium,
    fontSize: 22,
    color: colors.white,
  },
  icon: {
    justifyContent: 'center',
  },
  searchSection: {
    height: 42,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingLeft: 10,
    alignItems: 'center',
    marginTop: responsiveHeight(16),
    marginHorizontal: responsiveWidth(22),
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: fonts.primary.regular,
  },
});
