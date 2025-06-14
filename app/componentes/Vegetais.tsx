import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useCarrinho } from '../componentes/CarrinhoContext';
import { useFavoritos } from '@/app/componentes/FavoritosContext';

const produtos = [
  { id: '1011', nome: 'Abóbora', preco: 8.99, unidade: 'kg', imagem: require('../../assets/images/Abobora.png') },
  { id: '2022', nome: 'Brócolis', preco: 2.99, unidade: 'kg', imagem: require('../../assets/images/Brocolis.png') },
  { id: '50', nome: 'Tomate', preco: 4.99, unidade: 'kg', imagem: require('../../assets/images/Tomate.png') },
  { id: '4044', nome: 'Beterraba', preco: 3.50, unidade: 'kg', imagem: require('../../assets/images/Beterraba.png') },
  { id: '5055', nome: 'Cebola', preco: 7.99, unidade: 'kg', imagem: require('../../assets/images/Cebola.png') },
  { id: '6066', nome: 'Mandioca', preco: 10.99, unidade: 'kg', imagem: require('../../assets/images/Mandioca.png') },
];

// Componente separado para o Card
function ProdutoCard({ item, onAdicionar }) {
  const { adicionarFavorito, removerFavorito, isFavorito } = useFavoritos();
  const favorito = isFavorito(item.id);

  function handleFavoritar() {
    if (favorito) removerFavorito(item.id);
    else adicionarFavorito(item);
  }

  return (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{`R$ ${item.preco.toFixed(2)}/${item.unidade}`}</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => onAdicionar(item)}
          activeOpacity={0.7}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.coracao}
          onPress={handleFavoritar}
          activeOpacity={0.7}
        >
          <FontAwesome
            name={favorito ? 'heart' : 'heart-o'}
            size={25}
            color={favorito ? '#FF6347' : '#97C447'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Vegetais() {
  const [favoritos, setFavoritos] = useState<string[]>([]);
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
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <ProdutoCard
          item={item}
          onAdicionar={handleAdicionar}
          favorito={favoritos.includes(item.id)}
          onFavoritar={handleFavoritar}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    elevation: 4,
    justifyContent: 'space-between',
  },
  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  preco: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  coracao: {
    marginLeft: 10,
  },
});