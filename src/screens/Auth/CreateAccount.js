import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import {auth,db} from '../../../init/firebase'
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


   SignUp=async()=>{
    const {name,number,email,password}=this.state;
    await auth.createUserWithEmailAndPassword(email, password);
    const currentUser=auth.currentUser;
    currentUser.updateProfile({
        displayName:name,
        phoneNumber:number
    })
    db.collection("user")
    .doc(currentUser.uid)
    .set({
        email:currentUser.email,
        name:name,
        number:number,
        orders:''
    })
  console.log("user")
 }

    render(){
        const {name,number,email,password}=this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.headingText}>Create Account</Text>
                <View style={styles.contain}>
                    <TextInput placeholder="Name" style={styles.LoginText}  value={name} onChangeText={(e)=>this.setState({name:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="Phone Number" style={styles.LoginText} keyboardType="numeric" value={number} onChangeText={(e)=>this.setState({number:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="E-mail" style={styles.LoginText} keyboardType="email-address" value={email} onChangeText={(e)=>this.setState({email:e})}/>
                </View>
                <View style={styles.contain}>
                    <TextInput placeholder="Password" style={styles.LoginText} secureTextEntry={true} value={password} onChangeText={(e)=>this.setState({password:e})}/>
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
     LoginText:{
        backgroundColor:"white",
        borderColor:"#d3d5d4",
        borderWidth:1,
        width:280,
        padding:10,
        borderRadius:5
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