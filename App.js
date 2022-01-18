/*
* @bainloko
* DDM II
* 18/01/2022
*/

import * as React from 'react';
import {View, StatusBar, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import meuEstilo from './src/meuEstilo';

export default class App extends React.Component {
  state = {
    peso: 0.0,
    altura: 0.0,
    resultadoIMC: 0.0
  }

  atualizaPeso = (number) => {
    this.setState({peso: number});
  }
  
  atualizaAltura = (number) => {
    this.setState({altura: number});
  }

  roundAccurately(number, decimalPlaces){
    decimalPlaces = 3;
    return Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces); //code courtesy of Jack Moore https://www.jacklmoore.com/notes/rounding-in-javascript/ - in this case, I'll set the decimal places to a constant three, which is fine for me' applications. thanks m8 HUAHUEAHUAEUH
  }

  formula(){
    this.state.resultadoIMC = this.roundAccurately(parseFloat(this.state.peso) / (parseFloat(this.state.altura) * parseFloat(this.state.altura)));
    
    if (this.state.resultadoIMC < 18.5){
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso abaixo\ndo normal. Procure um médico\nassim que possível!");
    } else if (this.state.resultadoIMC > 24.9){
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso acima\ndo normal. Procure um médico\nassim que possível!");
    } else {
      document.getElementById("resultado").innerHTML = ("Seu IMC é " + this.state.resultadoIMC + ".\nVocê está com o peso dentro\ndo normal. Continue assim!");
    }
  }

  render(){
    return(
      <View style={meuEstilo.container}>
        <StatusBar />
          <Text style={meuEstilo.textoInicial}><span>Calculadora do IMC para Adultos</span></Text>
          <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o peso (em Kg)" autoCapitalize="none" onChangeText={this.atualizaPeso} keyboardType="numeric" />
          <TextInput style={meuEstilo.inputExemplo2} underlineColorAndroid="transparent" placeholder="Digite a altura (em M)" autoCapitalize="none" onChangeText={this.atualizaAltura} keyboardType="numeric" /> 
          <Text style={meuEstilo.textoResultado}><span id="resultado"></span></Text>
          <Text style={meuEstilo.textoHr}><hr /></Text>
          <Pressable style={meuEstilo.botaoExemplo} onPress={()=>this.formula(this.state.peso, this.state.altura, this.state.resultadoIMC)}>
            <Text style={meuEstilo.fonteExemplo}>Calcular</Text>
          </Pressable>
      </View>
    );
  }
}