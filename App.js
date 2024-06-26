import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
    'Siga os bons e aprenda com eles.',
    'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
    'Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.',
    'A melhor hora para plantar uma árvore foi há 20 anos. A segunda melhor hora é agora.',
    'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
    'Não espere por oportunidades extraordinárias. Seize momentos comuns e os torne grandes.',
    'A persistência é o caminho do êxito.',
    'A vida é 10% o que acontece comigo e 90% de como eu reajo a isso.',
    'Não é sobre ter todas as pessoas do seu lado, mas sim sobre ter a pessoa certa.',
    'A diferença entre uma pessoa de sucesso e outras não é a falta de força, não é a falta de conhecimento, mas sim a falta de vontade.',
    'O medo de perder tira a vontade de ganhar.',
    'A maior descoberta de todos os tempos é que uma pessoa pode mudar seu futuro apenas mudando sua atitude.'
     ];  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  

  }

render(){
  return(
    <div className="container">
      <img src={require('./fotos/biscoito.png')} className="img" />
      <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
      <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
      <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;