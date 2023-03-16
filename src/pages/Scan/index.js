import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {IllustrationScan} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function Scan(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: responsiveHeight(120)}}>
        <IllustrationScan />
      </View>

      <View style={styles.bottomBox}>
        <View style={styles.lines} />
        <Text style={styles.textGetStarted}>Get Started</Text>
        <Text style={styles.textBody}>
          Go and enjoy our features for free and make your life easy with us.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScannerComp')}>
          <Text style={styles.textButton}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green600,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBox: {
    backgroundColor: colors.green900,
    marginBottom: responsiveHeight(80),
    height: responsiveHeight(220),
    width: '100%',
    alignItems: 'center',
    borderTopRightRadius: responsiveHeight(48),
    borderTopLeftRadius: responsiveHeight(48),
  },
  lines: {
    height: responsiveHeight(6),
    borderRadius: 50,
    width: '40%',
    backgroundColor: colors.green600,
    alignSelf: 'center',
    marginTop: responsiveHeight(16),
  },
  textGetStarted: {
    fontFamily: fonts.primary.bold,
    color: colors.white,
    fontSize: 24,
    marginTop: responsiveHeight(8),
  },
  textBody: {
    fontFamily: fonts.primary.regular,
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: responsiveWidth(40),
  },
  button: {
    marginTop: responsiveHeight(10),
    height: responsiveHeight(48),
    backgroundColor: colors.green600,
    borderRadius: 4,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: 16,
  },
});
