import React, { Component } from "react";
import { Botao } from "./components/botao";
import './App.css'

class App extends Component{

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} />
        <Botao />
      </div>
    )
  }
}

export default App;