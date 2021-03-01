import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Help=()=>{
    return(
     <View style={styles.container}>
         <View style={styles.contain}>
            <View>
                <Text style={styles.topics}>All Topics</Text>
                <Text style={styles.textHelp}>Help with an order</Text>
                <Text style={styles.textHelp}>Account and Payment Options</Text>
                <Text style={styles.textHelp}>Guide to Food On Wheels</Text>
                <Text style={styles.textHelp}>Help with a Pick Up order</Text>
            </View>
         </View>
     </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    contain:{
        margin:15
    },
    topics:{
        fontSize:15,
        color:"gray"
    },
    textHelp:{
        fontSize:18,
        marginVertical:10
    }
})

export default Help;