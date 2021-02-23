import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpLogin from './src/screens/Auth/SignUpLogIn';
import Login from './src/screens/Auth/LogIn';
import SignUp from './src/screens/Auth/CreateAccount';
import Home from './src/screens/Shop/Home';
import Search from './src/screens/Shop/Search';
import Orders from './src/screens/Shop/Orders';
import Account from './src/screens/Shop/Account'
import {auth} from './init/firebase';
import Covid from './src/screens/Shop/Covid';
import Favourites from './src/screens/Shop/Favorites';
import Rewards from './src/screens/Shop/Rewards'
import Payment from './src/screens/Shop/Payment';
import Help from './src/screens/Shop/Help'
import Promotions from './src/screens/Shop/Promotions'
import DeliverWithUs from './src/screens/Shop/DeliverWithUs';
import Settings from './src/screens/Shop/Settings';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import AboutUs from './src/screens/Shop/AboutUs';

const Stack = createStackNavigator();


const AccountNavigation=()=>{
   return(
     <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="COVID-19" component={Covid}/>
        <Stack.Screen name="Favourites" component={Favourites}/>
        <Stack.Screen name="Restuarant Rewards" component={Rewards}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Help" component={Help}/>
        <Stack.Screen name="Promotions" component={Promotions}/>
        <Stack.Screen name="Deliver With Us" component={DeliverWithUs}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="About" component={AboutUs}/>
     </Stack.Navigator>
   )
}


const AuthNavigation=()=>{
  return(
    <Stack.Navigator>
       <Stack.Screen name="Selection" component={SignUpLogin}/>
       <Stack.Screen name="Log In" component={Login}/>
       <Stack.Screen name="Sign Up" component={SignUp}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();


class App extends Component{
  constructor(){
    super();
    this.state={
      user:''
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=> {
      if (user) {
        // User is signed in.
        console.log(user,"Samuel")
        this.setState({
          user:user
        })
      } else {
        // No user is signed in.
      }
    });
  }

  render(){
    const {user}=this.state;
    return(
      <NavigationContainer>
        {
            user ?
            (
              <Tab.Navigator  
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
        
                        if (route.name === 'Home') {
                       return   iconName = focused
                            ? <Ionicons name="home-sharp" size={24} color="black" />
                            : <Ionicons name="home-sharp" size={24} color="gray" />;
                        } else if (route.name === 'Search') {
                         return iconName = focused ? <Ionicons name="search-sharp" size={24} color="black" /> : <Ionicons name="search-sharp" size={24} color="gray" />;
                        }else if (route.name === 'Search') {
                        return  iconName = focused ? <Ionicons name="search-sharp" size={24} color="black" /> : <Ionicons name="search-sharp" size={24} color="gray" />;
                        }else if (route.name === 'Orders') {
                        return  iconName = focused ? <Ionicons name="md-receipt-sharp" size={24} color="black" /> : <Ionicons name="md-receipt-sharp" size={24} color="gray" />;
                        }else if (route.name === 'Account') {
                        return  iconName = focused ? <FontAwesome name="user" size={24} color="black" />: <FontAwesome name="user" size={24} color="gray" />;
                        }
        
                       
                      },
                    })}
                    tabBarOptions={{
                      activeTintColor: 'black',
                      inactiveTintColor: 'gray',
                    }}
                 >
                   <Tab.Screen name="Home" component={Home} user={user}/>
                   <Tab.Screen name="Search" component={Search}/>
                  <Tab.Screen name="Orders" component={Orders}/>
                  <Tab.Screen name="Account" component={AccountNavigation}/>
                  
              </Tab.Navigator>
            )
            :
            (
              <AuthNavigation/>
            )
        }
      </NavigationContainer>
    )
  }
} 

export default App;
