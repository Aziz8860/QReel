import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Chart, CircleChart, IconPencil} from '../../assets';

export default class ExpenseChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.kategoriActive}>
              <Text style={styles.innerTextActive}>1 tahun</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>6 bulan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>3 bulan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>1 bulan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>1 minggu</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{alignItems: 'center'}}>
          <Chart />
        </View>
        <View style={styles.titleAndIcon}>
          <Text style={styles.textTitle}>Budgeting </Text>
          <TouchableOpacity>
            <IconPencil />
          </TouchableOpacity>
        </View>
        <View style={styles.circleChart}>
          <CircleChart />
        </View>
        <Text style={styles.textBudgeting}>
          Anda telah menggunakan 20.5% (Rp205.000) dari budget bulan ini
          (Rp1.000.000)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(12),
  },
  kategoriActive: {
    backgroundColor: colors.green500,
    height: responsiveHeight(48),
    width: responsiveWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(12),
    marginRight: responsiveWidth(6),
  },
  kategoriNonActive: {
    backgroundColor: '#F5F5F5',
    height: responsiveHeight(48),
    width: responsiveWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(12),
    marginRight: responsiveWidth(6),
  },
  innerTextActive: {
    color: colors.white,
    fontFamily: fonts.primary.semiBold,
    fontSize: 14,
  },
  innerTextNonActive: {
    color: colors.grayBold,
    fontFamily: fonts.primary.semiBold,
    fontSize: 14,
  },
  content: {
    alignItems: 'center',
  },
  titleAndIcon: {
    flexDirection: 'row',
    marginTop: responsiveHeight(24),
    textAlignVertical: 'center',
  },
  textTitle: {
    color: colors.black,
    fontFamily: fonts.primary.semiBold,
    fontSize: 14,
  },
  circleChart: {
    alignItems: 'center',
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(16),
  },
  textBudgeting: {
    color: colors.black,
    fontFamily: fonts.primary.regular,
    fontSize: 12,
  },
});
