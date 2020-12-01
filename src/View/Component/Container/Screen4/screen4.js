import React from 'react';
import {
    Text, View, StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import { connect } from 'react-redux';

var x = false;

class Screen4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { is: false };
    }

    onPressB = () => {
        x = !x;
        //debugger
        this.setState({ is: !this.state.is });
    }

    // componentDidUpdate() {
    //     if (!this.state.is) {
    //         this.setState({ is: true });

    //     }
    // }

    render() {
        //debugger
        return (
            <View>
                <Button title='aaad' onPress={this.onPressB} />
                {this.state.is ? <TextInput keyboardType='number-pad' placeholder='a' autoFocus={true}></TextInput> : null}
            </View>
        );
    }

}

const styles = StyleSheet.create({

});

export default connect()(Screen4);