import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraInferior from '@/app/componentes/barraInferior';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Título com ícone */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.setaButton}>
            <Image
              source={require('../../assets/images/voltar.png')}
              style={styles.itemImageLarge}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Meus dados</Text>
          <Image
            source={require('../../assets/images/dadosLaranja.png')}
            style={styles.headerIcon}
          />
        </View>

        {/* Dados do usuário */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileItem}><Text style={styles.label}>Nome:</Text> Alberto</Text>
            <Text style={styles.profileItem}><Text style={styles.label}>Data de nasc:</Text> 02/01/1988</Text>
            <Text style={styles.profileItem}><Text style={styles.label}>Gênero:</Text> Masculino</Text>
            <Text style={styles.profileItem}><Text style={styles.label}>Email:</Text> albertonobre45@gmail.com</Text>
            <Text style={styles.profileItem}><Text style={styles.label}>Telefone:</Text> (61) 4002-8922</Text>
            <Text style={styles.profileItem}><Text style={styles.label}>Banco:</Text> Banco do Brasil</Text>
          </View>
        </View>

        {/* Idioma */}
        <View style={styles.itemSimple}>
          <Image
            source={require('../../assets/images/idioma.png')}
            style={styles.itemImageLarge}
          />
          <Text style={styles.profileItem}><Text style={styles.label}>Idioma:</Text> Português</Text>
        </View>

        {/* Segurança */}
        <View style={styles.itemSimple}>
          <Image
            source={require('../../assets/images/seguranca.png')}
            style={styles.itemImageLarge}
          />
          <Text style={styles.profileItem}>Segurança</Text>
        </View>

        {/* Sair */}
        <View style={styles.itemSimple}>
          <Image
            source={require('../../assets/images/sair.png')}
            style={styles.itemImageLarge}
          />
          <Text style={styles.profileItem}>Sair</Text>
        </View>

        {/* Botão Editar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Editar pressionado')}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        {/* Barra inferior */}
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500',
    marginRight: 10,
  },
  headerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 4,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 30,
  },
  profileText: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profileItem: {
    fontSize: 16,
    marginBottom: 6,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: '600',
  },
  itemSimple: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 4,
    padding: 10,
    borderRadius: 10,
  },
  itemImageLarge: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  setaButton: {
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
