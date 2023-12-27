import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput} from 'react-native-paper';

const letras = [
 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P','D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

class App extends Component {
constructor(props) {
  super(props);
  this.state={
    DNI:'',
    letra:'',
  }
}
 
calculoLetra = () => { 
  const DNI=this.state.DNI;
  const numDni=parseInt(DNI,10);
  const posLetra=numDni%23;
  const letraD=letras[posLetra];
  this.setState({letra:letraD})
};

  render() {
    const{ DNI, letra }=this.state;

    return (
    <View style={styles.container}>
      <Text>Calculadora Nif</Text>
      
      <View style={styles.vistaInput}>
      <TextInput
      onChangeText={text=>this.setState({DNI: text})}
      value={this.state.DNI }
      style={styles.campoDni}
      placeholder='Introduce un numero'
      placeholderTextColor='blue'
      underlineColorAndroid='blue'
      keyboardType='numeric'
      maxLength={8}
      />
      
   </View>
      <Button title='Calcular letra' onPress={this.calculoLetra}/>
      <Text>Letra del Nif:{letra}</Text>
<TextInput
      value={this.state.letra }
      style={styles.campoLetra}
      placeholder='Letra'
      placeholderTextColor='red'
      underlineColorAndroid='red'
      editable={false}
      />



    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  textInput:{
    height:40,
    width:200,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:10,
  },
  vistaInput: {
    flexDirection: 'row',

  },
  campoDni: {
    fontSize: 20,
    width: 250,
    color: 'red',
  },
  campoLetra: {
    fontSize: 20,
    width: 80,
    color: 'green',
  },
 
});
export default App;
