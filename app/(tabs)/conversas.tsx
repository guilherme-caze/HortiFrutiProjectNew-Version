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

        <View style={styles.itemSimple}>
        <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.setaButton}>
            <Image
              source={require('../../assets/images/voltar.png')}
              style={styles.itemImageLarge}
            />
          </TouchableOpacity>
            <Text style={styles.itemTitleLarge}>Conversas</Text>
          <Image
            source={require('../../assets/images/conversaLaranja.png')}
            style={styles.itemImageLarge}
           />
        </View>

        {/* conversas */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Banca da fruta</Text>
            <Text style={styles.itemSubtitle}>Seu pedido está a caminho</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* notificações */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Mercado bom tempeiro</Text>
            <Text style={styles.itemSubtitle}>Seu pedido está a caminho</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* conversa */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Hortifruti do jorge</Text>
            <Text style={styles.itemSubtitle}>Poderia avaliar o nosso atendimento</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* conversa */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Atacado da fruta</Text>
            <Text style={styles.itemSubtitle}>O pagamento será no dinheiro?</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* conversa */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>(motoboi) Elias</Text>
            <Text style={styles.itemSubtitle}>Olá, cheguei com seu pedido!</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* conversa */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>(motoboi) Alfredo</Text>
            <Text style={styles.itemSubtitle}>Obrigado pela gorjeta</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
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
  },
  itemSimple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#fff',
  },
  itemImageLarge: {
    width: 50,
    height: 50,
  },
  itemTitleLarge: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
    color: '#FFA500',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 40,
    height: 40,
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
