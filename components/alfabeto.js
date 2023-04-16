import React from 'react'
import { StyleSheet, Button, Alert, Text, View } from 'react-native'

const App = () => {
    return (
        <>
        <Text style={styles.title}>ATIVIDADE 5 - ALFABETO</Text>
        <View style={styles.container}> 
            <View style={styles.conteudo}>
                <View>
                    <>
                    <Button title='A' onPress={() => Alert.alert('Letra: a - A (á)')} />
                    </>
                    <>
                    <Button title='B' onPress={() => Alert.alert('Letra: b - B (bê)')} />
                    </>
                    <>
                    <Button title='C' onPress={() => Alert.alert('Letra: c - C (cê)')} />
                    </>
                    <>
                    <Button title='D' onPress={() => Alert.alert('Letra: d - D (dê)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='E' onPress={() => Alert.alert('Letra: e - E (é)')} />
                    </>
                    <>
                    <Button title='F' onPress={() => Alert.alert('Letra: f - F (éfe)')} />
                    </>
                    <>
                    <Button title='G' onPress={() => Alert.alert('Letra: g - G (gê)')} />
                    </>
                    <>
                    <Button title='H' onPress={() => Alert.alert('Letra: h - H (ágá)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='I' onPress={() => Alert.alert('Letra: i - I (i)')} />
                    </>
                    <>
                    <Button title='J' onPress={() => Alert.alert('Letra: j - J (jóta)')} />
                    </>
                    <>
                    <Button title='K' onPress={() => Alert.alert('Letra: k - K (cá)')} />
                    </>
                    <>
                    <Button title='L' onPress={() => Alert.alert('Letra: l - L (éle)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='M' onPress={() => Alert.alert('Letra: m - M (ême)')} />
                    </>
                    <>
                    <Button title='N' onPress={() => Alert.alert('Letra: n - N (êne)')} />
                    </>
                    <>
                    <Button title='O' onPress={() => Alert.alert('Letra: o - O (ó)')} />
                    </>
                    <>
                    <Button title='P' onPress={() => Alert.alert('Letra: p - P (pê)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='Q' onPress={() => Alert.alert('Letra: q - Q (quê)')} />
                    </>
                    <>
                    <Button title='R' onPress={() => Alert.alert('Letra: r - R (érre)')} />
                    </>
                    <>
                    <Button title='S' onPress={() => Alert.alert('Letra: s - S (ésse)')} />
                    </>
                    <>
                    <Button title='T' onPress={() => Alert.alert('Letra: t - T (tê)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='U' onPress={() => Alert.alert('Letra: u - U (u)')} />
                    </>
                    <>
                    <Button title='V' onPress={() => Alert.alert('Letra: v - V (vê)')} />
                    </>
                    <>
                    <Button title='W' onPress={() => Alert.alert('Letra: w - W (dáblio)')} />
                    </>
                    <>
                    <Button title='X' onPress={() => Alert.alert('Letra: x - X (xis)')} />
                    </>
                </View>
                <View>
                    <>
                    <Button title='Y' onPress={() => Alert.alert('y - Y (ípsilon)')} />
                    </>
                    <>
                    <Button title='Z' onPress={() => Alert.alert('z - Z (zê)')} />
                    </>
                    </View>
            </View>
        </View>
    </>
    )
}
    const styles = StyleSheet.create({
        title:{
          textAlign: 'center',
          marginVertical: 100,
          fontSize: 20,
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            maxHeight: 300,
        },
        conteudo: {
            flex: 1,
            flexDirection: 'row',
            width: 250,
            maxHeight: 200,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 15,
            padding: 10,
        },
      });

export default App