import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import CategoriesGrid from './CategoriesGrid';
class Search extends Component{
constructor(){
    super();
    this.state={
        search:''
    }
}

    render(){
        const {search}=this.state;
    return(
        <View style={styles.container}>
            <View style={styles.screen}>
                <View>
                    <TextInput 
                    placeholder="Search for a restaurant or dish"
                    style={styles.textInput}
                    />
                    <AntDesign name="search1" size={24} color="black" style={styles.iconPosition} />
                </View>
            </View>
            <CategoriesGrid navigation={this.props.navigation}/>
        </View>
    )
}
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    screen:{
        margin:20,
    },
    textInput:{
        backgroundColor:'#fbfbfb',
        borderRadius:5,
        padding:5,
        paddingLeft:40,
        marginTop:20
    },
    iconPosition:{
        position:'absolute',
        top:26,
        left:6
    }
})

export default Search;