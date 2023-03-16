import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import {HeaderWithSearch} from '../../components';
import {BlueBand, Nutella, Ceres, SariRoti, IconShowQR} from '../../assets';

export default class CashierHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View styles={styles.container}>
        <HeaderWithSearch navigation={navigation} />
        <View style={styles.body}>
          <View style={styles.groupTextTitle}>
            <Text style={styles.textTitle}>Katalog Anda</Text>
            <TouchableOpacity
            // onPress={() => navigation.navigate('TransactionHistory')}
            >
              <Text style={styles.textSeeAll}>Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Image source={BlueBand} style={styles.gambar} />
              <View style={styles.content}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={styles.judul}>Rp14.000</Text>
                  <Text style={styles.judul}>Blue Band Serbaguna</Text>
                  <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textAdd}>Tambahkan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Nutella} style={styles.gambar} />
              <View style={styles.content}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={styles.judul}>Rp47.000</Text>
                  <Text style={styles.judul}>Nutella Spread 170 g</Text>
                  <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textAdd}>Tambahkan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={Ceres} style={styles.gambar} />
              <View style={styles.content}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={styles.judul}>Rp9.000</Text>
                  <Text style={styles.judul}>Meses Ceres Coklat 140 g</Text>
                  <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textAdd}>Tambahkan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image source={SariRoti} style={styles.gambar} />
              <View style={styles.content}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={styles.judul}>Rp15.000</Text>
                  <Text style={styles.judul}>Sari Roti Tawar 470 g</Text>
                  <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textAdd}>Tambahkan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonShowQR}
          onPress={() => navigation.navigate('ShowQR')}>
          <IconShowQR />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
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
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: responsiveWidth(140),
    height: responsiveHeight(190),
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(10),
    marginRight: responsiveWidth(12),
    borderRadius: 4,
    padding: 6,
  },
  gambar: {
    width: responsiveHeight(46),
    height: responsiveHeight(46),
    margin: responsiveHeight(4),
    marginTop: responsiveHeight(10),
    borderRadius: 2,
    alignSelf: 'center',
  },
  content: {
    paddingHorizontal: responsiveWidth(10),
  },
  judul: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 11,
    marginTop: 4,
  },
  buttonAdd: {
    backgroundColor: colors.green600,
    padding: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 4,
  },
  textAdd: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: 11,
  },
  buttonShowQR: {
    alignSelf: 'center',
    bottom: 0,
  },
});
