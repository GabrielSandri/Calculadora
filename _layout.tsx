import { useState } from "react";
import { View } from "react-native";

export default function App() {
  
  const buttons = [ 'LIMPAR', 'DEL', '0','1','2','3','4','5','6','7','8','9','+', '-', '%', '/', 'X', '=']
  const buttonPressed = buttons
  const [numeroAtual, setNumeroAtual] = useState ("")

  const [ultimoNumero, setUltimoNumero] = useState("")


  function calculadora() {
    const splitNumero = numeroAtual.split(' ')
    const primeiroNumero = parseFloat(splitNumero[0])
    const ultimoNumero = parseFloat(splitNumero[2])
    const operadores = splitNumero[1]
    

 


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

    function entrada(buttonPressed) {
      console.log (buttonPressed)
      if (buttonPressed === '+' ||
         buttonPressed === "-" ||
         buttonPressed === "X" ||
         buttonPressed === "/"){
        setNumeroAtual(numeroAtual + " " + buttonPressed + " ")
      }
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


  return (
    <View>
      


    </View>

  )

  
}
