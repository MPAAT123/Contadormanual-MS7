import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [conteo, setconteo] useState


  return (
    <View 
     style={styles.container}>

       <Text
       style={styles.conteostyle}>
        Conteo: 
        
        </Text>
       
      <View style={styles.conteoConteiner}>

        <Text style={styles.conteoText}> 0 </Text>

      </View>
    
    <View>
      <Button title ="contar" onPress={}/>
      <Button title = "Reiniciar"/>
  
    </View>

       <StatusBar style="auto" />

     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14dbf1',
    marginVertical: 40,
    marginHorizontal: 16, 
  },

     conteoConteiner:{
      flex: 1,
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
     backgroundColor:'yellow',
   },
   conteoText:{
    fontSize: 48,
    color: 'red'
   },
   controlConteiner:{
    flex: 0,
    backgroundColor: 'Green',
    flexDirection: 'row',
    justifyContent:'space-evenly',

   }

});
