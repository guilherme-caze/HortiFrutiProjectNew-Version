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

        {/* Cabeçalho com botão voltar e título */}
        <View style={styles.itemSimple}>
        <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.setaButton}>
            <Image
              source={require('../../assets/images/voltar.png')}
              style={styles.itemImageLarge}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImageLarge}
          />
          <Text style={styles.itemTitleLarge}>Ajuda</Text>
        </View>

        {/* Caso 1 */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Seu pedido não foi entregue</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Caso 2 */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Pedido errado</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Caso 3 */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Pedido "alterado"</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Caso 4 */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Não consigo falar com a loja</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Caso 5 */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/images/ajuda.png')}
            style={styles.itemImage}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>Pedido de reembolso</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Seta pressionada')} style={styles.setaButton}>
            <Feather name="chevron-right" size={28} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Barra inferior */}
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
    margin: 16,
    backgroundColor: '#fff',
  },
  itemImageLarge: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemTitleLarge: {
    fontSize: 30,
    fontWeight: '600',
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
    width: 50,
    height: 50,
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
