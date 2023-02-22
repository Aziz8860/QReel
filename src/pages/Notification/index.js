import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {EmptyNotification} from '../../assets';
import {colors, fonts, responsiveHeight} from '../../utils';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageEmpty}>
          <EmptyNotification />
          <Text style={styles.textNotif}>You don't have notification yet</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  imageEmpty: {
    marginTop: responsiveHeight(100),
  },
  textNotif: {
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
});
