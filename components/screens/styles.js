import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
    cartitle: {
        // marginTop: '30%',
         width: '100%',
         height:Dimensions.get('window').height,
        alignItems : 'center'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
     subtitle: {
         fontSize: 40,
         fontWeight :'500'
     },
     quadtitle: {
         fontSize: 16,
         color: 'grey'
     },
     image: {
         width: '100%',
         height: '100%',
         resizeMode: 'cover',
         position:'absolute'
    },
    cont: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    
})

export default styles;
