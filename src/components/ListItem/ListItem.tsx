import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

import { styles } from './ListItemStyle';

interface props {
    image: ImageSourcePropType,
    title: string,
}

export function ListItem(props: props) {
    return (
        <View style={styles.listContainer}>
            <Image source={props.image} style={styles.listImage} />
            <Text style={styles.listTitle}>{props.title}</Text>
        </View>
    );
}