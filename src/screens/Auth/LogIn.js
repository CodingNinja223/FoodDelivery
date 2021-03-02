import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import {provider,auth} from '../../../init/firebase'
import { AntDesign } from '@expo/vector-icons'; 
import { SocialIcon } from 'react-native-elements'
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from 'expo-google-sign-in';
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


FacebookLogIn=async()=>{
  // try {
  //   await Facebook.initializeAsync({
  //     appId: '1992662697543495',
  //   });
  //   const {
  //     type,
  //     token,
  //     expirationDate,
  //     permissions,
  //     declinedPermissions,
  //   } = await Facebook.logInWithReadPermissionsAsync({
  //     permissions: ['public_profile'],
  //   });
  //   if (type === 'success') {
  //     // Get the user's name using Facebook's Graph API
  //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //     Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //   } else {
  //     // type === 'cancel'
  //   }
  // } catch ({ message }) {
  //   alert(`Facebook Login Error: ${message}`);
  // }

  await Facebook.initializeAsync({appId:'1992662697543495'});

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = auth.FacebookAuthProvider.credential(token);
      console.log('success')
    // Sign in with credential from the Facebook user.
       auth
      .signInWithCredential(credential)
      .catch(error => {
        // Handle Errors here.
      });
  }
}





googleSignIn= async ()=>{
   const result=await GoogleSignIn.initAsync({
     clientId:"238793614098-ulhtj6blfldivmg10o0kmc7t0lc83skr.apps.googleusercontent.com"
   })
  
    console.log(result.token,result.accessToken)

}

render(){
    return(
     <ScrollView style={styles.container}>
        <View style={styles.containerLog}>
         <View style={styles.containPad}>
            <TextInput placeholder="Email" style={styles.LoginText} value={this.state.email} keyboardType="email-address" onChangeText={(e)=>this.setState({email:e})}/>
         </View>
         <View style={styles.containPad}>
            <TextInput placeholder="Password" style={styles.LoginText} value={this.state.password}  keyboardType="visible-password" onChangeText={(e)=>this.setState({password:e})}/>
         </View>
         <View style={{marginTop:20}}>
              <TouchableOpacity style={styles.buttonLogIn} onPress={this.Login}>
                   <Text style={styles.TextLogin}>LOG IN</Text>
              </TouchableOpacity>
         </View>

           <View style={styles.containPad}>
               <Text style={{color:"#d3d5d4"}}>OR</Text>
           </View>

           <View style={styles.containPad}>
                <TouchableOpacity style={styles.buttonLogin2} onPress={this.FacebookLogIn}>
                  <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                  />
                </TouchableOpacity>
           </View>
           <View style={styles.containPad}>
                <TouchableOpacity style={styles.buttonLogin2} onPress={this.googleSignIn}>
                  <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                  />
                </TouchableOpacity>
           </View>

           </View>
     </ScrollView>
    )
 }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    containerLog:{
      alignItems:'center',
      justifyContent:'center',
      marginVertical:90
    },
    buttonLogIn:{
        borderRadius:20,
        width:280,
        backgroundColor:'red',
       padding:10
      },
      LoginText:{
         backgroundColor:"white",
         borderColor:"#d3d5d4",
         borderWidth:1,
         width:280,
         padding:10,
         borderRadius:5
      },
      TextLogin:{
          color:'white',
          textAlign:'center'
    },
    containPad:{
      marginVertical:15
    },
    buttonLogin:{
      borderRadius:20,
      width:280,
      borderColor:'black',
      borderWidth:2,
      backgroundColor:'transparent',
      padding:10
    },
    buttonLogin2:{
      borderRadius:20,
      width:280
    },
    textAlign:{
      textAlign:'center'
    }
})


export default Login;