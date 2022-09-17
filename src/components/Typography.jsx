import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '../constants'

const Typography = ({
    size = 'h5', 
    weight= 'normal', 
    space = 0,
    align = 'center',
    style = {},
    color = theme.colors.textColor,
    children
}) => {
    return (<Text style={[{
        margin: space * theme.spaceSize,
        textAlign: align,
        color: color,
        fontSize: theme.fontSizeMap[size],
        fontWeight: theme.fontWeightMap[weight]
    }, style]}>{children}</Text>)
}

Typography.propTypes = {
    size: PropTypes.oneOf([...Object.keys(theme.fontSizeMap)]),
    weight: PropTypes.oneOf([...Object.keys(theme.fontWeightMap)]),
    style: PropTypes.object
}

export default Typography;