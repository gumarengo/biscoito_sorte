import React, { Component } from "react";
import './botao.css';

export class Botao extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.',
        'Se a vida te der limões, faça um suco de laranja.',
        'O álcool não soluciona nenhum problema, nem a água.'];
    }

    quebraBiscoito = () => {
        let state = this.state;
        let i = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[i];
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <button className="botao" onClick={this.quebraBiscoito}>Clique aqui!</button>
                <h3 className="frase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

