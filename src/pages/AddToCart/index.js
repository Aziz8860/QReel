import {
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, {Component} from 'react';
import {TabView, TabBar} from 'react-native-tab-view';
import {fonts, colors, responsiveHeight, responsiveWidth} from '../../utils';
import AddToCartSearch from '../AddToCartSearch'
import Scanner from '../Scanner'
import AddToCartScanner from '../AddToCartScanner'

const initialLayout = {width: Dimensions.get('window').width};

// const FirstRoute = ({navigation}) => {
//   const devices = useCameraDevices();
//   const device = devices.back;

//   const [frameProcessor, barcodes] = useScanBarcodes([
//     BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
//   ]);

//   const [barcode, setBarcode] = React.useState('');
//   const [hasPermission, setHasPermission] = React.useState(false);
//   const [isScanned, setIsScanned] = React.useState(false);

//   React.useEffect(() => {
//     checkCameraPermission();
//   }, []);

//   const checkCameraPermission = async () => {
//     const status = await Camera.getCameraPermissionStatus();
//     setHasPermission(status === 'authorized');
//   };

//   React.useEffect(() => {
//     toggleActiveState();
//     return () => {
//       barcodes;
//     };
//   }, [barcodes]);

//   const toggleActiveState = async () => {
//     if (barcodes && barcodes.length > 0 && isScanned === false) {
//       setIsScanned(true);
//       // setBarcode('');
//       barcodes.forEach(async scannedBarcode => {
//         if (scannedBarcode.rawValue !== '') {
//           setBarcode(scannedBarcode.rawValue);
//           Alert.alert(barcode);
//         }
//       });
//     }
//   };

//   return (
//     device != null &&
//     hasPermission && (
//       <>
//         <StatusBar barStyle="light-content" backgroundColor="#000000" />
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={!isScanned}
//           frameProcessor={frameProcessor}
//           frameProcessorFps={5}
//           audio={false}
//         />
//         {/* <RNHoleView
//               holes={[
//                 {
//                   x: widthToDp('8.5%'),
//                   y: heightToDp('36%'),
//                   width: widthToDp('83%'),
//                   height: heightToDp('20%'),
//                   borderRadius: 10,
//                 },
//               ]}
//               style={styles.rnholeView}
//             /> */}
//       </>
//     )
//   );
// };


const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      // return <Scanner />;
      return <AddToCartScanner />
    case 'second':
      return <AddToCartSearch />;
    default:
      return null;
  }
};

const renderTabBar = props => (
  <TabBar
    {...props}
    renderLabel={({route, color}) => (
      <Text
        style={{
          color: 'white',
          margin: 2,
          fontFamily: fonts.primary.medium,
        }}>
        {route.title}
      </Text>
    )}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: colors.green600}}
  />
);

export default function AddToCart(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Scan'},
    {key: 'second', title: 'Search'},
  ]);

  return (
    <TabView
      {...props}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
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
