import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  
  const buttons = [ 'LIMPAR', 'DEL', '0','1','2','3','4','5','6','7','8','9','+', '-', '/', 'X', '=']

  const [numeroAtual, setNumeroAtual] = useState ("")
  const [ultimoNumero, setUltimoNumero] = useState("")


  function calculadora() {
    const splitNumero = numeroAtual.split(' ')
    const primeiroNumero = parseFloat(splitNumero[0])
    const ultimoNumero = parseFloat(splitNumero[2])
    const operadores = splitNumero[1]
    const buttonPressed = buttons

 


    switch (operadores){

     case '+':
        setNumeroAtual((primeiroNumero + ultimoNumero).toString())
        return
      case '-':
        setNumeroAtual((primeiroNumero - ultimoNumero).toString())
        return
      case 'X':
        setNumeroAtual((primeiroNumero * ultimoNumero).toString())
        return
      case '/':
        setNumeroAtual((primeiroNumero / ultimoNumero).toString())
        return
  }
  }

    function entrada(buttonPressed: string) {
      if (buttonPressed === '+' ||
         buttonPressed === "-" ||
         buttonPressed === "X" ||
         buttonPressed === "/"){
        setNumeroAtual(numeroAtual + " " + buttonPressed + " ")
        return
      }


        switch (buttonPressed) {
          case 'DEL':
            setNumeroAtual(numeroAtual.substring(0, (numeroAtual.length - 1)))
            return
          case 'LIMPAR':
            setUltimoNumero("")
            setNumeroAtual("")
            return
          case '=':
            setUltimoNumero(numeroAtual + " = ")
            calculadora()
            return
        }

        setNumeroAtual(numeroAtual + buttonPressed)
    }


  return (
    <View style={styles.container}>

      <View style={styles.resultado}>
        <Text style={styles.textDigitado}>{ultimoNumero}</Text>
        <Text style={styles.resultadoText}>{numeroAtual}</Text>
      </View>

      <View style={styles.buttons}>

        {buttons.map((button) =>
          button === '=' ?
            <TouchableOpacity onPress={() => entrada(button)} key={button} style={[styles.button, { backgroundColor: '#006658' }]}>
              <Text style={[styles.textButton, { color: "black", fontSize: 30 }]}>{button}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => entrada(button)} key={button} style={styles.button}>
              <Text style={[styles.textButton, { color: typeof (button) === 'number' ? 'white' : 'black' }]}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultado: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  resultadoText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right"
  },
  textDigitado: {
    color: "gray",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#1b795c',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "green",
    fontSize: 20,
  }
});