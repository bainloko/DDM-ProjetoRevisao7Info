/*
* @bainloko
* DDM II
* 18/01/2022, 04/03/2022
*/

import * as React from 'react';
import { View, StatusBar, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import meuEstilo from './src/meuEstilo';

class ChangeInnerHTML extends React.Component {
  state = {style: {}, value: ''}

  innerHTML = (style, html) => {
    this.setState({style: style});
    this.setState({value: html});
  }

  render(){
    return(
      <View>
        <Text style={this.state.style}>{this.state.value}</Text>
      </View>
    );
  } 
} //code courtesy of Akash Mittal https://www.akashmittal.com/react-component-get-element-by-id-code-example-demo/, tweaked by @bemloko

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.componentRef = React.createRef();
  }

  referComponentByRef = (html) => {
    this.componentRef.current.innerHTML(meuEstilo.textoResultado, html); //envia o estilo desejado OBJETO e o código HTML a ser inserido SEM FORMATAÇÃO
  }
  
  state = {
    peso: 0.0,
    altura: 0.0,
    resultadoIMC: 0.0
  }

  atualizaPeso = (number) => {
    this.setState({peso: parseFloat(number)});
  }
  
  atualizaAltura = (number) => {
    this.setState({altura: parseFloat(number)});
  }
  
  roundAccurately(number, decimalPlaces){
    return Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces); //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH
  }

  calcular(peso, altura){
    this.state.resultadoIMC = (this.roundAccurately(peso / (altura * altura)), 3);

    if (this.state.resultadoIMC < 18.5){
      this.referComponentByRef(("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso abaixo\ndo normal. Procure um médico\nassim que possível!"));
    } else if (this.state.resultadoIMC > 24.9){
      this.referComponentByRef(("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso acima\ndo normal. Procure um médico\nassim que possível!"));
    } else {
      this.referComponentByRef(("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso dentro\ndo normal. Continue assim!"));
    }
  }

  render(){
    return(
      <View style={meuEstilo.container}>
        <StatusBar />
          <View><Text style={meuEstilo.textoInicial}>Calculadora do IMC para Adultos</Text></View>
          <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o peso (em Kg)" autoCapitalize="none" onChangeText={this.atualizaPeso} keyboardType="numeric" />
          <TextInput style={meuEstilo.inputExemplo2} underlineColorAndroid="transparent" placeholder="Digite a altura (em M)" autoCapitalize="none" onChangeText={this.atualizaAltura} keyboardType="numeric" />
          <ChangeInnerHTML ref={node => this.componentRef.current = node} />
          <View style={meuEstilo.viewHr} />
          <Pressable style={meuEstilo.botaoExemplo} onPress={() => this.calcular(this.state.peso, this.state.altura)}>
            <Text style={meuEstilo.fonteExemplo}>Calcular</Text>
          </Pressable>
      </View>
    );
  }
}