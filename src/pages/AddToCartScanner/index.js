import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {colors, responsiveHeight, responsiveWidth, fonts} from '../../utils';
import {
  IconShoppingCart,
} from '../../assets';
import {useItemGlobal, useSKUGlobal} from '../../data';
import {useNavigation} from '@react-navigation/native';

const AddToCartScanner = props => {
  const navigation = useNavigation();
  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.buttonAndCart}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.textButton}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCart}>
            <View style={styles.amountCircle}>
              <Text style={styles.textAmountCircle}>{itemCount}</Text>
            </View>
            <IconShoppingCart />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Permission
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  // Barcode
  const [barcodeFormat, setBarcode] = React.useState('');
  const [isScanned, setIsScanned] = React.useState(false);
  const [itemCount, setItemCount] = useItemGlobal();
  const [skuCount, setSKUCount] = useSKUGlobal();
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.EAN_13]);

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  React.useEffect(() => {
    toggleActiveState();
  }, [barcodes]);

  React.useEffect(() => {
    addToArray();
  }, [itemCount]);

  const addToArray = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === true) {
      const item = [];
      {
        barcodes.map((barcode, idx) => item.input(barcode.displayValue));
      }
      setSKUCount(skuCount => [...skuCount, ...item]);
      console.log(skuCount.length);
    }
  };

  const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);

      barcodes.forEach(async scannedBarcode => {
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
        }
      });
    } else if (barcodes && barcodes.length > 0 && isScanned === true) {
      setTimeout(() => {
        setItemCount(itemCount + 1);
      }, 1250);
    }
  };

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={{flex: 1}}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          // frameProcessorFps={5}
        />
        {barcodes.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            Item with SKU: {barcode.displayValue} added!
          </Text>
        ))}

        {renderFooter()}
      </>
    )
  );
};

export default AddToCartScanner;

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: 'black',
    textAlign: 'center',
    marginVertical: responsiveHeight(4),
  },
  footerContainer: {
    height: responsiveHeight(90),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(16),
  },
  button: {
    backgroundColor: colors.green600,
    height: responsiveHeight(54),
    flexGrow: 1,
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
