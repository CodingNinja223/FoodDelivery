import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'; 

class Foods extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
        fetch('https://www.foodonwheels.co.za/wp-json/wp/v2/mp_menu_item')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    render(){
        return(
          <View style={styles.container}>
              <Text>This is the food Screen</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Foods;