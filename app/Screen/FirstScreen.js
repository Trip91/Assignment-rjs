import React, { Component } from 'react';
import { View, Text ,StyleSheet, ScrollView,TextInput,TouchableOpacity,Image, Dimensions,Pressable} from 'react-native';
import { Container, Header, Footer,Left, Body, Right, Button, Icon, Title } from 'native-base';
import ClickColor from '../Component/ClickColor';
const { height, width } = Dimensions.get("window")

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status:true,
    };
  }
  
    change = () => {
        this.setState({
            status: false
        })
    
    }
 
  
  render() {
    return (
      <View style={{flex:1,
    //   alignItems:'center',
     alignContent:'center',
    // alignSelf:'center',
    // justifyContent:'center'
      }}>
         
          <View style={{justifyContent:'center',height:'50%',width:'50%',alignItems:'center',margin:'5%'}}>
              <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
          <Text>Hello</Text>
         </View>
          <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
          <Text>Hello Hello</Text>
          </View>
          <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
          <Text>Hello Hello Hello </Text>
          </View>
          <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
          <Text>Hello Hello Hello Hello</Text>
          </View>
          </View>
          {/* <View  style={[(this.state.status) ? styles.unselectStyle : styles.selectStyle]}>

          </View> */}
        
          <View style={{justifyContent:'center',width:'100%',alignItems:'center',justifyContent:'center',height:'60%'}}>
         <Pressable onPress={() => this.change()}
         style={{height:40,width:150,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
<Text>
    Press
</Text>
         </Pressable>
         {this.state.status==false?
         <Text>Button Pressed</Text>:null}
         </View>
         {/* <ClickColor 
         //  status={this.state.status}
        
        change1={() => this.setState({status: false })}
    
     /> */}
     <View  style={[(this.state.status) ? styles.unselectStyle : styles.selectStyle]}>

          </View> 
       
      </View>
    );
  }
}



const styles = StyleSheet.create({

    unselectStyle: {
        height:height/2,
        width:width/2,
        backgroundColor:'red',
        opacity:.3,
        position:'absolute',
        top:'25%',left:'25%',
        flex:1

    },
    selectStyle: {
        height:height/2,
        width:width/2,
        backgroundColor:'green',
        opacity:.3,
        position:'absolute',
        top:'25%',left:'25%',
        flex:1

    },})