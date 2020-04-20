import React, {Component} from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';
import { hook } from 'cavy';
class Home extends React.Component {
    constructor(){
      super();
      this.textInput=React.createRef();
    }
    render(){
        const {generateTestHook }=this.props;
        return(
            <View>
          <TextInput
          ref={generateTestHook('Home.TextInput',this.textInput)}
            /> 
            
            </View>
        );
    }
  }
  const TestableScene =hook(Home);
  export default TestableScene;