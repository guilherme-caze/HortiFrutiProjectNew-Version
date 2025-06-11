import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CarrinhoItemCard({
  produto,
  quantidade,
  onIncrementar,
  onDecrementar,
  onRemover,
  selecionado,
  onSelecionar,
}: any) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={onSelecionar} style={styles.check}>
          <Icon name="check-circle" size={24} color={selecionado ? "#4BD37B" : "#ccc"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemover}>
          <Icon name="trash" size={22} color="#ED841C" />
        </TouchableOpacity>
      </View>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>
        R${produto.preco.toFixed(2)} <Text style={{ fontSize: 12 }}>/kg</Text>
      </Text>
      <View style={styles.quantidadeBox}>
        <TouchableOpacity onPress={onDecrementar} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtdText}>{quantidade}</Text>
        <TouchableOpacity onPress={onIncrementar} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    elevation: 4,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  headerRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  check: { },
  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 6,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  preco: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  quantidadeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ED841C',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
  },
  qtdBtn: { paddingHorizontal: 8 },
  qtdBtnText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  qtdText: { color: 'white', fontWeight: 'bold', fontSize: 16, marginHorizontal: 8 },
});