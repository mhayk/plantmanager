import React from 'react';
import { Image, Text, View } from 'react-native';

import wateringImg from '../assets/watering.png'

export function Welcome() {
    return (
        <View>
            <Text>
                Manage your plants easily
            </Text>

            <Image source={wateringImg} />
        </View>
    );
}