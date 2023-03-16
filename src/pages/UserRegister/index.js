import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  colors,
  fonts,
  responsiveWidth,
  responsiveHeight,
  user_register,
} from '../../utils';
import {IconArrowBack, IconEye, IconEyeAktif} from '../../assets';
import {Whitespace} from '../../components';

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      phone: '',
      referralCode: '',
      validEmailChecked: false,
      hidePassword: false,
    };
  }

  Register() {
    // Check text input first
    if (!this.state.email.trim()) {
      Alert.alert('Email Invalid', 'Please enter email');
      return;
    }

    if (this.state.validEmailChecked == false) {
      Alert.alert('Email Invalid', 'Please enter email in correct format');
      return;
    }

    if (!this.state.password.trim()) {
      Alert.alert('Password Invalid', 'Please enter password');
      return;
    }

    if (!this.state.name.trim()) {
      Alert.alert('Name Invalid', 'Please enter name');
      return;
    }

    if (!this.state.phone.trim()) {
      Alert.alert('Phone Number Invalid', 'Please enter phone number');
      return;
    }

    this.handleRegister();
  }

  onChangedNumber(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('Please enter numbers only');
      }
    }
    this.setState({phone: newText});
  }

  handleCheckEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      this.setState({email: text});
      return false;
    } else {
      this.setState({email: text, validEmailChecked: true});
      console.log(this.state.validEmailChecked);
    }
  }

  checkPasswordValidity(value) {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain whitespaces.';
    }

    // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    // if (!isContainsUppercase.test(value)) {
    //   return 'Password must have at least one Uppercase Character.';
    // }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one lowercase character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one digit.';
    }

    const isValidLength = /^.{8,32}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-32 characters long.';
    }

    return null;
  }

  handleRegister() {
    const checkPassword = this.checkPasswordValidity(this.state.password);
    if (!checkPassword) {
      user_register({
        email: this.state.email.toLocaleLowerCase(),
        password: this.state.password,
        name: this.state.name,
        phone: parseInt(this.state.phone),
        referralCode: this.state.referralCode,
      })
        .then(result => {
          if (result.status == 200) {
            Alert.alert('Registration Success');
            this.props.navigation.replace('UserLogin');
          } else {
            Alert.alert('Register Failed', 'Cannot established connection');
            console.log(result.status);
          }
        })
        .catch(err => {
          console.error(err);
        });
      ``;
    } else {
      alert(checkPassword);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => this.props.navigation.goBack()}>
            <IconArrowBack />
          </TouchableOpacity>
          <Text style={styles.textUserRegister}>User Register</Text>
          <Text style={styles.textWelcome}>
            {`Fill in your data to become QReel users`}
          </Text>
          <Text style={styles.judul}>Email</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="abc@mail.com"
              onChangeText={email => this.handleCheckEmail(email)}
              value={this.state.email}
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.judul}>Password</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              secureTextEntry={!this.state.hidePassword}
              placeholder="Input your password"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              autoCorrect={false}
              maxLength={32}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => this.setState({hidePassword: !this.state.hidePassword})}>
              {this.state.hidePassword == true ? <IconEye /> : <IconEyeAktif />}
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperTextBelow}>
          <Text style={styles.textBelowPassword}>• Password contains number</Text>
          <Text style={styles.textBelowPassword}>• Character length 8-32</Text>
          </View>

          <Text style={styles.judul}>Full Name</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Your full name"
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
          </View>

          <Text style={styles.judul}>Phone Number</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="6281234567890"
              onChangeText={phone => this.onChangedNumber(phone)}
              value={this.state.phone}
              keyboardType="numeric"
              maxLength={14}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.Register();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>

          <Whitespace height={responsiveHeight(48)} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
  },
  iconBack: {
    marginTop: responsiveHeight(28),
  },
  textUserRegister: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 24,
    textAlign: 'center',
    marginTop: responsiveHeight(8),
  },
  textWelcome: {
    fontFamily: fonts.primary.regular,
    color: colors.grayBold,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: responsiveHeight(8),
  },
  judul: {
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
    height: responsiveHeight(54),
    borderWidth: 1,
  },
  input: {
    padding: 8,
    width: '100%',
    fontFamily: fonts.primary.regular,
    fontSize: 12,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  wrapperTextBelow: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(-14)
  },
  textBelowPassword: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.grayLight,
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
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
});
