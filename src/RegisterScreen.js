/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function RegisterScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('./assets/img/gradient_bg.png')}>
            <Image
                source={require('./assets/img/pttdigital.png')}
                style={{ height: 100, width: null, marginTop: -5 }}
                resizeMode="contain" />


            {/* Authen section */}
            <View
                style={{
                    backgroundColor: '#FFF3',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 30,
                    padding: 16,
                    borderRadius: 10,
                }}>
                {/* Username */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Icon */}
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            backgroundColor: '#d23a46',
                            borderRadius: 20,
                        }}
                    />

                    <TextInput
                        onChangeText={text => { setUsername(text) }}
                        style={{
                            marginLeft: 8,
                            flex: 1,
                            paddingLeft: 16,
                            borderWidth: 1,
                            borderColor: '#0007',
                            borderRadius: 5,
                        }}
                        placeholder="Username"
                    />
                </View>

                <View style={{ height: 8 }} />

                {/* Password */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Icon */}
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            backgroundColor: '#d23a46',
                            borderRadius: 20,
                        }}
                    />

                    <TextInput
                        onChangeText={text => { setPassword(text) }}
                        style={{
                            marginLeft: 8,
                            flex: 1,
                            paddingLeft: 16,
                            borderWidth: 1,
                            borderColor: '#0007',
                            borderRadius: 5,
                        }}
                        placeholder="Password"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => alert(`Username : ${username} & Password : ${password} `)}
                    style={{
                        backgroundColor: '#7cbc2d',
                        height: 50,
                        borderRadius: 10,
                        borderColor: '#2a752e',
                        marginTop: 20,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>CONFIRM</Text>
                </TouchableOpacity>
                {/* Cancel button */}
                <TouchableOpacity
                    style={{
                        height: 50,
                        borderRadius: 10,
                        borderColor: '#0003',
                        marginTop: 10,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>CANCEL</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
