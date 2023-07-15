import React from 'react'
import { Image, View } from 'react-native'

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginBottom: 3, alignItems:'center' }}>
            <Image
                style={{ width: 120, height: 40 }}
                source={require('../images/instagram.png')}
            />

            <Image
                style={{ width: 28, height: 28,  marginLeft: 180 }}
                source={require('../images/heart.png')}
            />

            <Image
                style={{ width: 28, height: 28,  marginLeft: 15 }}
                source={require('../images/messenger.jpg')}
            />
        </View>
    )
}

export default Header