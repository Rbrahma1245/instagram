import React from 'react'
import { Image, View } from 'react-native'

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginBottom: 3 }}>
            <Image
                style={{ width: 120, height: 40 }}
                source={require('../images/instagram.png')}
            />

            <Image
                style={{ width: 40, height: 60, marginTop: -7, marginLeft: 180 }}
                source={require('../images/heart.jpg')}
            />

            <Image
                style={{ width: 28, height: 28, marginTop: 7, marginLeft: 15 }}
                source={require('../images/messenger.jpg')}
            />
        </View>
    )
}

export default Header