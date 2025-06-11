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
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function CadastroScreen() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [estado, setEstado] = useState('');

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
        <View style={styles.card}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <Image
              source={require('../../assets/images/seta.png')}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Cadastrar</Text>

          <View style={styles.possuiConta}>
            <Text style={styles.texto1}>já possuí uma conta?</Text>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={styles.entrar}>entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data de nascimento</Text>
            <RNView style={styles.inputIconContainer}>
              <TextInput
                style={styles.inputWithIcon}
                value={dataNascimento}
                onChangeText={(text) => setDataNascimento(formatarData(text))}
                keyboardType="numeric"
                maxLength={10}
                placeholder="DD/MM/AAAA"
              />
              <FontAwesome name="calendar" size={22} color="#999" style={styles.icon} />
            </RNView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número de telefone</Text>
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={(text) => setTelefone(formatarTelefone(text))}
              keyboardType="phone-pad"
              maxLength={15}
              placeholder="(XX) XXXXX-XXXX"
            />
          </View>

          {/* NOVO CAMPO DE ESTADO */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Estado</Text>
            <RNView style={styles.pickerContainer}>
              <Picker
                selectedValue={estado}
                onValueChange={(itemValue) => setEstado(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione um estado" value="" />
                <Picker.Item label="Acre (AC)" value="AC" />
                <Picker.Item label="Alagoas (AL)" value="AL" />
                <Picker.Item label="Amapá (AP)" value="AP" />
                <Picker.Item label="Amazonas (AM)" value="AM" />
                <Picker.Item label="Bahia (BA)" value="BA" />
                <Picker.Item label="Ceará (CE)" value="CE" />
                <Picker.Item label="Distrito Federal (DF)" value="DF" />
                <Picker.Item label="Espírito Santo (ES)" value="ES" />
                <Picker.Item label="Goiás (GO)" value="GO" />
                <Picker.Item label="Maranhão (MA)" value="MA" />
                <Picker.Item label="Mato Grosso (MT)" value="MT" />
                <Picker.Item label="Mato Grosso do Sul (MS)" value="MS" />
                <Picker.Item label="Minas Gerais (MG)" value="MG" />
                <Picker.Item label="Pará (PA)" value="PA" />
                <Picker.Item label="Paraíba (PB)" value="PB" />
                <Picker.Item label="Paraná (PR)" value="PR" />
                <Picker.Item label="Pernambuco (PE)" value="PE" />
                <Picker.Item label="Piauí (PI)" value="PI" />
                <Picker.Item label="Rio de Janeiro (RJ)" value="RJ" />
                <Picker.Item label="Rio Grande do Norte (RN)" value="RN" />
                <Picker.Item label="Rio Grande do Sul (RS)" value="RS" />
                <Picker.Item label="Rondônia (RO)" value="RO" />
                <Picker.Item label="Roraima (RR)" value="RR" />
                <Picker.Item label="Santa Catarina (SC)" value="SC" />
                <Picker.Item label="São Paulo (SP)" value="SP" />
                <Picker.Item label="Sergipe (SE)" value="SE" />
                <Picker.Item label="Tocantins (TO)" value="TO" />
              </Picker>
            </RNView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endereço</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <RNView style={styles.senhaContainer}>
              <TextInput
                style={styles.inputSenha}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!mostrarSenha}
                placeholder="Digite sua senha"
              />
              <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Text style={styles.toggleSenha}>{mostrarSenha ? '🙈' : '🙉'}</Text>
              </TouchableOpacity>
            </RNView>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
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
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
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