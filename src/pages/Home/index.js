import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {colors, responsiveWidth, fonts, responsiveHeight} from '../../utils';
import {Header, Whitespace} from '../../components';
import {Chart, IconMarket, IconCafe, BannerSetBudget} from '../../assets';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00E97F" />
        <Header navigation={navigation} />
        <ScrollView
          style={styles.wrapperBody}
          showsVerticalScrollIndicator={false}>
          <View style={styles.groupTextTitle}>
            <Text style={styles.textTitle}>Last Transactions</Text>
            <TouchableOpacity
            // onPress={() => navigation.navigate('TransactionHistory')}
            >
              <Text style={styles.textSeeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            style={styles.containerCard}
            showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
              <View style={styles.leftSection}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: responsiveHeight(-2),
                  }}>
                  <IconMarket />
                  <Text style={styles.textShopName}> Indomaret</Text>
                </View>
                <Text style={styles.textAddressAndDate}>Cimanggis, Depok</Text>
                <Text style={styles.textAddressAndDate}>18 March 2022</Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.textPayment}>💸 Gopay</Text>
                <Text style={styles.textPrice}>Rp70.000</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.leftSection}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: responsiveHeight(-2),
                  }}>
                  <IconMarket />
                  <Text style={styles.textShopName}> Alfamart</Text>
                </View>
                <Text style={styles.textAddressAndDate}>Cimanggis, Depok</Text>
                <Text style={styles.textAddressAndDate}>2 January 2022</Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.textPayment}>💸 Cash</Text>
                <Text style={styles.textPrice}>Rp93.000</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.leftSection}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: responsiveHeight(-2),
                  }}>
                  <IconCafe />
                  <Text style={styles.textShopName}> Eatboss Cafe</Text>
                </View>
                <Text style={styles.textAddressAndDate}>Dago, Bandung</Text>
                <Text style={styles.textAddressAndDate}>19 December 2021</Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.textPayment}>💸 OVO</Text>
                <Text style={styles.textPrice}>Rp47.500</Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.containerBanner} onPress={() => navigation.navigate('Budgeting')}>
            <BannerSetBudget />
          </TouchableOpacity>

          <Whitespace height={responsiveHeight(110)} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperBody: {
    paddingHorizontal: responsiveWidth(20),
  },
  groupTextTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(12),
  },
  textTitle: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
  },
  textSeeAll: {
    fontFamily: fonts.primary.regular,
    color: colors.green600,
    fontSize: 12,
  },
  containerCard: {
    height: responsiveHeight(270),
  },
  card: {
    borderColor: colors.grayCard,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(8),
    marginBottom: responsiveHeight(12),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftSection: {
    justifyContent: 'center',
  },
  textShopName: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
  },
  textAddressAndDate: {
    fontFamily: fonts.primary.medium,
    color: colors.grayCard,
    fontSize: 10,
    marginTop: responsiveHeight(-1),
  },
  rightSection: {
    justifyContent: 'center',
  },
  textPayment: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 12,
  },
  textPrice: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 14,
  },
  containerBanner: {
    marginTop: responsiveHeight(24),
    alignItems: 'center'
  }
});
