import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
class Payment extends Component{
   
    componentDidMount(){
        Stripe.setOptionsAsync({
            publishableKey: 'pk_test_51IJJxMK275WVR6ookgavfF6Oym2fl09sZtRnn23BclXLHQEjD6rqHtwWLxm1SE90Zwvzow0uQDctVklN5SRBjIrq00h5V8icfy', // Your key
            androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
            merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
          });
    }

    render(){
        return(
          <View style={styles.container}>
               <Text>Payment Screen</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Payment;