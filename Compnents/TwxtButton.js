import { Pressable, View, Text, StyleSheet } from "react-native";

export default function  TextButton(props){

  function onTabHandler (){
        props.onTab()
  }

    return(
        <View>
            <Pressable onPress={onTabHandler}>
                <View style= {styles.buttonContainer}>
                    <Text style={styles.TextContainer}> {props.title} </Text>
                </View>
            </Pressable>
        </View>
    );

}
const styles = StyleSheet.create({
buttonContainer:{
    paddingvertical: 8, 
    paddingHorizontal:16,
  backgroundColor: 'green',
},

TextContainer:{
  color: 'white',
  fontSize: 20,

},

});