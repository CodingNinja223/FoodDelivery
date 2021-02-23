import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,ScrollView,TouchableOpacity} from 'react-native';
import {auth} from '../../../init/firebase'
import { Ionicons,FontAwesome,MaterialIcons,AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';





class Account extends Component{

    
    render(){
    return(
        <ScrollView style={{backgroundColor:'white'}}>
           <View style={styles.container}>
                <TouchableOpacity style={styles.flexContainer} 
                 onPress={this.props.navigation.navigate('COVID-19 Safety Center')}
                >
                  <AntDesign name="Safety" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>COVID-19 Safety Center</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                    <MaterialIcons name="favorite" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                <Ionicons name="ios-star-sharp" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Restaurant Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                  <Ionicons name="card" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                    <MaterialIcons name="favorite" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                 <Ionicons name="help-buoy" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                  <Ionicons name="ios-pricetag" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Promotions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                  <MaterialIcons name="delivery-dining" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Deliver with Food on Wheels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexContainer}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text>{'  '}</Text>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
           </View>
        </ScrollView>
    )
}
}


const styles=StyleSheet.create({
    container:{
        marginVertical:50,
        marginHorizontal:20
    },
    flexContainer:{
        flexDirection:'row',
        height:80
    },
    text:{
        fontSize:15
    }
})

export default Account;