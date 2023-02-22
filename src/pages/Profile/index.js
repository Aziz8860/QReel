import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {
  IconPhone,
  IconTerms,
  IconHelp,
  IconSetting,
  IconDataProfile,
  IconReferral,
  IconNext,
  ProfilePicture,
  IconProfilePicture,
} from '../../assets';
import {responsiveHeight, responsiveWidth, colors, fonts} from '../../utils';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentProfile}>
          <IconProfilePicture width={responsiveHeight(64).toString()} height={responsiveHeight(64).toString()}/>
          {/* <Image source={IconProfilePicture} style={styles.profpic} /> */}
          <View style={{marginLeft: responsiveWidth(20)}}>
            <Text style={styles.name}>Andre Aulia</Text>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconDataProfile />
              <Text style={styles.textMenu}>Personal Data</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconSetting />
              <Text style={styles.textMenu}>Settings</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconHelp />
              <Text style={styles.textMenu}>Help Center</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconTerms />
              <Text style={styles.textMenu}>Syarat Ketentuan</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Welcome')}>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>QRin App Version 0.1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentProfile: {
    height: responsiveHeight(96),
    marginTop: responsiveHeight(6),
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(20),
    alignItems: 'center',
  },
  profpic: {
    height: responsiveHeight(64),
    width: responsiveHeight(64),
    borderRadius: responsiveHeight(64) / 2,
  },
  name: {
    fontFamily: fonts.primary.medium,
    fontSize: 16,
    color: colors.black,
  },
  gold: {
    height: 23,
    width: 85,
  },
  contentRow: {
    height: responsiveHeight(120),
    marginTop: responsiveHeight(6),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    height: responsiveHeight(62),
    borderBottomWidth: 1,
    borderColor: '#F5F6F8',
    alignSelf: 'stretch',
    paddingHorizontal: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textMenu: {
    fontFamily: fonts.primary.medium,
    fontSize: 14,
    color: colors.black,
    marginLeft: responsiveWidth(8),
  },
  bottomSection: {
    flex: 1,
    marginTop: responsiveHeight(6),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(54),
    width: '100%',
    marginTop: responsiveHeight(26),
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
  versionText: {
    fontFamily: fonts.primary.medium,
    fontSize: 12,
    color: colors.grayLight,
    textAlign: 'center',
    marginTop: responsiveHeight(12),
  },
});
