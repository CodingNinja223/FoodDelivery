import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const Offers=()=>{
    return(
      <View style={styles.container}>
          <Text>Offers screen</Text>
      </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Offers;