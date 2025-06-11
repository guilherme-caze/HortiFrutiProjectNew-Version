import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/cadeado.png')}
        style={styles.cadeado}
      />
      <Text style={styles.title}>Redefinir senha!</Text>

      <Text style={styles.texto1}>Informe um email e enviaremos um link para 
      a recuperação da senha.</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" placeholder="Digite seu email" />
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
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
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
  }  
});
