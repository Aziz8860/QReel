import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconScan,
  IconScanAktif,
  IconProfile,
  IconProfileAktif,
  IconBudgetingAktif,
  IconBudgeting,
  IconRedeemAktif,
  IconRedeem,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Budgeting') {
      return isFocused ? <IconBudgetingAktif /> : <IconBudgeting />;
    }
    if (label === 'Scan') {
      return isFocused ? <IconScanAktif /> : <IconScan />;
    }
    if (label === 'Redeem') {
      return isFocused ? <IconRedeemAktif /> : <IconRedeem />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }
    
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.green600 : colors.grayLight,
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.primary.medium,
  }),
});