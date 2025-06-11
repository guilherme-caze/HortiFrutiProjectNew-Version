import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraInferior from '@/app/componentes/barraInferior';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        {/* nome de usuário */}
        <View style={styles.itemSimple}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImageLarge}
          />
          <Text style={styles.itemTitleLarge}>Nome de usuário</Text>
        </View>

        {/* conversas */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/conversa.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Conversas</Text>
            <Text style={styles.itemSubtitle}>Meu histórico de conversas</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/conversas')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* notificações */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/notificacoes.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Notificações</Text>
            <Text style={styles.itemSubtitle}>Minha central de notificações</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/notificacoes')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* dados da conta */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/dados.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Dados da conta</Text>
            <Text style={styles.itemSubtitle}>Minhas informações da conta</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/dadosUsuario')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* pagamentos */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/pagamento.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Pagamentos</Text>
            <Text style={styles.itemSubtitle}>Meus saldos e cartões</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/saldo')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* favoritos */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/coracaoBlack.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Favoritos</Text>
            <Text style={styles.itemSubtitle}>Meus favoritos</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* endereços */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/enderecoBlack.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Endereços</Text>
            <Text style={styles.itemSubtitle}>Meus endereços de entrega</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/enderecos')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* ajuda */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Ajuda</Text>
            <Text style={styles.itemSubtitle}>Precisa de suporte?</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/ajuda')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* barra inferior */}
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -35, //Arrumando o buraco
  },
  itemSimple: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#fff',
  },
  itemImageLarge: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  itemTitleLarge: {
    fontSize: 20,
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 32,
    height: 32,
    marginRight: 10,
    resizeMode: 'contain',
  },
  itemTextContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemSubtitle: {
    fontSize: 16,
  },
  setaButton: {
    padding: 8,
  },
});
