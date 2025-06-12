import { StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Comercios from '@/app/componentes/comercios';
import BarraInferior from '@/app/componentes/barraInferior';
import { useFavoritos } from '@/app/componentes/FavoritosContext';
import { ProdutoCard } from '@/app/componentes/cards';
import { useCarrinho } from '../componentes/CarrinhoContext';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native';



export default function TabOneScreen() {
  const { favoritos } = useFavoritos();
  const { adicionarProduto } = useCarrinho();

  
  
  function handleAdicionar(item: any) {
    adicionarProduto({
      id: item.id,
      nome: item.nome,
      preco: item.preco,
      imagem: item.imagem,
    });
    Alert.alert('Adicionado', `${item.nome} foi adicionado ao carrinho!`);
  }

  function handleFavoritar(id: string) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title1}>Comércios</Text>
        <Comercios />

        {/* Título fora do ScrollView */}
        <Text style={styles.title2}>Produto</Text>

        {/* Só os cards ficam dentro do ScrollView */}
        <ScrollView
          style={{ maxHeight: 300 }}
          contentContainerStyle={{ paddingBottom: 130 }}
        >
          {favoritos.length === 0 ? (
            <Text style={{ textAlign: 'center', color: '#888', marginTop: 10, marginBottom: 40 }}>
              Nenhum produto favoritado ainda.
            </Text>
          ) : (
            favoritos.map(item => (
              <ProdutoCard
                key={item.id}
                item={item}
                onAdicionar={() => handleAdicionar(item)}
                carrossel={false}
              />
            ))
          )}
        </ScrollView>

        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: -35
  },
  title1: {
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'orange',
    padding: 10,
    textAlign: 'center',
  },
  title2: {
    fontSize: 40,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'orange',
    padding: 0,
    textAlign: 'center',
    marginTop: 16, // ou 0 para colar nos cards de comércio
  },
  botao: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
