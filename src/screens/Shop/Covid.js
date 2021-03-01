import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Button} from 'react-native'

class Covid extends Component{
   

    render(){
        return(
          <ScrollView style={styles.container}>
              <View style={{margin:20}}>
                    <Text style={styles.heading}>COVID-19 Safety{"\n"}Center</Text>
                    <View>
                    <Text style={styles.subHeading}>Protecting our{"\n"}community during{"\n"}COVID-19</Text>
                        <Text style={styles.paragraphText}>Food On Wheels is working closely with public health{"\n"}authorities to provide guidance to help{"\n"}protect yourself and others.</Text>
                    </View>
                    <View style={{marginVertical:25}}>
                        <Text style={styles.textHeading}>"Leave at door" delivery</Text>
                        <Text  style={styles.paragraphText}>Select this no-contact delivery option at{"\n"}checkout(it may be mandatory in your area).{"\n"}Wash your hands after recieving your food{"\n"}order and before you eat it.</Text>
                    </View>
                    <View style={{marginVertical:25}}>
                        <Text style={styles.textHeading}>Overall food safety</Text>
                        <Text  style={styles.paragraphText}>We regularly share best practices from{"\n"}public health authorities with our restaurant{"\n"}partners and delivery people.</Text>
                    </View>
                    <View style={{marginVertical:25}}>
                        <Text style={styles.textHeading}>Supporting delivery people</Text>
                        <Text style={styles.paragraphText}>Food On Wheels is helping delivery people with local{"\n"}initiatives that may include access to masks{"\n"}and financial support, in line with our{"\n"}COVID-19 response policy.</Text>
                    </View>
                    <View style={{marginVertical:25}}>
                        <Button title="Learn more" color="black"/>
                    </View>
               </View>
          </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    heading:{
        fontSize:35,
        marginVertical:25,
        fontWeight:'bold'
    },
    subHeading:{
        fontSize:25,
        marginVertical:10,
        fontWeight:'bold'
    },
    textHeading:{
        fontSize:15,
        fontWeight:"bold",
        marginVertical:10
    },
    paragraphText:{
        lineHeight:23
    }
})

export default Covid;