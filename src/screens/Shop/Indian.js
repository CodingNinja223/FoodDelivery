import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Indian extends Component{



    render(){
        return(
          <View style={styles.container}>
              <Text>Indian screen</Text>
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


export default Indian;