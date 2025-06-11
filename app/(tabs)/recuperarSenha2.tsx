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
        source={require('../../assets/images/cadeado.png')}
        style={styles.cadeado}
      />
      <Text style={styles.title}>Redefinir senha!</Text>

      <Text style={styles.texto1}>
        Insira a nova senha.
      </Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.inputSenha}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
            placeholder="Digite sua senha"
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Text style={styles.toggleSenha}>{mostrarSenha ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.BotaoRedefinir}>
        <Text style={styles.BotaoRedefinirText}>Redefinir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.voltar}>Tela inicial</Text>
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
  cadeado: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  texto1: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center'
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  inputSenha: {
    flex: 1,
    height: 50,
  },
  toggleSenha: {
    fontSize: 18,
    marginLeft: 10,
  },
  BotaoRedefinir: {
    backgroundColor: '#FFA500',
    height: 50,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  BotaoRedefinirText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltar: {
    color: 'black',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
