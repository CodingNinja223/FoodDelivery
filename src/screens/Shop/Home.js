import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CategoriesSlider from './CategoiresSlider';
import Brands from './brands'
import Adress from './Adress';
import Food from './Foods';

const Home=({navigation})=>{
    return(
        <ScrollView >
            <Adress/>
            <Brands/>
            <CategoriesSlider navigation={navigation}/>
            <Food/>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    
})

export default Home;