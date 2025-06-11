import { FlatList, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ProdutoCard } from './cards';

const produtos = [
  { id: '1', nome: 'Maçã', preco: 'R$ 4,99/kg', imagem: require('../../assets/images/Maçãs.png') },
  { id: '2', nome: 'Banana', preco: 'R$ 3,49/kg', imagem: require('../../assets/images/bananas.jpg') },
  { id: '3', nome: 'Abacaxi', preco: 'R$ 6,99/un', imagem: require('../../assets/images/Abacaxi.png') },
  { id: '4', nome: 'Pera', preco: 'R$ 7,99/kg', imagem: require('../../assets/images/Pera.png') },
  { id: '5', nome: 'Uva', preco: 'R$ 12,99/kg', imagem: require('../../assets/images/Uva.png') },
];

const styles = StyleSheet.create({
  carrosselLista: {
    paddingHorizontal: 10,
    paddingBottom: 40, 
  },
});

export default function CarrosselProdutos() {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  function handleAdicionar(item: any) {
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
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      contentContainerStyle={styles.carrosselLista}
      renderItem={({ item }) => (
        <ProdutoCard
          item={item}
          onAdicionar={handleAdicionar}
          favorito={favoritos.includes(item.id)}
          onFavoritar={handleFavoritar}
          carrossel={true}
        />
      )}
    />
  );
}
