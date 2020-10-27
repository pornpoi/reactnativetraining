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

import Icon from 'react-native-vector-icons/FontAwesome';

const CMEntry = ({ hint, isPassword, keyboardMode, onChange, icon }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Icon */}
            <Icon name={icon} size={35} style={{ width: 35 }} />

            <TextInput
                style={{
                    marginLeft: 8,
                    flex: 1,
                    paddingLeft: 16,
                    borderWidth: 1,
                    borderColor: '#0007',
                    borderRadius: 5,
                }}
                onChangeText={onChange}
                keyboardType={keyboardMode}
                secureTextEntry={isPassword}
                placeholder={hint}
            />
        </View>
    );
};

export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('./assets/img/gradient_bg.png')}>
            {/* Banner */}
            <Image
                style={{ height: 120, width: '100%' }}
                resizeMode="contain"
                source={require('./assets/img/header_react_native.png')}
            />

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
                <CMEntry
                    icon="user"
                    hint="Username"
                    keyboardMode="email-address"
                    onChange={(text) => setUsername(text)}
                />
                <View style={{ height: 8 }} />

                {/* Password */}
                <CMEntry
                    icon="lock"
                    hint="Password"
                    isPassword
                    onChange={(text) => setPassword(text)}
                />

                {/* Confirm button */}
                <TouchableOpacity
                    onPress={() => {
                        alert(`username : ${username}, password : ${password}`);
                    }}
                    style={{
                        backgroundColor: '#0F0',
                        height: 50,
                        borderRadius: 10,
                        borderColor: '#0007',
                        marginTop: 20,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
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
