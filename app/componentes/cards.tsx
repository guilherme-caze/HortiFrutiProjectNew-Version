import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import React from 'react';
import { useCarrinho } from './CarrinhoContext'; 
import { useFavoritos } from '@/app/componentes/FavoritosContext';

// top 10 códigos dos animes

const produtos = [
  {
    id: '1',
    nome: 'Maçã',
    preco: 'R$ 4,99/kg',
    imagem: require('../../assets/images/Maçãs.png'),
  },
  {
    id: '2',
    nome: 'Banana',
    preco: 'R$ 3,49/kg',
    imagem: require('../../assets/images/bananas.jpg'),
  },
  {
    id: '3',
    nome: 'Abacaxi',
    preco: 'R$ 6,99/un',
    imagem: require('../../assets/images/Abacaxi.png'),
  },
  {
    id: '4',
    nome: 'Pera',
    preco: 'R$ 5,99/kg',
    imagem: require('../../assets/images/Pera.png'),
  },
  {
    id: '5',
    nome: 'Melancia',
    preco: 'R$ 9,99/un',
    imagem: require('../../assets/images/Melancia.png'),
  },
  {
    id: '6',
    nome: 'Laranja',
    preco: 'R$ 2,99/kg',
    imagem: require('../../assets/images/Laranja.png'),
  },
];

// Componente separado para o Card
export function ProdutoCard({ item, onAdicionar, carrossel, customStyles }) {
  const { adicionarFavorito, removerFavorito, isFavorito } = useFavoritos();

  const favorito = isFavorito(item.id);

  function handleFavoritar() {
    if (favorito) removerFavorito(item.id);
    else adicionarFavorito(item);
  }

  // Use os estilos do customStyles se vierem por prop, senão use os padrões
  const s = customStyles || styles;

  return (
    <View style={carrossel ? s.carrosselCard : s.card}>
      <Image
        source={item.imagem}
        style={carrossel ? s.carrosselImagem : s.imagem}
        resizeMode="contain"
      />
      <Text style={carrossel ? s.carrosselNome : s.nome}>{item.nome}</Text>
      <Text style={carrossel ? s.carrosselPreco : s.preco}>
        {typeof item.preco === 'number'
          ? `R$ ${item.preco.toFixed(2)}/${item.unidade ?? ''}`
          : item.preco}
      </Text>
      <View style={carrossel ? s.carrosselBotoesContainer : s.botoesContainer}>
        <TouchableOpacity
          style={carrossel ? s.carrosselBotao : s.botao}
          onPress={() => onAdicionar(item)}
        >
          <Text style={carrossel ? s.carrosselBotaoTexto : s.botaoTexto}>
            Adicionar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritar}
          style={carrossel ? s.carrosselCoracao : s.coracao}
        >
          <FontAwesome
            name={favorito ? 'heart' : 'heart-o'}
            size={20}
            color={favorito ? '#FF0000' : '#888'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Cards() {
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const { adicionarProduto } = useCarrinho();

  function handleAdicionar(item: any) {
    // Aqui converta o preço para número, se necessário
    let preco = item.preco;
    if (typeof preco === 'string') {
      preco = Number(preco.replace(/[^\d,]/g, '').replace(',', '.'));
    }
    adicionarProduto({
      id: item.id,
      nome: item.nome,
      preco,
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
  carrosselCard: {
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
  carrosselImagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  carrosselNome: {
    marginTop: 2,
    fontSize: 16,
    marginBottom: -20,
  },
  preco: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  carrosselPreco: {
    fontSize: 18,
    color: '#444',
    marginTop: 4,
     marginBottom: -20,
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  carrosselBotoesContainer: {
    marginTop: 10,
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  carrosselBotao: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginRight: 12,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  carrosselBotaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  coracao: {
    marginLeft: 10,
  },
  carrosselCoracao: {
    marginLeft: 16,
  },
});