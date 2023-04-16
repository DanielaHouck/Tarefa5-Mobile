import React from 'react'
import { View, StyleSheet } from 'react-native'
import Botao from './components/alfabeto'

export default () => (

  <View style={style.App}>
    <Botao />
  </View>
)

const style = StyleSheet.create({
  App: {
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
})