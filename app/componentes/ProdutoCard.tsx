import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagem: any; 
};

type Props = {
  produto: Produto;
  onAdicionar: (produto: Produto) => void;
};

export default function ProdutoCard({ produto, onAdicionar }: Props) {
  return (
    <View style={styles.card}>
      <Image source={produto.imagem} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => onAdicionar(produto)}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#f5f5f5', borderRadius: 8, padding: 10 },
  imagem: { width: 60, height: 60, borderRadius: 8 },
  info: { marginLeft: 10, flex: 1, justifyContent: 'center' },
  nome: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 14, color: '#ED841C', marginVertical: 4 },
  botao: { backgroundColor: '#97C447', borderRadius: 6, padding: 6, alignItems: 'center' },
  botaoTexto: { color: 'white', fontWeight: 'bold' },
});