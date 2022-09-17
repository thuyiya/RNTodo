const theme = {
    colors: {
        primary: '#0145a6',
        textColor: '#333333',
        seconderyTextColor: '#787878',
        backdropColor: '#000000',
        loadingIndicator: '#000000',
        background: '#f0f0f0',
        disbaleText: '#c9c9c9',
        white: '#ffffff',
        buttonText: '#ffffff',
    },
    opacity: {
        backdrop: 0.3
    },
    fontSizeMap: {
        h1: 24,
        h2: 22,
        h3: 20,
        h4: 18,
        h5: 16,
        h6: 14
    },
    fontWeightMap: {
        normal: '300',
        avarage: '400',
        lightBold: '500',
        midBold: '700',
        bold: '900',
    },
    spaceSize: 8,
}

const strings = {
    AUTHENTICATION_SCREEN: {
        DEVICE_CAPABILITY: 'No face or fingerprint scanner is available on the device.',
        PROCCED_TEXT: 'Set Authentication to Proceed',
        SETTINGS_BUTTON: 'Go to Settings',
        GO_TO_SETTINGS_ALERT_TITLE: 'Authentication Setup',
        GO_TO_SETTINGS_ALERT_DESCRIPTION: 'Go to settings and setup authentication to proceed'
    },
    HOME: {
        TITLE: 'TODO: '
    }
}

const initialContext = {
    todos: []
}

export { theme, strings, initialContext }