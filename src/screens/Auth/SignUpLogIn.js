import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const SignUpLogIn =({navigation})=>{

    return(
      <View style={styles.container}>
          <Text style={styles.HeadingText}>Welcome to Food On Wheels</Text>
           <View style={styles.contain}>
                <View style={styles.containerPad}>
                    <TouchableOpacity style={styles.buttonLogIn} 
                        onPress={()=>navigation.navigate('Log In')}
                    ><Text style={styles.TextLogin}>Log in</Text></TouchableOpacity>
                </View>
                <View style={styles.containerPad}>
                    <TouchableOpacity style={styles.buttonSignUp} 
                        onPress={()=>navigation.navigate('Sign Up')}
                    ><Text style={styles.TextSignUp}>Sign Up</Text></TouchableOpacity>
                </View>
           </View>
      </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    buttonLogIn:{
      borderRadius:20,
      width:280,
      backgroundColor:'red',
      padding:10
    },
    TextLogin:{
        color:'white',
        textAlign:'center'
    },
    buttonSignUp:{
      borderRadius:20,
      width:280,
      borderColor:'red',
      borderWidth:1,
      backgroundColor:'transparent',
      padding:10
    },
     HeadingText:{
      fontSize:23,
      marginVertical:50
     },
    TextSignUp:{
        color:'red',
        textAlign:'center'
    },
    containerPad:{
        marginVertical:20,
    },
    contain:{
        marginTop:150
    }
})

export default SignUpLogIn;