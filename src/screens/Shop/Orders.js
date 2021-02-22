import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const Orders=()=>{
    return(
        <View style={styles.container}>
            <Text>This is the account screen</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})

export default Orders;