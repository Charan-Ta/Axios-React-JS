import React, { Component } from 'react';
import './App.css';
import Newform from './components/NewForm';
import axios from 'axios';
import Displayitems from './components/DisplayItems';

class App extends Component {
  state={
    login:"",
    id:"",
    status:""
  }
  apirequest=(e)=>{
    e.preventDefault();
    const uservalue = e.target.elements.user.value;
    axios.get(`https://api.github.com/users/${uservalue}`)
          .then((res)=>{
              this.setState({
                login: res.data.login,
                id: res.data.id,
                status: res.request.status
              })})
              .catch(function(error){
                console.log("Error occured ");
              });
          ;
  }
  
  render() {
    
    return (
      <div className="App">
        <Newform apirequest={this.apirequest}/>
        <Displayitems
          login ={this.state.login}
          id={this.state.id}
          status={this.state.status}
        />
      </div>
    );
  }
}

export default App;
