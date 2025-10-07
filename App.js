import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TextButton from './Compnents/TwxtButton';

export default function App() {

const [conteo, setConteo] = useState(0)

const Contar= () => setConteo (conteo + 1);
const Reiniciar= () => setConteo(0);

  return (
    <View 
     style={styles.container}>
       <Text
       style={styles.conteostyle}>  Conteo: </Text>
      <View style={styles.conteoConteiner}>

        <Text style={styles.conteoText}> {conteo}  </Text>

      </View>
    
    <View style={styles.controlConteiner}>
    

    <TextButton title = 'Contar' onTab={Contar}/>
    <TextButton title = 'Reiniciar'onTab={Reiniciar}/> 
    
    </View>

       <StatusBar style="auto" />

     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    marginVertical: 40,
    marginHorizontal: 16, 
  },

     conteoConteiner:{
      flex: 0,
       marginVertical: 48,
       borderColor: '#302f2f',
       borderWidth: 2,
       alignItems: 'center',
       padding: 26,
       backgroundColor: 'orange',
    } , 

    conteostyle: {
      flex:0, 
     fontSize: 45,
     backgroundColor:'white',
   },
   conteoText:{
    fontSize: 48,
    color: 'Black'
   },
   controlConteiner:{
    flex: 0,
    backgroundColor: 'Green',
    flexDirection: 'row',
    justifyContent:'space-evenly',

   },
   ButtonStyle:{
   backgroundColor:"green"

   }



});
