import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '../constants'

const Typography = ({size = 'h5', weight= 'normal', children}) => {
    return (<Text style={{
        fontSize: theme.fontSizeMap[size],
        fontWeight: theme.fontWeightMap[weight]
    }}>{children}</Text>)
}

Typography.propTypes = {
    size: PropTypes.oneOf([...Object.keys(theme.fontSizeMap)]),
    weight: PropTypes.oneOf([...Object.keys(theme.fontWeightMap)])
}

export default Typography;