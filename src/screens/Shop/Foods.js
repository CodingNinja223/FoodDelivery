import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,ActivityIndicator} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class Foods extends Component{
    constructor(){
        super()
        this.state={
          food:[],
          isLoading:true
        }
    }

    componentDidMount(){
        fetch('https://www.foodonwheels.co.za/wp-json/restaurants/my-restaurants')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                food:[...data],
                isLoading:false
            })
        })

    }

    render(){
        console.log(this.state.food)
        return(
          <View style={styles.container}>
              {
                this.state.isLoading ? 
                 (  <ActivityIndicator size="large" color="red" />): 
                (
            <View>
             <Text style={styles.foods}>Restaurant</Text>
               <FlatList
                keyExtractor={item=>item.id}
                data={this.state.food}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <View style={{margin:15}}>
                             <Image source={{uri:item.featured_image}} style={styles.image}/>
                             <View style={styles.foodDescription}>
                                <Text style={styles.centerAlignText}>{item.post_name.replace("-"," ").toUpperCase()}</Text>
                             </View>
                        </View>
                    </TouchableOpacity>
                )}
               
               />
               </View>
               )}
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center'
    },
    foodDescription:{
        marginVertical:10
    },
    image:{
        height:200,
        width:'100%',
        resizeMode:"contain"
    },
    centerAlignText:{
        textAlign:'center',
        fontWeight:"bold"
    },
    foods:{
        fontSize:20,
        fontWeight:"bold",
        margin:10
    }
})


export default Foods;

//fetch('https://www.foodonwheels.co.za/wp-json/wc/v3/products?per_page=100&consumer_key=ck_5b8cb2d5aa658c3b8fdc5e4a97de60246ed7fa96&consumer_secret=cs_7eb963b7226b9d84a08829003f30b79edb8a55cc')