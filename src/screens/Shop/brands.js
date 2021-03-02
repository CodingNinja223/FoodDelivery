import React,{Component} from 'react'
import {View,Text,Image,FlatList,StyleSheet} from 'react-native';


class Brands extends Component{
   constructor(){
        super();
        this.state={
            data:[
                {
                    id:1,
                    image:require('../../img/mc.png')
                },
                {
                    id:2,
                    image:require('../../img/cup.png')
                },
                {
                    id:3,
                    image:require('../../img/Nandos.png')
                },
                {
                    id:4,
                    image:require('../../img/download.jpg')
                },
                {
                    id:5,
                    image:require('../../img/steers.png')
                },
                {
                    id:6,
                    image:require('../../img/wimpy.png')
                },
                {
                    id:7,
                    image:require('../../img/kfc.jpg')
                }
            ]
        }
    }

    render(){
        return(
           <View style={styles.container}>
                <View style={styles.pain}>
                    <Text style={styles.heading}>Restaurants We Work With</Text>
                    <FlatList
                     showsHorizontalScrollIndicator={false}
                      horizontal
                      keyExtractor={item=>item.id.toString()}
                      data={this.state.data}
                      renderItem={({item})=>(
                          <View style={styles.flexContainer}>
                             <Image source={item.image} style={styles.image}/>
                          </View>
                      )}
                    />
                </View>
           </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        margin:10
    },
    pain:{
        margin:20
    },
    flexContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
    width:170,
    height:150,
    borderRadius:15,
    overflow:"hidden",
    margin:10
    }
})
export default Brands;