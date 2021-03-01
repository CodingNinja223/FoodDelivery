import React,{Component} from 'react';
import {View,Text,FlatList,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';


class CategoriesSlider extends Component{
constructor(){
    super();
    this.state={
        data:[
            {
                id:1,
                text:"Alcohol",
                image:require('../../img/Alcohol.jpg'),
                route:'Alcohol'
            },
            {
                id:2,
                text:"Breakfast",
                image:require('../../img/Breakfast.jpg'),
                route:'Breakfast'
            },
            {
                id:3,
                text:"Burgers",
                image:require('../../img/burgers.jpg'),
                route:'Burgers'
            },
            {
                id:4,
                text:"Chicken",
                image:require('../../img/chicken.jpg'),
                route:'Chicken'
            },
            {
                id:5,
                text:"Fast Food",
                image:require('../../img/Fast-Food.jpg'),
                route:'Fast Food'
            },
            {
                id:6,
                text:"Indian Food",
                image:require('../../img/indian.jpg'),
                route:'Indian Food'
            },
            {
                id:7,
                text:"Pasta",
                image:require('../../img/pasta.jpg'),
                route:'Pasta'
            },
            {
                id:8,
                text:"Sea Food",
                image:require('../../img/sea-food.jpg'),
                route:'Sea Food'
            }
        ]
    }
}
    render(){
        
    return(
    <View style={styles.container}>
        <View style={styles.pad}>
             <Text style={styles.heading}>Categories</Text>
             <FlatList
                showsHorizontalScrollIndicator={false}
                 horizontal
                keyExtractor={item=>item.id}
                data={this.state.data}
                renderItem={({item})=>(
                    <TouchableOpacity 
                     onPress={()=>this.props.navigation.navigate(`Account`,{screen:`${item.route}`})}>
                    <ImageBackground source={item.image} style={styles.image} resizeMode="cover">
                        <Text style={styles.foodText}>{item.text}</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                )}             
             />
        </View>
    </View>
    )
    }
}

const styles=StyleSheet.create({
  container:{
      backgroundColor:"white",
      marginTop:10
  },
  pad:{
    margin:20
  },
  heading:{
      fontSize:20,
      margin:10
  },
  foodText:{
   color:"#FFFFFF",
   fontSize:20,
   margin:20
  },
  image:{
    width:200,
    height:200,
    borderRadius:15,
    overflow:"hidden",
    margin:10
  }
})

export default CategoriesSlider;