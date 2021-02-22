import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {provider,auth} from '../../../init/firebase'
import { AntDesign } from '@expo/vector-icons'; 

class Login extends Component{
constructor(){
    super();
    this.state={
        email:'',
        password:''
    }
}


Login=()=>{
    const {email,password}=this.state;
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

googleSignIn=()=>{
   
  
    auth.signInWithCredential(provider)
    .then((result) => {
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

}

render(){
    return(
     <View style={styles.container}>
         <View style={styles.containPad}>
            <TextInput placeholder="Email" value={this.state.email} keyboardType="email-address" onChangeText={(e)=>this.setState({email:e})}/>
         </View>
         <View style={styles.containPad}>
            <TextInput placeholder="Password" value={this.state.password}  keyboardType="visible-password" onChangeText={(e)=>this.setState({password:e})}/>
         </View>
         <View>
              <TouchableOpacity style={styles.buttonLogIn} onPress={this.Login}>
                   <Text style={styles.TextLogin}>LOG IN</Text>
              </TouchableOpacity>
         </View>

           <View style={styles.containPad}>
               <Text>OR</Text>
           </View>

           <View style={styles.containPad}>
                <TouchableOpacity style={styles.buttonLogin} onPress={this.googleSignIn}>
                     <Text style={styles.textAlign}><AntDesign name="google" size={15} color="black" /> Google Sign In</Text>
                </TouchableOpacity>
           </View>
     </View>
    )
 }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },buttonLogIn:{
        borderRadius:20,
        width:280,
        backgroundColor:'red',
       padding:10
      },
      TextLogin:{
          color:'white',
          textAlign:'center'
    },
    containPad:{
      marginVertical:30
    },
    buttonLogin:{
      borderRadius:20,
      width:280,
      borderColor:'black',
      borderWidth:2,
      backgroundColor:'transparent',
      padding:10
    },
    textAlign:{
      textAlign:'center'
    }
})


export default Login;