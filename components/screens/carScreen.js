import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles';
import Styledbutton from '../StyledButton/Button'

const CarScreen = (props) => {

    const {name, tagLine,taglineCTA, image} = props.car
    return (
    <View style={styles.cartitle}>
        <ImageBackground source={image} style={styles.image} />
            
     <View style ={styles.titles}>
                <Text style={styles.subtitle}>{name}</Text>
                <Text style={styles.quadtitle}>{tagLine} {''}
                <Text style={styles.ctatitle}>{taglineCTA}</Text></Text>
                
    </View>
            
      <View style={styles.cont}>
            <Styledbutton
                type='primary'
                content={'Custom Order'}
                onPress={() => { }} />
            <Styledbutton
                type='secondary'
                content={'Existing Inventory'}
                onPress={() => { }}/>
     </View>
 </View>
            
    );
}
export default CarScreen;
