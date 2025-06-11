import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import BarraInferior from '@/app/componentes/barraInferior';
import CarrinhoItemCard from '@/app/componentes/CarrinhoItemCard';

const produtosExemplo = [ //Teste para os produtos do carrinho, a ideia é usar os do menu quando a pessoa clicar em adicionar
  {
    id: '1',
    nome: 'Abacaxi',
    preco: 15.5,
    imagem: require('../../assets/images/Abacaxi.png'),
  },
  {
    id: '2',
    nome: 'Pera',
    preco: 5.9,
    imagem: require('../../assets/images/Pera.png'),
  },
  {
    id: '3',
    nome: 'Maçã',
    preco: 3.9,
    imagem: require('../../assets/images/Maçãs.png'),
  },
];

export default function ModalScreen() {
  const [carrinho, setCarrinho] = useState(produtosExemplo.map(p => ({
    ...p,
    quantidade: 1,
    selecionado: true,
  })));

  const incrementar = (id: string) => {
    setCarrinho(carrinho.map(item =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    ));
  };

  const decrementar = (id: string) => {
    setCarrinho(carrinho.map(item =>
      item.id === id && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
    ));
  };

  const remover = (id: string) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const selecionar = (id: string) => {
    setCarrinho(carrinho.map(item =>
      item.id === id ? { ...item, selecionado: !item.selecionado } : item
    ));
  };

  const desmarcarTodos = () => {
    setCarrinho(carrinho.map(item => ({ ...item, selecionado: false })));
  };

  const subtotal = carrinho
    .filter(item => item.selecionado)
    .reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const itensSelecionados = carrinho.filter(item => item.selecionado).length;

  return (
    <View style={[styles.container, { paddingBottom: 45 }]}>
      <View style={styles.subtotalContainer}>
        <Text style={styles.title1}>Subtotal</Text>
        <Text style={styles.title2}>R$ {subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.FecharPedidoBotao}>
        <Text style={styles.FecharPedidoBotaoTexto}>
          Fechar Pedido ({itensSelecionados} itens)
        </Text>
      </View>
      <View style={styles.separator} lightColor="#049A2A" darkColor="#4BD37B" />

      <TouchableOpacity onPress={desmarcarTodos}>
        <Text style={styles.title3}>Desmarcar todos os itens</Text>
      </TouchableOpacity>

      <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CarrinhoItemCard
            produto={item}
            quantidade={item.quantidade}
            selecionado={item.selecionado}
            onIncrementar={() => incrementar(item.id)}
            onDecrementar={() => decrementar(item.id)}
            onRemover={() => remover(item.id)}
            onSelecionar={() => selecionar(item.id)}
          />
        )}
        style={{ marginTop: 10 }}
      />

      <BarraInferior />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  subtotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  
  title1: {
    fontSize: 32,
    marginLeft: 30,
    marginTop: 25,
    color: '#ED841C',
    fontWeight: 'bold',
    fontFamily: 'inter',
  },
  title2: {
    fontSize: 20,
    marginTop: 25,
    color: 'black',
    fontWeight: 'regular',
    fontFamily: 'inter',
  },
  title3: {
    fontSize: 14,
    marginLeft: 30,
    color: '#049A2A',
    fontWeight: 'regular',
    fontFamily: 'inter',
    textDecorationLine: 'underline',
  },
  separator: {
    marginVertical: 10,
    alignItems: 'center',
    marginLeft: 10,
    height: 2,
    width: '95%',
  },
  FecharPedidoBotao: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ED841C',
    color: 'white',
    backgroundColor: '#ED841C',
    borderWidth: 1.5,
    marginLeft: 30,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '85%',
    },
    FecharPedidoBotaoTexto: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'medium',
    },
    barra: {
      left: 0,
      right: 0,
      bottom: 0,
      height: 0, 
    },
});
