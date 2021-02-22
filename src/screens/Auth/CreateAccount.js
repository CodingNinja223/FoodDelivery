import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import {auth} from '../../../init/firebase'
class CreateAccount extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            number:'',
            email:'',
            password:''
        }
    }


   SignUp=()=>{
    const {name,number,email,password}=this.state;
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
    // Signed in 
        user.updateProfile({
        displayName: name,
        phoneNumber:number
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 }

    render(){
        const {name,number,email,password}=this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.headingText}>Create Account</Text>
                <View style={styles.contain}>
                    <TextInput placeholder="full Name"  value={name} onChangeText={(e)=>this.setState({name:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="Phone Number" keyboardType="numeric" value={number} onChangeText={(e)=>this.setState({number:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={(e)=>this.setState({email:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={(e)=>this.setState({password:e})}/>
                </View>
                <View style={styles.contain}>
                    <TouchableOpacity style={styles.buttonSignUp} onPress={this.SignUp}>
                        <Text style={styles.TextSignUp}>Sign Up</Text>
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
     },
     buttonSignUp:{
        borderRadius:20,
        width:280,
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'transparent',
        padding:10
      },
      TextSignUp:{
          color:'red',
          textAlign:'center'
      },
      contain:{
          margin:25
      },
      headingText:{
          marginBottom:50,
          fontSize:23
      }
 })

 export default CreateAccount