import React from 'react';
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // componentDidMount(){
    //     console.log(module.exports);
    // }
    render() {
        return (
            <View>
                <StatusBar barStyle='dark-content' backgroundColor='transparent' />
                <Text>Hello</Text>
                <Button title="Screen1" onPress={() => this.props.navigation.navigate('Screen1')} />
                <Button title="Screen2" onPress={() => this.props.navigation.navigate('Screen2')} />
                <Button title="Screen3" onPress={() => this.props.navigation.navigate('Screen3')} />
                <Button title="Screen4" onPress={() => this.props.navigation.navigate('Screen4')} />
                <Button title="Screen5" onPress={() => this.props.navigation.navigate('Screen5')} />
                <View backgroundColor='black'>
                    <Slider style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        vertical={true}
                        // maximumTrackTintColor='transparent'
                        // minimumTrackTintColor='transparent'
                        minimumTrackTintColor="#000"
                        maximumTrackTintColor="#FFF"
                    />
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    slider: {
        transform: [{ scaleY: 3 }],
        margin: 0,
        width: 200,
        height: 50,

    }
});

export default connect()(Main);