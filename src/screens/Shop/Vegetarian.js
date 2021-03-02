import React from 'react';
import {View,Text,StyleSheet} from 'react-native'


const Vegetarian=()=>{
    return(
      <View style={styles.container}>
            <Text>Vegetarian Screen</Text>
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


export default Vegetarian;