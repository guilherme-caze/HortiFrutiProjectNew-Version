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
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [cpf, setCpf] = useState('');

  const router = useRouter();

  const handleCadastro = () => {
    Alert.alert('Compra realizada com sucesso!');
  };

  const formatarData = (texto: string) => {
    const numeros = texto.replace(/\D/g, '');
    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 4) return `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
    return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}`;
  };

  const formatarCpf = (texto: string) => {
    const numeros = texto.replace(/\D/g, '');
    if (numeros.length <= 3) return numeros;
    if (numeros.length <= 6) return `${numeros.slice(0, 3)}.${numeros.slice(3)}`;
    if (numeros.length <= 9) return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6)}`;
    return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6, 9)}-${numeros.slice(9, 11)}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>

          <TouchableOpacity onPress={() => router.push('/menu')}>
            <Image
              source={require('../../assets/images/seta.png')}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Pagamento</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número do cartão</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="0000 0000 0000 0000"
              maxLength={19}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data de validade</Text>
            <RNView style={styles.inputIconContainer}>
              <TextInput
                style={styles.inputWithIcon}
                value={validadeCartao}
                onChangeText={(text) => setValidadeCartao(formatarData(text))}
                keyboardType="numeric"
                maxLength={5}
                placeholder="MM/AA"
              />
              <FontAwesome name="calendar" size={22} color="#999" style={styles.icon} />
            </RNView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={(text) => setCpf(formatarCpf(text))}
              keyboardType="numeric"
              maxLength={14}
              placeholder="000.000.000-00"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              maxLength={4}
              placeholder="123"
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endereço</Text>
            <TextInput style={styles.input} placeholder="Rua Exemplo, 123" />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  possuiConta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 5,
    backgroundColor: '#fff',
  },
  texto1: {
    fontSize: 20,
  },
  entrar: {
    fontSize: 20,
    color: '#049A2A',
    textDecorationLine: 'none',
  },
  inputGroup: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 50,
  }, 
  inputWithIcon: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginLeft: 10,
  },  
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputSenha: {
    flex: 1,
    height: 50,
  },
  toggleSenha: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
