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
      <Text style={styles.title}>Compra realizada com sucesso!!!</Text>

      <TouchableOpacity style={styles.BotaoLogin}>
                <Text style={styles.BotaoLoginText}>R$ 9,99</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
                <Text style={styles.texto}>• Coleta realizada</Text>
                <Text style={styles.texto}>• Entregador a caminho</Text>
      </View>

      <TouchableOpacity onPress={() => router.push('/acompanhar')}>
        <Text style={styles.voltar}>Acompanhar entrega</Text>
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
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  cenoura: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  BotaoLogin: {
    width: '50%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  BotaoLoginText: {
    color: '#FFA500',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },  
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  voltar: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
