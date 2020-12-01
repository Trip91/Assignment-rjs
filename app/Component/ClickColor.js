import React, { Component } from 'react';
import { View, Text ,StyleSheet, ScrollView,TextInput,TouchableOpacity,Image, Dimensions,Pressable} from 'react-native';
import { Container, Header, Footer,Left, Body, Right, Button, Icon, Title } from 'native-base';
const { height, width } = Dimensions.get("window")

export default class ClickColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // status:this.props.status
    };
  }
  
  componentDidMount=()=>{
    this.props.change1()

  }
  render() {
    return (
        <View  style={[(this.state.status) ? styles.unselectStyle : styles.selectStyle]}>

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