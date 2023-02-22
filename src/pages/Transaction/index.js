import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {TransactionImage} from '../../assets';

export default class Transaction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Receipt')}>
          <ImageBackground
            source={TransactionImage}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.textOnImage}>Receipt</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(20),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: responsiveHeight(160),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOnImage: {
    color: colors.white,
    fontFamily: fonts.secondary.bold,
    fontSize: 20,
  },
});
