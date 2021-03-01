import React,{Component} from 'react';
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
import EditAccount from './src/screens/Shop/EditAccount'
//Categories Screen
import Alcohol from './src/screens/Shop/Alcohol';
import Breakfast from './src/screens/Shop/Breakfast';
import Burgers from './src/screens/Shop/Burger';
import Chicken from './src/screens/Shop/Chicken';
import Indian from './src/screens/Shop/Indian';
import Pasta from './src/screens/Shop/Pasta';
import SeaFood from './src/screens/Shop/SeaFood';
import FastFood from './src/screens/Shop/FastFood';
import CategoriesSlider from './src/screens/Shop/CategoiresSlider'
//End of Categories

const Stack = createStackNavigator();


const AccountNavigation=({user,navigation})=>{
   return(
     <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account">
            {({navigation})=><Account navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="COVID-19">
         {({navigation})=><Covid navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Favourites">
          {({navigation})=><Favourites navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Restuarant Rewards">
          {({navigation})=><Rewards navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Payment">
          {({navigation})=><Payment navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Help" >
           {({navigation})=><Help navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Promotions">
           {({navigation})=><Promotions navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Deliver With Us">
          {({navigation})=><DeliverWithUs navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Settings" >
             {({navigation})=><Settings user={user} navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutUs}/>
        <Stack.Screen name="Edit Account">
          {({navigation})=><EditAccount navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Alcohol">
          {({navigation})=><Alcohol navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Breakfast">
          {({navigation})=><Breakfast navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Burgers">
          {({navigation})=><Burgers navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Chicken">
          {({navigation})=><Chicken navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Fast Food">
          {({navigation})=><FastFood navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Indian Food">
          {({navigation})=><Indian navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Pasta">
          {({navigation})=><Pasta navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Sea Food">
          {({navigation})=><SeaFood navigation={navigation}/>}
        </Stack.Screen>
        <Stack.Screen name="Categories">
          {({navigation})=><CategoriesSlider navigation={navigation}/>}
        </Stack.Screen>
     </Stack.Navigator>
   )
}


const AuthNavigation=({navigation})=>{
  return(
    <Stack.Navigator headerMode={false}>
       <Stack.Screen name="Register">
          {({navigation})=><SignUpLogin navigation={navigation}/>}
        </Stack.Screen>
       <Stack.Screen name="Log In" >
          {({navigation})=>  <Login navigation={navigation}/>}
        </Stack.Screen>
       <Stack.Screen name="Sign Up" >
           {({navigation})=><SignUp navigation={navigation}/>}
       </Stack.Screen>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

// const TabNavigation=()=>{
//   return(

//   )
// }

class App extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      user:''
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=> {
      if (user) {
        this.setState({
          isLoggedIn:true,
          user:user
        })
      } else {
        this.setState({
          isLoggedIn:false
        })
      }
    });
  }

  render(){
    const {user,isLoggedIn}=this.state;
    console.log(user,"Samuel")
    return(
      <NavigationContainer>
       {  isLoggedIn
          ?
       
       (<Tab.Navigator  
            initialRouteName="Home"
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
           <Tab.Screen name="Home" >
              {({navigation})=>  <Home navigation={navigation}/>}
             </Tab.Screen>
           <Tab.Screen name="Search" >
                {({navigation})=><Search navigation={navigation}/>}
            </Tab.Screen>
          <Tab.Screen name="Orders" >
              {({navigation})=><Orders/>}
          </Tab.Screen>
          <Tab.Screen name="Account">
             {({navigation})=><AccountNavigation user={user} navigation={navigation}/>}
          </Tab.Screen>
          
      </Tab.Navigator>)
      
    :(<AuthNavigation/>)
    }
        
      </NavigationContainer>
    )
  }
} 

export default App;
