import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TreeMenu from 'react-simple-tree-menu';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import '../../node_modules/react-simple-tree-menu/dist/main.css';
const http = require('http');

class Treed extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data: null,
    }
  }

    async componentDidMount(){
      await axios.get("http://localhost:8000/test")
      .then((rawdata)=>{
        this.setState({Data: rawdata.data}) ; 
      })
      .catch((error)=>{
        console.log(error);
      }) ;
    }
  
  render(){
    return (
    <TreeMenu
      data = {this.state.Data}
      hasSearch={false} //อยากมีก็เปลี่ยนเป็น {true}
      onClickItem={({ keys, label, ...props}) => {
        if(props.isOpen === false) {
          console.log("Elements select");
          this.props.history.push('');
          this.props.history.push(`${props.path}`);
        }
        else {console.log("Elements expand");}
      }}
    />
  );
};
};
const Trees = withRouter(Treed);
export default Trees ;