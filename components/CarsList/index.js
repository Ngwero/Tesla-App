import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, Dimensions} from 'react-native';
import CarScreen from '../screens/carScreen';
//import CarF from '../screens/carScreen';
import cars from './cars'


const Carfeed = (props) => {
    return (
        <View style={styles.container}>
         
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarScreen car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}

            />
        
            
        </View>
    );
}
export default Carfeed;

const styles = StyleSheet.create({
    container: {
       
        width: '100%'
    }
})


