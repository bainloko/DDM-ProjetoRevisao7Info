/*
* @bainloko
* DDM II
* 18/01/2021
*/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
        border: '1px solid black',
        borderRadius: 4,
        elevation: 3,
    },

    inputExemplo2: {
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        border: '1px solid black',
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

    textoHr: {
        width: 200,
    },

    botaoExemplo: {
        backgroundColor: 'black',
        marginTop: 5,
        paddingVertical: 12,
        width: 110,
        textAlign: 'center',
        borderRadius: 4,
        elevation: 3,
    },

    fonteExemplo: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
    },
});