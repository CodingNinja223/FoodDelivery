import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
class Adress extends Component{
constructor(){
    super();
    this.state={
      adress:'1014 Geelvis str'
    }
}

render(){
    const {adress}=this.state;
    return(
      <View style={styles.container}>
            <View style={styles.windowPain}>
                 <View style={styles.buttonDeliver}>
                     <Text style={styles.textHeading}>Delivery Adress</Text>
                 </View>
                 <TouchableOpacity>
                 <View style={styles.adressBar}>
                   <Ionicons name="location" size={24} color="black" />
                    <Text>{adress}</Text>
                 </View>
                 </TouchableOpacity>
            </View>
      </View>
    )
}
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF"
    },
    windowPain:{
      marginTop:45,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonDeliver:{
      backgroundColor:'#000000',
      borderRadius:20,
      width:170,
      padding:10
    },
    textHeading:{
        color:'#FFFFFF',
        textAlign:'center'
    },
    adressBar:{
    flexDirection:'row',
     marginTop:20,
     backgroundColor:"#cdcacc",
     borderRadius:20,
     padding:10,
     width:300
    }

})

export default Adress;