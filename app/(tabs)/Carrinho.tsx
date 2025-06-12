import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import BarraInferior from '@/app/componentes/barraInferior';
import CarrinhoItemCard from '@/app/componentes/CarrinhoItemCard';
import { useCarrinho } from '../componentes/CarrinhoContext'; 
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const {
    carrinho,
    incrementar,
    decrementar,
    remover,
    selecionar,
    desmarcarTodos,
  } = useCarrinho();

  const router = useRouter();

  const subtotal = carrinho
    .filter(item => item.selecionado)
    .reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const itensSelecionados = carrinho.filter(item => item.selecionado).length;

  function handleFecharPedido() {
    if (carrinho.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione itens ao carrinho antes de fechar o pedido.');
      return;
    }
    if (!carrinho.some(item => item.selecionado)) {
      Alert.alert('Selecione um item', 'Selecione pelo menos um item para fechar o pedido.');
      return;
    }
    router.push('/pagamento');
  }

  return (
    <View style={[styles.container, { paddingBottom: 45 }]}>
      <View style={styles.subtotalContainer}>
        <Text style={styles.title1}>Subtotal</Text>
        <Text style={styles.title2}>R$ {subtotal.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.FecharPedidoBotao} onPress={handleFecharPedido}>
        <Text style={styles.FecharPedidoBotaoTexto}>
          Fechar Pedido ({itensSelecionados} itens)
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#049A2A" darkColor="#4BD37B" />

      <TouchableOpacity onPress={desmarcarTodos}>
        <Text style={styles.title3}>Desmarcar todos os itens</Text>
      </TouchableOpacity>

      {carrinho.length === 0 ? (
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Text style={{ fontSize: 20, color: '#049A2A', marginTop: 40, backgroundColor: 'white', textDecorationLine: 'underline', }}>
            O carrinho está vazio
          </Text>
        </View>
      ) : (
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
          style={{ marginBottom: 60 }}
        />
      )}

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
