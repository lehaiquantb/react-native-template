import BarcodeMask from 'react-native-barcode-mask';
import React, { Component } from 'react';

class BarcodeMaskCustom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<BarcodeMask edgeColor='red' width={100} height={300} showAnimatedLine={false} outerMaskOpacity={0.8} />);
    }

}

export default BarcodeMaskCustom;