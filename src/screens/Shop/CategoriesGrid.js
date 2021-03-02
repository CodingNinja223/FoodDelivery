import React,{Component} from 'react';
import {View,Text,FlatList,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';



class CategoriesGrid extends Component{
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
            },
            {
                id:9,
                text:"Fruits",
                image:require('../../img/Fruits.jpg'),
                route:'Fruits'
            },
            {
                id:10,
                text:"Sweets",
                image:require('../../img/Sweets.jpg'),
                route:'Sweets'
            },
            {
                id:11,
                text:"Coffee",
                image:require('../../img/Coffee.jpg'),
                route:'Coffee'
            },
            {
                id:12,
                text:"Vegetarian",
                image:require('../../img/Salads.jpg'),
                route:'Vegetarian'
            }
        ]
    }
}


render(){
    return(
       <FlatList
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
        numColumns={2}
         keyExtractor={item=>item.id}
         data={this.state.data}
         renderItem={({item})=>(
             <TouchableOpacity style={styles.flexcontainer} onPress={()=>this.props.navigation.navigate(`${item.route}`)}>
             <ImageBackground source={`${item.image}`} style={styles.image}>
                  <Text style={styles.textColor}>{item.text}</Text>
             </ImageBackground>
             </TouchableOpacity>
         )}
       />
    )
}
}

const styles=StyleSheet.create({
    image:{
        width:195,
        height:150,
        margin:5,
        elevation:6,
        backgroundColor:"#000000",
        opacity:0.7,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    textColor:{
        color:"#ffffff",
        fontSize:23
    },
    flexcontainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesGrid;