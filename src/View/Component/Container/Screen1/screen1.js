import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Screen1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View><Text>He</Text></View>
        );
    }

}

const styles = StyleSheet.create({

});

export default connect()(Screen1);