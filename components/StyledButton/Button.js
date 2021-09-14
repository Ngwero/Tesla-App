import React from 'react';
import { View,Text, Pressable } from 'react-native';
import styles from '../StyledButton/StylesButton';

const Styledbutton = (props) => {


  //const type = props.type
    const {type,content, onPress} = props
  const backgroundColor = type === 'primary' ? 'black' : 'white'
  const textColor = type === 'primary' ? 'white' : 'black'
  //const content =props.content
  //const onPress = props.onPress
  

    return (
      <View style={styles.container}>
        <Pressable style={[styles.styledbutton, {backgroundColor : backgroundColor}]} onPress={() => onPress()}>
          <Text style={[styles.txt, { color: textColor }]}>{content}</Text>
        </Pressable>
        </View>
    );
}



export default Styledbutton;
