import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {BannerReward, IconArrowUp, IconCreditCard, IconDollarBig, IconEco} from '../../assets';
import {colors, responsiveHeight, responsiveWidth, fonts} from '../../utils';
import {Whitespace} from '../../components';

export default class Redeem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerBox}>
            <View style={styles.innerBox}>
              <View>
                <Text style={styles.innerText}>Q-Point</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(4),
                  }}>
                  <IconDollarBig />
                  <Text style={styles.point}>500</Text>
                </View>
              </View>

              <View style={styles.line} />
            </View>
          </View>
          <View style={styles.dropdownBox}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textPoint}>Get to know Q-Point</Text>
              <TouchableOpacity>
                <IconArrowUp />
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>What is Q-Point?</Text>
            <Text style={styles.textBody}>
              Q-Poin is a virtual point accumulated automatically each time you
              have done your transaction using QReel. You’ll obtain 10 Q-Poin
              for every transaction.{' '}
            </Text>
            <Text style={styles.subTitle}>What can Q-Point do?</Text>
            <Text style={styles.textBody}>
              You can reedem your Q-points for rewards once it has reached some
              certain value on the reedem page. Remember, rewards can only be
              exchanged if your points are met its requirements.
            </Text>
          </View>
          <Text style={styles.textChoose}>Choose Your Reward</Text>
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardImage}><IconCreditCard /></View>
            <View>
              <Text style={styles.textCardTitle}>Cashback 10% s/d Rp10rb</Text>
              <Text style={styles.textCardPoint}>200 Q-Points</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardImage}><IconEco /></View>
            <View>
              <Text style={styles.textCardTitle}>Plant Real Trees in Borneo</Text>
              <Text style={styles.textCardPoint}>5000 Q-Points</Text>
            </View>
          </TouchableOpacity>
          <Whitespace height={responsiveHeight(110)} />
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
    height: responsiveHeight(200),
    borderBottomRightRadius: responsiveHeight(24),
    borderBottomLeftRadius: responsiveHeight(24),
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(30),
  },
  innerBox: {
    backgroundColor: colors.white,
    height: responsiveHeight(140),
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(12),
    justifyContent: 'space-between',
  },
  innerText: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 16,
  },
  point: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 20,
    marginLeft: responsiveWidth(4),
  },
  line: {
    backgroundColor: colors.grayLight,
    height: responsiveHeight(8),
    alignSelf: 'center',
    width: '100%',
    borderRadius: responsiveWidth(6),
    marginHorizontal: responsiveWidth(8),
    marginBottom: responsiveHeight(8),
  },
  dropdownBox: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: '90%',
    borderRadius: responsiveHeight(8),
    marginTop: responsiveHeight(30),
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textPoint: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
  },
  subTitle: {
    fontFamily: fonts.primary.semiBold,
    color: colors.green600,
    fontSize: 14,
    marginTop: responsiveHeight(16),
  },
  textBody: {
    fontFamily: fonts.primary.regular,
    color: colors.black,
    fontSize: 12,
  },
  textChoose: {
    marginTop: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(16),
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
  },
  cardContainer: {
    marginHorizontal: responsiveWidth(16),
    height: responsiveHeight(120),
    borderColor: colors.grayCard,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: responsiveHeight(16),
    flexDirection: 'row',
  },
  textCardTitle: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
    marginTop: responsiveHeight(12),
  },
  textCardPoint: {
    fontFamily: fonts.primary.semiBold,
    padding: responsiveHeight(4),
    backgroundColor: colors.green600,
    color: colors.white,
    fontSize: 12,
    width: '60%',
    textAlign: 'center',
    borderRadius: 5,
  },
  cardImage: {
    height: '100%',
    width: responsiveWidth(80),
    backgroundColor: colors.green400,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginEnd: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
});
