import React from 'react';
import { View, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native';
import { theme } from '../constants';

const { height, width } = Dimensions.get('screen');

const Loading = ({ enable, text }) => {

    if(!enable) {
        return null
    }

    return (<View style={styles.container}> 
            <View style={styles.backdrop}/>
            <ActivityIndicator size={"small"} color={theme.colors.loadingIndicator}/>
            <Text style={styles.text}>{text}</Text>
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

export default Loading;