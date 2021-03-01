import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const AboutUs=()=>{
    return(
     <View style={styles.container}>
         <View style={styles.contain}>
             <TouchableOpacity>
              <Text style={styles.aboutFont}>Rate Us In Google Play</Text>
              </TouchableOpacity>
              <Divider style={{ backgroundColor: 'gray' }} />
              <TouchableOpacity>
              <Text style={styles.aboutFont}>Like us on Facebook</Text>
              </TouchableOpacity>
              <Divider style={{ backgroundColor: 'gray' }} />
              <TouchableOpacity>
              <Text style={styles.aboutFont}>Legal</Text>
              </TouchableOpacity>
              <Divider style={{ backgroundColor: 'gray' }} />
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
        margin:10
    },
    aboutFont:{
        fontWeight:"bold",
        marginVertical:15
    }
   
})

export default AboutUs;