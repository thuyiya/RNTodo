import React from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../constants';
import Typography from "./Typography";

const { height, width } = Dimensions.get('screen');

const Loading = ({ enable, text = "" }) => {

    if(!enable) {
        return null
    }

    return (<View style={styles.container}> 
            <View style={styles.backdrop}/>
            <ActivityIndicator size={"small"} color={theme.colors.loadingIndicator}/>
            {text && <Typography style={styles.text}>{text}</Typography>}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    backdrop: {
        position: 'absolute',
        backgroundColor: theme.colors.backdropColor,
        opacity: theme.opacity.backdrop,
        height,
        width,
        zIndex: 9999999,
    },
    text: {
        zIndex: 99999999
    }
})

Loading.propTypes = {
    enable: PropTypes.bool.isRequired,
    text: PropTypes.string
}

export default Loading;