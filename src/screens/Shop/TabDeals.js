import React from 'react';
import Offers from './Offers';
import Rewards from './ResRewards';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabDeals=()=>{
    return(
        <Tab.Navigator tabBarOptions={{style:{color:"black"}}} >
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Rewards" component={Rewards} />
      </Tab.Navigator>
    )
}

export default TabDeals;

