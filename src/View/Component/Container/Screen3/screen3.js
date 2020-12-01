import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Keyboard,
    TouchableHighlight,
    Animated,
    TouchableOpacity
} = ReactNative;


class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(100),  //This is the initial position of the subview
            buttonText: "Show Subview",
            isHidden: true,
            // isAutoFocus:
        };
    }


    _toggleSubview() {
        const { isHidden } = this.state;
        this.setState({
            buttonText: !isHidden ? "Show Subview" : "Hide Subview",
            isHidden: !isHidden
        });

        //var toValue = 0;

        // if (isHidden) {
        //     toValue = 0;
        // }

        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        Animated.spring(
            this.state.bounceValue,
            {
                useNativeDriver: false,
                toValue: 0,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();
    }

    _sendQRCode = () => {
        this._toggleSubview();

    }

    render() {
        //debugger
        return (
            <View style={styles.container}>
                <View style={{ opacity: 0.5, }}>
                    <TouchableHighlight style={styles.button} onPress={() => { this._toggleSubview() }}>
                        <Text style={styles.buttonText}>{this.state.buttonText}</Text>
                    </TouchableHighlight>
                </View>

                <Animated.View
                    style={[styles.subView,
                    { transform: [{ translateY: this.state.bounceValue }] }]}>
                    {!this.state.isHidden ?
                        <View style={styles.panel}>
                            <Text marginTop='30'>Nhập mã bằng tay</Text>
                            <View>
                                <TextInput keyboardType='number-pad' autoFocus={true} placeholder={this.state.buttonText}></TextInput>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={this._sendQRCode}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Gửi mã</Text>
                            </TouchableOpacity>
                            <Text style={{ position: 'absolute', bottom: 5, right: 10, color: 'blue' }}>Xong</Text>
                        </View> : null}
                </Animated.View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginTop: 0
    },
    button: {
        padding: 7,
        width: 180,
        backgroundColor: 'black',
        borderRadius: 8,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 17,
        color: "#007AFF"
    },
    subView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        // height: 100,
    },
    panel: {
        padding: 20,
        height: 200,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    }
});

export default Screen3;