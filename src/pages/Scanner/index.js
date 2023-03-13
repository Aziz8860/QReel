// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Linking,
// } from 'react-native';
// import React from 'react';
// import {useCameraDevices, Camera} from 'react-native-vision-camera';
// import {MotiView, useAnimationState} from 'moti';
// import {Shadow} from 'react-native-shadow-2';
// import {Svg, Defs, Rect, Mask} from 'react-native-svg';
// import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
// import {
//   scan_product_option,
//   COLORS,
//   SIZES,
//   FONTS,
//   colors,
//   responsiveHeight,
// } from '../../utils';
// import {
//   BlueBand,
//   IconFlashOn,
//   IconScannerQRGreen,
//   IconShowQR,
// } from '../../assets';
// import {TextButton} from '../../components';

// const Scanner = ({navigation}) => {

//   // State
//   const [selectedOption, setSelectedOption] =
//     React.useState(scan_product_option);

//   // Camera
//   const devices = useCameraDevices();
//   const device = devices.back;

//   // Moti
//   const loaderAnimationState = useAnimationState({
//     start: {
//       opacity: 1,
//     },
//     stop: {
//       opacity: 0,
//     },
//   });

//   const productAnimationState = useAnimationState({
//     hide: {
//       opacity: 0,
//       translateY: -10,
//     },
//     show: {
//       opacity: 1,
//       translateY: 10,
//     },
//   });

//   // Barcode
//   const [barcodeFormat, setBarcode] = React.useState('');
//   const [isScanned, setIsScanned] = React.useState(false);
//   // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);
//   const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
//     checkInverted: true,
//   });

//   React.useEffect(() => {
//     if (setSelectedOption == scan_product_option.qr) {
//       toggleActiveState();
//     }
//   }, [barcodes]);

//   React.useEffect(() => {
//     // Animation
//     productAnimationState.transitionTo('hide');
//     loaderAnimationState.transitionTo('stop');

//     // Permission
//     requestCameraPermission();
//   }, []);

//   // Handler
//   const requestCameraPermission = React.useCallback(async () => {
//     const permission = await Camera.requestCameraPermission();

//     if (permission === 'denied') await Linking.openSettings();
//   }, []);

//   const toggleActiveState = async () => {
//     if (barcodes && barcodes.length > 0 && isScanned === false) {
//       setIsScanned(true);

//       barcodes.forEach(async scannedBarcode => {
//         if (scannedBarcode.rawValue !== '') {
//           setBarcode(scannedBarcode.rawValue);
//           productAnimationState.transitionTo('show');
//         }
//       });
//     }
//   };

//   function renderHeader() {
//     return (
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerTitle}>
//           {selectedOption == scan_product_option.camera
//             ? 'Scan Camera'
//             : 'Scan QR Code'}
//         </Text>

//         <TouchableOpacity>
//           <IconFlashOn width="24" />
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   function renderFooter() {
//     return (
//       <View style={styles.footerContainer}>
//         <TextButton
//           label="Scan QR Code"
//           contentContainerStyle={{
//             flex: 1,
//             height: responsiveHeight(55),
//             marginLeft: SIZES.radius,
//             borderRadius: SIZES.radius,
//             backgroundColor:
//               selectedOption == scan_product_option.qr
//                 ? COLORS.primary
//                 : COLORS.lightGrey,
//           }}
//           labelStyle={{
//             ...FONTS.h4,
//             color:
//               selectedOption == scan_product_option.qr
//                 ? COLORS.secondary
//                 : COLORS.primary,
//           }}
//           onPress={() => {
//             setSelectedOption(scan_product_option.qr);
//           }}
//         />

//         <TextButton
//           label="Scan Camera"
//           contentContainerStyle={{
//             flex: 1,
//             height: responsiveHeight(55),
//             marginLeft: SIZES.radius,
//             borderRadius: SIZES.radius,
//             backgroundColor:
//               selectedOption == scan_product_option.camera
//                 ? COLORS.primary
//                 : COLORS.lightGrey,
//           }}
//           labelStyle={{
//             ...FONTS.h4,
//             color:
//               selectedOption == scan_product_option.camera
//                 ? COLORS.secondary
//                 : COLORS.primary,
//           }}
//           onPress={() => {
//             setSelectedOption(scan_product_option.camera);
//           }}
//         />
//       </View>
//     );
//   }

//   function CameraFrame() {
//     return (
//       <Svg height="100%" width="100%">
//         <Defs>
//           <Mask id="mask" x="0" y="0" height="100%" width="100%">
//             <Rect height="100%" width="100%" fill="#fff" />
//             <Rect x="18%" y="30%" width="250" height="250" fill="black" />
//           </Mask>
//         </Defs>

//         <Rect
//           height="100%"
//           width="100%"
//           fill="rgba(0, 0, 0, 0.8)"
//           mask="url(#mask)"
//         />

//         {/* Frame Border */}
//         <Rect
//           x="18%"
//           y="30%"
//           width="250"
//           height="250"
//           strokeWidth="5"
//           stroke="#fff"
//         />
//       </Svg>
//     );
//   }

//   function renderCamera() {
//     if (device == null) {
//       return <View style={{flex: 1}} />;
//     } else {
//       return (
//         <View style={{flex: 1}}>
//           <Camera
//             style={{flex: 1}}
//             device={device}
//             isActive={true}
//             frameProcessor={frameProcessor}
//             frameProcessorFps={5}
//           />

//           {/* Loading / Searching View */}
//           <MotiView
//             state={loaderAnimationState}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: COLORS.dark60,
//             }}>
//             <Text style={{...FONTS.h3, color: COLORS.light}}>Searching</Text>
//           </MotiView>

//           {/* Scan Button */}
//           {selectedOption == scan_product_option.camera && (
//             <View
//               style={{
//                 position: 'absolute',
//                 alignItems: 'center',
//                 bottom: SIZES.padding,
//                 left: 0,
//                 right: 0,
//               }}>
//               <IconScannerQRGreen
//                 style={{
//                   height: responsiveHeight(60),
//                   width: responsiveHeight(60),
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//                 onPress={() => {
//                   loaderAnimationState.transitionTo('start');

//                   setTimeout(() => {
//                     loaderAnimationState.transitionTo('stop');
//                     productAnimationState.transitionTo('show');
//                   }, 2000);
//                 }}
//               />
//             </View>
//           )}

//           {/* QR Code */}
//           {setSelectedOption == scan_product_option.qr && (
//             <View
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//               }}>
//               <CameraFrame />

//               {/* Label 1 */}
//               <View
//                 style={{
//                   position: 'absolute',
//                   top: '15%',
//                   left: 0,
//                   right: 0,
//                   alignItems: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     ...FONTS.h2,
//                     color: COLORS.light,
//                   }}>
//                   Scan...
//                 </Text>
//               </View>

//               {/* Label 2 */}
//               <View
//                 style={{
//                   position: 'absolute',
//                   top: SIZES.height * 0.3 + 220,
//                   left: 0,
//                   right: 0,
//                   alignItems: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     ...FONTS.body3,
//                     color: COLORS.light,
//                   }}>
//                   Align the code to be in the middle of the box
//                 </Text>
//               </View>
//             </View>
//           )}

//           {/* Product */}
//           <MotiView
//             state={productAnimationState}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               height: responsiveHeight(120),
//               paddingVertical: SIZES.radius,
//               alignItems: 'center',
//               zIndex: 1,
//             }}>
//             <Shadow>
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   flexDirection: 'row',
//                   width: SIZES.width - SIZES.padding * 2,
//                   alignItems: 'center',
//                   paddingHorizontal: SIZES.radius,
//                   borderRadius: SIZES.radius,
//                   backgroundColor: COLORS.light,
//                 }}>
//                 {/* Image */}
//                 <Image
//                   source={BlueBand}
//                   style={{
//                     width: responsiveHeight(60),
//                     height: responsiveHeight(60),
//                     borderRadius: 30,
//                   }}
//                 />

//                 {/* Product Name & SKU */}
//                 <View
//                   style={{
//                     flex: 1,
//                     marginLeft: SIZES.radius,
//                   }}>
//                   <Text style={{...FONTS.h4, color: COLORS.primary}}>
//                     Blue Band
//                   </Text>
//                   <Text style={{...FONTS.body4}}>SKU: 12345678</Text>
//                 </View>

//                 {/* Price */}
//                 <Text
//                   style={{
//                     ...FONTS.h4,
//                     color: COLORS.primary,
//                   }}>
//                   $67.00
//                 </Text>
//               </TouchableOpacity>
//             </Shadow>
//           </MotiView>
//         </View>
//       );
//     }
//   }

//   return (
//     <View style={{flex: 1}}>
//       {/* Header */}
//       {renderHeader()}

//       {/* Camera */}
//       {renderCamera()}

//       {/* Footer */}
//       {renderFooter()}
//     </View>
//   );
// };

// export default Scanner;

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     paddingTop: SIZES.padding,
//     paddingBottom: SIZES.radius,
//     paddingHorizontal: SIZES.padding,
//     alignItems: 'center',
//     backgroundColor: COLORS.light,
//     zIndex: 1,
//   },
//   headerTitle: {
//     flex: 1,
//     marginLeft: SIZES.radius,
//     ...FONTS.h4,
//     color: colors.black,
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     height: responsiveHeight(90),
//     paddingTop: SIZES.radius,
//     paddingHorizontal: SIZES.radius,
//     backgroundColor: COLORS.light,
//   },
// });
