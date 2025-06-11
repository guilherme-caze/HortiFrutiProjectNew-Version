{/*Tela de login*/}

import { ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      {/*Parte superior*/}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/CenouraLogo.png')}
          style={styles.image}
        />
        <Text style={styles.title1}>Faça login na</Text>
        <Text style={styles.title1}>sua conta</Text>
        <Text style={styles.title2}>Digite seu e-mail e senha para fazer login</Text>
      </View>

      {/*Parte branca do Login (Card)*/}
      <View style={styles.card}>
        {/* Botão do Google */}
        <TouchableOpacity style={styles.BotaoGoogle} onPress={() => router.push('/GoogleLoginScreen')}>
          <Text style={styles.BotaoGoogleTexto}>Entrar com Google</Text>
          <Image
            source={require('../../assets/images/GoogleIcon.png')}
            style={styles.GoogleIcon}
          />
        </TouchableOpacity>

      <Text style={styles.title3}>Login</Text>
      <Text style={styles.title4}>
          Não possui uma conta?
        <Link href="/two">
        <Text style={styles.link}> Criar</Text>
        </Link>
      </Text>


        {/*Campos de login*/}
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        {/*Botão Entrar*/}
        <TouchableOpacity style={styles.BotaoLogin} onPress={() => router.push('/menu')}>
          <Text style={styles.BotaoLoginText}>Entrar</Text>
        </TouchableOpacity>

        {/*Recuperação de senha*/}
        <Text style={styles.EsqueceuSenha}>
          Esqueceu a senha?{' '}
          <Link href="/recuperarSenha">
          <Text style={styles.link}>Clique aqui.</Text>
          </Link>
        </Text>

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
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#97C447',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  image: {
    width: 69,
    height: 69,
    marginBottom: 10,
  },
  title1: {
    fontSize: 32,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -30,
    padding: 20,
    borderRadius: 15,
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  BotaoGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#8BC34A',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  BotaoGoogleTexto: {
    fontSize: 18,
    color: '#97C447',
    marginRight: 10,
  },
  GoogleIcon: {
    width: 24,
    height: 24,
  },
  title3: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  title4: {
    fontSize: 12,
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  BotaoLogin: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFA500',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  BotaoLoginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  EsqueceuSenha: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  link: {
    color: '#049A2A',
    fontWeight: 'bold',
  },
});
