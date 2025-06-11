import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from '@/components/Themed';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/CenouraLogo.png')}
        style={styles.cenoura}
      />
      <Text style={styles.title}>Cadastro realizado com sucesso!</Text>

      
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.voltar}>Ir para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#97C447',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  cenoura: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  voltar: {
    color: 'black',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
