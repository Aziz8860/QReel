import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';
import {
  colors,
  fonts,
  responsiveWidth,
  responsiveHeight,
  cashier_login,
} from '../../utils';
import {IconEye, IconEyeAktif, BottomLogin} from '../../assets';

const originalWidth = 360;
const originalHeight = 160;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get('window').width;

export default class CashierLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: false,
      isLoading: false,
    };
  }

  Login() {
    // Check text input first
    if (!this.state.email.trim()) {
      Alert.alert('Email Invalid', 'Please enter email');
      return;
    }

    if (!this.state.password.trim()) {
      Alert.alert('Password Invalid', 'Please enter password');
      return;
    }

    this.setState({isLoading: true});

    this.handleCashierLogin();
  }

  handleCashierLogin() {
    cashier_login({
      email: this.state.email.toLocaleLowerCase(),
      password: this.state.password,
    })
      .then(result => {
        if (result.status == 200) {
          // AsyncStorage.setItem('AccessToken', result.data.token);
          ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
          this.props.navigation.replace('CashierHome');
          console.log(result.data.token);
        } else {
          Alert.alert('Login Failed', 'Wrong email or password');
          this.setState({isLoading: false});
          console.log(result.status);
        }
      })
      .catch(err => {
        Alert.alert('Login Failed', 'Wrong email or password');
        this.setState({isLoading: false});
        console.error(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Text style={styles.textUserLogin}>Cashier Login</Text>
          <Text style={styles.textWelcome}>Selamat datang!</Text>

          <Text style={styles.judul}>Email</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email Anda"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.judul}>Password</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              secureTextEntry={!this.state.hidePassword}
              placeholder="Masukkan password Anda"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() =>
                this.setState({hidePassword: !this.state.hidePassword})
              }>
              {this.state.hidePassword == true ? <IconEye /> : <IconEyeAktif />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.Login()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Masuk</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.textGroup}>
            <Text style={styles.textAkun}>Belum punya akun? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CashierRegister')}>
              <Text style={styles.textDaftar}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.state.isLoading ? <ActivityIndicator color="#00ff00" /> : null}

        <View style={styles.bottomAsset}>
          <View style={{width: windowWidth, aspectRatio}}>
            <BottomLogin
              width="100%"
              height="100%"
              viewBox={`0 0 ${originalWidth} ${originalHeight}`}
            />
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
  bodyContainer: {
    paddingHorizontal: responsiveWidth(20),
  },
  textUserLogin: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: 24,
    textAlign: 'center',
    marginTop: responsiveHeight(96),
  },
  textWelcome: {
    fontFamily: fonts.primary.regular,
    color: colors.grayBold,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: responsiveHeight(54),
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
    padding: 10,
    width: '100%',
    fontFamily: fonts.primary.regular,
    fontSize: 12,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(54),
    width: '100%',
    marginTop: responsiveHeight(52),
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
  textGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(20),
  },
  textAkun: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.grayBold,
  },
  textDaftar: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 12,
    color: colors.green500,
  },
  bottomAsset: {
    bottom: 0,
    position: 'absolute',
    zIndex: -1,
  },
});
