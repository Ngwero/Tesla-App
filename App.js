/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import CarFeed from './components/CarsList/index'
import Header from './components/Header/header'


export default function App() {
    return (
    
        <View style={styles.cover}>
            <Header/>
            <CarFeed />
        </View>
        
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})