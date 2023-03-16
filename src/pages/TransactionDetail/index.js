import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Ceklis, IconArrowNext, IconBack} from '../../assets';

export default class TransactionDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greenBackground} />
        <View style={styles.square}>
          <Text style={styles.money}>
            <Text style={styles.price}>Rp 70.000</Text>
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={Ceklis} style={styles.iconCeklis} />
            <Text style={styles.success}>Success</Text>
          </View>
          <Text style={styles.date}>
            Transaction Time: 2 January 2022 19:10
          </Text>
        </View>
        <View style={styles.bagianBawah}>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Sari Roti Tawar 270 g (1)</Text>
            <Text style={styles.identitas}>15.000</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Blue Band Serbaguna (1)</Text>
            <Text style={styles.identitas}>14.000</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Meces Ceres 90 g (1)</Text>
            <Text style={styles.identitas}>9.000</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Nutella Spread 170 g (1)</Text>
            <Text style={styles.identitas}>32.000</Text>
          </View>
          <View style={styles.gap} />
          <View style={styles.barisText}>
            <Text style={styles.judulBottomSection}>Payment Method</Text>
            <Text style={styles.identitas}>Gopay</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judulBottomSection}>Transaction ID</Text>
            <Text style={styles.identitas}>172762762772676211</Text>
          </View>

          <Text style={styles.textQuestion}>Is this your receipt?</Text>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.goBack()}>
              <IconArrowNext style={{transform: [{rotateY: '180deg'}]}} />
              <Text style={styles.textButton}> Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.replace('MainApp')}>
              <Text style={styles.textButton}>OK </Text>
              <IconArrowNext />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  greenBackground: {
    backgroundColor: colors.green600,
    height: responsiveHeight(135),
    maxWidth: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: -1,
    position: 'relative',
  },
  square: {
    backgroundColor: colors.white,
    height: responsiveHeight(180),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-120),
  },
  price: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 22,
    color: colors.black,
  },
  money: {
    fontFamily: fonts.primary.medium,
    fontSize: 22,
    color: colors.black,
  },
  iconCeklis: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    marginVertical: responsiveHeight(5),
    marginRight: responsiveWidth(6),
  },
  success: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: '#00B14F',
  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.grayBold,
    marginTop: responsiveHeight(10),
  },
  bagianBawah: {
    flex: 1,
    marginTop: responsiveHeight(24),
  },
  barisText: {
    borderColor: colors.grayCard,
    borderBottomWidth: 2,
    height: responsiveHeight(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  judul: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.black,
  },
  judulBottomSection: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.grayBold,
  },
  image: {
    width: responsiveHeight(36),
    height: responsiveHeight(36),
    marginLeft: responsiveHeight(168),
  },
  identitas: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.black,
  },
  location: {
    marginLeft: responsiveHeight(230),
  },
  gap: {
    borderWidth: 3,
    borderColor: colors.grayLight,
  },
  textQuestion: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.black,
    textAlign: 'center',
    marginTop: responsiveHeight(8)
  },
  wrapperButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    height: responsiveHeight(60),
    width: responsiveWidth(80),
    borderRadius: responsiveHeight(16),
    marginTop: responsiveHeight(24),
    backgroundColor: colors.green600,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textButton: {
    fontFamily: fonts.primary.medium,
    fontSize: 14,
    color: colors.white,
  },
});
