/*
* @bainloko
* DDM II
* 18/01/2021
*/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textoInicial: {
      marginBottom: 10,
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 21,
      letterSpacing: 0.25,
    },

    inputExemplo: {
      marginTop: 5,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'black',
      borderRadius: 4,
      elevation: 3,
    },

    inputExemplo2: {
      marginTop: 5,
      marginBottom: 10,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'black',
      borderRadius: 4,
      elevation: 3,
    },

    textoResultado: {
      paddingVertical: 3,
      color: 'black',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
    },

    viewHr: {
      width: 200,
      marginTop: 10,
      marginBottom: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },

    botaoExemplo: {
      backgroundColor: 'black',
      marginTop: 5,
      paddingVertical: 12,
      width: 110,
      borderRadius: 4,
      elevation: 3,
    },

    fonteExemplo: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
    },
});