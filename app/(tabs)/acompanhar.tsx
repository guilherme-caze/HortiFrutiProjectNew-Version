import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  View as RNView,
} from 'react-native';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CadastroScreen() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [telefone, setTelefone] = useState('');

  const router = useRouter();

  const handleCadastro = () => {
    Alert.alert('Cadastro realizado com sucesso!');
  };

  const formatarData = (texto: string) => {
    const numeros = texto.replace(/\D/g, '');
    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 4) return `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
    return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}/${numeros.slice(4, 8)}`;
  };

  const formatarTelefone = (texto: string) => {
    const numeros = texto.replace(/\D/g, '');
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 10) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/CenouraLogo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.card}>  
        </View>

        <View style={styles.textContainer}>
                        <Text style={styles.texto}>• Pedido efetuado</Text>
                        <Text style={styles.texto}>• pedido pronto</Text>
                        <Text style={styles.texto}>• Coleta realizada</Text>
                        <Text style={styles.texto}>• Entregador a caminho</Text>
                        <Text style={styles.texto}>• Entrga estimada 8 minutos</Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/menu')}>
                <Text style={styles.voltar}>Voltar para o menu</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    borderRadius: 12,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    height: '50%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
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
    textAlign: 'center',
  },
});
