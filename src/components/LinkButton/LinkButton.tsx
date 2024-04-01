import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

import { styles } from './LinkButtonStyle';

interface props {
    text: string
    link: string
}

export function LinkButton(props: props) {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => Linking.openURL(props.link)}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}