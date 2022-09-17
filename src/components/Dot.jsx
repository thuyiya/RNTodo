import React from 'react';
import { View } from 'react-native';
import { theme } from '../constants';

const Dot = () => {
    return <View style={{
        backgroundColor: theme.colors.primary,
        height: 20,
        width: 20,
        borderRadius: 10
    }}/>
}

export default Dot