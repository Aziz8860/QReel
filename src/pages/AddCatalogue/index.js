import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import {BlueBand, IconCamera} from '../../assets';

export default class AddCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      productSKU: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.addImageText}>Add Image</Text>
        <View style={styles.squareBackground}>
          <Image source={BlueBand} style={styles.image} />
          <TouchableOpacity style={styles.imageButton}>
            <IconCamera />
            <Text style={styles.imageText}> Change Image</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Blue Band Serbaguna 140g"
          onChangeText={productName => this.setState({productName})}
          value={this.state.productName}
        />

        <Text style={styles.sectionTitle}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Rp14.000"
          onChangeText={productPrice => this.setState({productPrice})}
          value={this.state.productPrice}
        />

        <Text style={styles.sectionTitle}>SKU</Text>
        <TextInput
          style={styles.input}
          placeholder="0123456789100"
          onChangeText={productSKU => this.setState({productSKU})}
          value={this.state.productSKU}
        />

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.grayBackground,
  },
  addImageText: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 16,
    marginTop: responsiveHeight(32),
  },
  squareBackground: {
    marginTop: responsiveHeight(4),
    borderWidth: 2,
    backgroundColor: '#F6F8FF',
    borderRadius: 4,
    borderColor: '#DBE0F1',
    width: '100%',
    height: responsiveHeight(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {maxHeight: 80, maxWidth: 80},
  imageButton: {
    flexDirection: 'row',
    marginTop: responsiveHeight(24),
    alignItems: 'center',
  },
  imageText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 14,
    color: '#6C7596',
  },
  sectionTitle: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 16,
    marginTop: responsiveHeight(12),
  },
  input: {
    height: responsiveHeight(50),
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: colors.grayLight,
    width: '100%',
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(54),
    width: '100%',
    marginTop: responsiveHeight(24),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
});
