import React, { Component } from 'react';
import BarcodeMask from 'react-native-barcode-mask';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Image, Dimensions
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class Screen2 extends Component {
    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
        console.log("a");
    };

    render() {
        return (
            <QRCodeScanner
                containerStyle={{ padding: 0, margin: 0 }}
                cameraStyle={{
                    alignSelf: 'center', width: widthOfDevice * 2 / 3, height: widthOfDevice * 2 / 3,
                    overflow: 'hidden'
                }}
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                showMarker={true}
                // cameraProps={{

                //     // justifyContent: 'flex-end',
                //     // alignItems: 'center',
                //     children: BarcodeMaskCustom,
                // }}
                customMarker={<BarcodeMask overflow='hidden' width={widthOfDevice * 2 / 3} height={widthOfDevice * 2 / 3} />}
                topContent={
                    < View style={styles.container} >
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.displayIconCancel2}>
                                <Image style={styles.iconHead} source={require('../../../Asset/Images/cancel2.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.displayIconNoFlash}>
                                <Image style={styles.iconHead} source={require('../../../Asset/Images/noFlash.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.centerText}>Hướng camera về mã sản phẩm</Text>
                    </View >
                }
                bottomContent={
                    < TouchableOpacity style={styles.buttonTouchable} >
                        <Text>Hello</Text>
                    </TouchableOpacity >
                }
            />

        );
    }
}

const widthOfDevice = Dimensions.get('window').width;

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {

    },
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 0,
    },
    iconHead: {
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 0,
        padding: 0,
        marginBottom: 10,

    },
    displayIconCancel2: {
        width: 50,
        height: 50,
    },
    displayIconNoFlash: {
        width: 40,
        height: 40,
    },
});

export default Screen2;