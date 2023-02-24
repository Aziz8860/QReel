import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import {HeaderWithSearch} from '../../components';
import {BlueBand, Nutella, Ceres, SariRoti, IconShowQR} from '../../assets';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <><View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: responsiveHeight(100),
            backgroundColor: colors.white,
          }}>
          <HeaderWithSearch navigation={navigation} />
          <View style={styles.body}>
            <View style={styles.groupTextTitle}>
              <Text style={styles.textTitle}>Catalogue</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardWrapper}>
              <View style={styles.card}>
                <Image source={BlueBand} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Blue Band Serbaguna
                    </Text>
                    <Text style={styles.brandPrice}>Rp14.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Image source={Nutella} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start'}}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Nutella Spread 170 g
                    </Text>
                    <Text style={styles.brandPrice}>Rp47.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Image source={Ceres} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Meses Ceres Coklat 140 g
                    </Text>
                    <Text style={styles.brandPrice}>Rp9.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Image source={SariRoti} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Sari Roti Tawar 470 g
                    </Text>
                    <Text style={styles.brandPrice}>Rp15.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Image source={Ceres} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Meses Ceres Coklat 140 g
                    </Text>
                    <Text style={styles.brandPrice}>Rp9.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <Image source={Ceres} style={styles.image} />
                <View style={styles.content}>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2} style={styles.brandName}>
                      Meses Ceres Coklat 140 g
                    </Text>
                    <Text style={styles.brandPrice}>Rp9.000</Text>
                    <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.textAdd}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => navigation.navigate('ShowQR')}>
            <IconShowQR />
          </TouchableOpacity>
        </View></>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: responsiveWidth(20),
    backgroundColor: colors.white,
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
    justifyContent: 'space-between',
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
    width: responsiveWidth(150),
    height: responsiveHeight(230),
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(10),
    borderRadius: 14,
    padding: 6,
  },
  image: {
    maxWidth: responsiveWidth(46),
    maxHeight: responsiveWidth(52),
    margin: responsiveHeight(4),
    marginTop: responsiveHeight(10),
    borderRadius: 2,
    alignSelf: 'center',
  },
  content: {
    marginTop: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(10),
  },
  brandName: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 12,
    marginTop: 4,
  },
  brandPrice: {
    fontFamily: fonts.primary.medium,
    color: colors.grayBold,
    fontSize: 12,
  },
  buttonDetail: {
    backgroundColor: colors.green600,
    width: '100%',
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 16,
  },
  textAdd: {
    textAlign: 'center',
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: 11,
  },
  buttonAdd: {
    alignSelf: 'flex-end',
    position: 'absolute'
  },
});
