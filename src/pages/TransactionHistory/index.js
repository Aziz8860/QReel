import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {colors, responsiveHeight, responsiveWidth, IconMarket, IconCafe} from '../../utils';

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
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
              <Text style={styles.textAddressAndDate}>Dramaga, Bogor</Text>
              <Text style={styles.textAddressAndDate}>18 Maret 2022</Text>
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
              <Text style={styles.textAddressAndDate}>Cibinong, Bogor</Text>
              <Text style={styles.textAddressAndDate}>2 Januari 2022</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.textPayment}>💸 Tunai</Text>
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
              <Text style={styles.textAddressAndDate}>19 Desember 2021</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.textPayment}>💸 OVO</Text>
              <Text style={styles.textPrice}>Rp47.500</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
  },
  containerCard: {
    height: responsiveHeight(270),
  },
  card: {
    borderColor: colors.grayCard,
    borderWidth: 1,
    height: responsiveHeight(84),
    borderRadius: 8,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(8),
    marginBottom: responsiveHeight(12),
  },
});
