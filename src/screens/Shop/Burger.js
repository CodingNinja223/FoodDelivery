import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Burger extends Component{



    render(){
        return(
          <View style={styles.container}>
              <Text>Burgers screen</Text>
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


export default Burger;