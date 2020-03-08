
import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {

    render() {
        return (
            <View>
          <TextInput style={styles.textinput} placeholder='Titre du film'/>
            <Button style={styles.textinput}  title='Rechercher' onPress={() => {}}/>
          </View>
         
        )
    }
}
const styles = StyleSheet.create({
    textinput: {
        marginTop: 150,
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })
export default Search