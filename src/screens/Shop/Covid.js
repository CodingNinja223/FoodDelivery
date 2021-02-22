import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'

class Covid extends Component{
   

    render(){
        return(
          <View style={styles.container}>
               <Text>Covid Screen</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Covid;