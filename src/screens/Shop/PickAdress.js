import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesInput from 'react-native-places-input';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';


class PickAdress extends Component{
constructor(){
    super();
    this.state={
        savedAdress:[],
        regions:{
            latitude: -25.4566415,
            longitude: 31.0034046,
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
        },
        markerRegion:{
            latitude: -25.4566415,
            longitude: 31.0034046,
        }
    }
}

onRegionChange=(place)=>{
    this.setState({
        regions:{
            latitude:place.result.geometry.location.lat,
            longitude:place.result.geometry.location.lng,
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
        }
    })
}

render(){
    return(
        <View style={styles.container}>
            <View style={{position:'relative',top:50}} >
               <PlacesInput
                    googleApiKey={'AIzaSyC-Sqlo7ec2gLB_1dFBA092RdeSvQG75l8'}
                    placeHolder={"Some Address"}
                    language={"en-US"}
                    onSelect={place => {
                        console.log(place)
                        //place.result.geometry.location
                        this.setState({
                            regions:{
                                latitude:place.result.geometry.location.lat,
                                longitude:place.result.geometry.location.lng,
                                latitudeDelta: 0.025,
                                longitudeDelta: 0.025,
                            },
                            markerRegion:{
                               latitude:place.result.geometry.location.lat,
                                longitude:place.result.geometry.location.lng,
                            }
                        })
                        this.onRegionChange(place)
                        
                    }}
                    iconResult={<Ionicons name="md-pin" size={25} style={styles.placeIcon}/>}
                    
                    /> 
            </View>
              <MapView
                region={this.state.regions}
                style={styles.map}
                onRegionChange={()=>this.onRegionChange}
              >
                <MapView.Marker
                 coordinate={this.state.regions}
                 
                />  
             </MapView>
             
        </View>
    )
}

}


const styles=StyleSheet.create({
    container:{
      flex:1
    },
    search:{
        marginTop:30
    },
    map:{
        height:'100%',
        width:'100%'
    }
})


export default PickAdress;


