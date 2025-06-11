import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function GoogleLoginScreen() {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Simulação de autenticação
  function autenticar() {
    if (!senha) {
      setErro('Digite a senha.');
      return;
    }
    // Aqui você pode integrar com backend ou autenticação Google real
    if (senha === '123456') {
      setErro('');
      router.push('/menu');
    } else {
      setErro('Senha incorreta.');
    }
  }

  function recuperarSenha() {
    Alert.alert('Recuperação de senha', 'Função de recuperação de senha não implementada.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Google</Text>
      <Text style={styles.greeting}>Olá, Usuário</Text>

      <View style={styles.emailRow}>
        <Image
          source={require('../../assets/images/GoogleIcon.png')}
          style={styles.userIcon}
        />
        <Text style={styles.emailText}>user.exemple@gmail.com</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        placeholderTextColor="#777"
        value={senha}
        onChangeText={setSenha}
        accessibilityLabel="Campo de senha"
        autoCapitalize="none"
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.nextButton} onPress={autenticar} activeOpacity={0.8}>
        <Text style={styles.nextText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={recuperarSenha} accessibilityRole="button">
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 30,
  },
  logo: {
    fontSize: 26,
    color: '#4285F4',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  greeting: {
    fontSize: 22,
    marginBottom: 10,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  emailText: {
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  erro: {
    color: '#d32f2f',
    marginBottom: 10,
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#1a73e8',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgot: {
    marginTop: 20,
    color: '#1a73e8',
    textAlign: 'center',
  },
});