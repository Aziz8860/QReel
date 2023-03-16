import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {Hooray, IconDollar, IconNotification} from '../../../assets';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.background}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.textName}>Hi, User</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.backgroundCoin}>
              <IconDollar />
              <Text style={styles.textNumber}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <IconNotification />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View style={{justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.message}>
                Horray! You’ve been contributed on
              </Text>
              <Text style={styles.message}>saving the planet with QReel.</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.textShare}>
                Share QReel to your friends →
              </Text>
            </TouchableOpacity>
          </View>
          <Hooray />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.green600,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: responsiveHeight(200),
    padding: responsiveHeight(22),
  },
  textName: {
    fontFamily: fonts.primary.medium,
    fontSize: 16,
    color: colors.white,
  },
  backgroundCoin: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(2),
    marginEnd: responsiveWidth(4),
    justifyContent: 'center',
  },
  textNumber: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.black,
    marginStart: responsiveWidth(2),
  },
  icon: {
    justifyContent: 'center',
  },
  bottomBox: {
    flex: 1,
    marginTop: responsiveHeight(8),
    borderRadius: responsiveHeight(8),
    backgroundColor: 'rgba(0, 166, 119, 0.75)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(8),
  },
  message: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.white,
  },
  textShare: {
    fontFamily: fonts.primary.regular,
    fontSize: 10,
    color: colors.white,
    width: responsiveWidth(165),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: responsiveHeight(9),
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: responsiveHeight(2),
  },
});
