import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import {
  BlueBand,
  Nutella,
  Ceres,
  SariRoti,
  IconShowQR,
  IconShoppingCart,
} from '../../assets';

const initialLayout = {width: Dimensions.get('window').width};

const FirstRoute = ({ navigation }) => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = ({ navigation }) => (
  <View>
    <ScrollView
      contentContainerStyle={{
        paddingBottom: responsiveHeight(44),
        paddingHorizontal: responsiveWidth(20),
        backgroundColor: colors.white,
      }}>
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <Image source={BlueBand} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Blue Band Serbaguna
              </Text>
              <Text style={styles.brandPrice}>Rp14.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={Nutella} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Nutella Spread 170 g
              </Text>
              <Text style={styles.brandPrice}>Rp47.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={Ceres} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Meses Ceres Coklat 140 g
              </Text>
              <Text style={styles.brandPrice}>Rp9.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={SariRoti} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Sari Roti Tawar 470 g
              </Text>
              <Text style={styles.brandPrice}>Rp15.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={Ceres} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Meses Ceres Coklat 140 g
              </Text>
              <Text style={styles.brandPrice}>Rp9.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={Ceres} style={styles.image} />
          <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
              <Text numberOfLines={2} style={styles.brandName}>
                Meses Ceres Coklat 140 g
              </Text>
              <Text style={styles.brandPrice}>Rp9.000</Text>
              <TouchableOpacity style={styles.buttonDetail}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonAndCart}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.textButton}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCart}>
          <View style={styles.amountCircle}>
            <Text style={styles.textAmountCircle}>0</Text>
          </View>
          <IconShoppingCart />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
      ],
    };
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute navigation={this.props.navigation} />
      case 'second':
        return <SecondRoute navigation={this.props.navigation} />
      default:
        return null;
    }
  }

  render() {
    const {navigation} = this.props
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color}) => (
              <Text
                style={{
                  color: 'white',
                  margin: 8,
                  fontFamily: fonts.primary.medium,
                }}>
                {route.title}
              </Text>
            )}
            indicatorStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: colors.green600}}
          />
        )}
        renderScene={this.renderScene}
        onIndexChange={index => this.setState({index})}
        initialLayout={initialLayout}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.green600,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: responsiveWidth(150),
    height: responsiveHeight(230),
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(10),
    borderRadius: 14,
    padding: 6,
  },
  image: {
    maxWidth: responsiveWidth(46),
    maxHeight: responsiveWidth(52),
    margin: responsiveHeight(4),
    marginTop: responsiveHeight(10),
    borderRadius: 2,
    alignSelf: 'center',
  },
  content: {
    marginTop: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(10),
    justifyContent: 'space-between',
  },
  brandName: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: 12,
    marginTop: 4,
  },
  brandPrice: {
    fontFamily: fonts.primary.medium,
    color: colors.grayBold,
    fontSize: 12,
  },
  buttonDetail: {
    backgroundColor: colors.green600,
    width: '100%',
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 16,
  },
  textAdd: {
    textAlign: 'center',
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: 11,
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(54),
    flexGrow: 1,
    marginTop: responsiveHeight(38),
    marginEnd: responsiveWidth(8),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.white,
  },
  buttonAndCart: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonCart: {
    height: responsiveHeight(54),
    width: responsiveHeight(54),
    borderRadius: responsiveHeight(26),
    backgroundColor: colors.grayLight,
    flexGrow: 0,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountCircle: {
    height: responsiveHeight(16),
    width: responsiveWidth(16),
    borderRadius: responsiveHeight(8),
    backgroundColor: colors.green600,
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAmountCircle: {
    fontFamily: fonts.primary.regular,
    color: colors.white,
    fontSize: 10,
    textAlign: 'center',
  },
});
