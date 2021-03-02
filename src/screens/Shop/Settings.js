import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { Divider,Avatar  } from 'react-native-elements';
import {auth} from '../../../init/firebase';
import * as ImagePicker from 'expo-image-picker';
class Settings extends Component{
constructor(){
    super()
    this.state={
        image:null
    }
}
    logOut=()=>{
       auth.signOut().then(() => {
        // Sign-out successful.
        console.log("Success")
       }).catch((error) => {
        // An error happened.
      });
    }

    selectImage= async ()=>{
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    }
    render(){
        console.log(this.props.user.displayName,"Timm")
        return(
          <View style={styles.container}>
              <View style={{padding:20,justifyContent:'center',alignItems:'center'}}>
                  <Avatar
                  size="xlarge"
                  rounded
                    source={{
                        uri:
                        'https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg',
                    }}
                    onPress={this.selectImage}
                    >
                    </Avatar>
                </View>
                <View>
                    <Text style={styles.descriptionText}>{this.props.user.displayName}</Text>
                    {/* <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Edit Account')
                    }}><Text style={styles.EditAccount}>EDIT ACCOUNT</Text></TouchableOpacity> */}
                </View>
                {/* <Divider style={{ backgroundColor: 'gray',width:1000 }} /> */}
                 {/* <View style={styles.viewMargin}>
                      <Text style={styles.savedPlaces}>Saved places</Text>
                      <TouchableOpacity style={styles.flexContainer}>
                         <Ionicons name="home-outline" size={24} color="black" style={{marginTop:5}} />
                         <Text>{'      '}</Text>
                          <View>
                                <Text style={styles.icontext}>Home</Text>
                                <Text style={styles.subHeading}>Add Home</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.flexContainer}>
                            <Ionicons name="briefcase-outline" size={24} color="black" style={{marginTop:5}} />
                         <Text>{'      '}</Text>
                          <View>
                                <Text style={styles.icontext}>Work</Text>
                                <Text style={styles.subHeading}>Add Work</Text>
                          </View>
                      </TouchableOpacity>
                 </View> */}
                 <Divider style={{ backgroundColor: 'gray',width:1000 }} />
                 <View style={styles.viewMargin}>
                 <Text style={styles.savedPlaces}>Other Options</Text>
                 <TouchableOpacity onPress={this.logOut}><Text style={styles.signOut} >Sign Out</Text></TouchableOpacity>
                 </View>  
        </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    descriptionText:{
        textAlign:'center',
        marginVertical:10
    },
    EditAccount:{
        color:'red',
        textAlign:'center',
        marginVertical:10
    },
    viewMargin:{
        margin:15
    },
    savedPlaces:{
        fontSize:18,
        marginVertical:10
    },
    flexContainer:{
        flexDirection:'row',
        marginVertical:15
    },
    icontext:{
        fontSize:18
    },
    subHeading:{
        color:"gray",
        fontSize:14
    },
    signOut:{
        fontSize:15,
        color:"red"
    }
})

export default Settings;