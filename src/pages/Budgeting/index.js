import {Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {colors, responsiveHeight, fonts, responsiveWidth} from '../../utils';
import {Chart, IconPencil, CircleChart} from '../../assets';
import { Whitespace } from '../../components';

export default class Budgeting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.headerBox}>
          <Text style={styles.textTitle}>Budgeting</Text>
          <View style={styles.innerHeaderBox}>
            <Text style={styles.innerTextTitle}>Expense Chart</Text>
            <Chart />
          </View>
        </View>
        <View style={{flex: 0.8, paddingHorizontal: responsiveWidth(20)}}>
          <View style={styles.bottomBox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textInnerTitle}>Set Budget </Text>
              <TouchableOpacity>
                <IconPencil />
              </TouchableOpacity>
            </View>
            <View
              style={{alignItems: 'center', marginTop: responsiveHeight(20)}}>
              <CircleChart />
              <Text style={styles.textUnderChart}>Your budget left this month is</Text>
              <Text style={styles.textPrice}>Rp795.000</Text>
            </View>
          </View>
        </View>
        <Whitespace height={responsiveHeight(130)} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerBox: {
    backgroundColor: colors.green600,
    paddingVertical: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(20),
  },
  textTitle: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: 20,
  },
  innerHeaderBox: {
    backgroundColor: colors.white,
    marginTop: responsiveHeight(30),
    borderRadius: responsiveHeight(8),
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  innerTextTitle: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 14,
  },
  bottomBox: {
    backgroundColor: '#E9FFF1',
    width: '100%',
    marginTop: responsiveHeight(30),
    borderRadius: responsiveHeight(8),
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  textInnerTitle: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 14,
  },
  textUnderChart: {
    marginTop: responsiveHeight(12),
    fontFamily: fonts.primary.regular,
    color: colors.black,
    fontSize: 12,
  },
  textPrice: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: 16,
  }
});
