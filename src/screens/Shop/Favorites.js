import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'

class Favorites extends Component{
   

    render(){
        return(
          <View style={styles.container}>
               <Text>Favorites Screen</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Favorites;