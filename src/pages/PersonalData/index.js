import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, responsiveHeight, responsiveWidth, fonts} from '../../utils';
import {IconAddPhoto, IconProfilePicture} from '../../assets';

export default class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignSelf: 'center'}}>
          <IconProfilePicture />
          <TouchableOpacity style={styles.iconAdd}>
            <IconAddPhoto />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Name</Text>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor={colors.grayBold}
            onChangeText={name => this.setState({name})}
            value="Andre Aulia"
            editable={false}
          />
        </View>
        <Text style={styles.title}>Email</Text>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor={colors.grayBold}
            onChangeText={email => this.setState({email})}
            value="andreaulia@gmail.com"
            editable={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveWidth(24),
    paddingHorizontal: responsiveHeight(24),
  },
  iconAdd: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 16,
    marginTop: responsiveHeight(18),
    marginBottom: responsiveHeight(6),
  },
  wrapperInput: {
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: colors.grayLight,
    backgroundColor: colors.grayCard,
    height: responsiveHeight(54),
    borderWidth: 1,
  },
  input: {
    padding: 10,
    width: '100%',
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.grayBold,
  },
});
