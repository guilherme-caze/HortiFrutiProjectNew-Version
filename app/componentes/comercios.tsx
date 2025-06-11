import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const produtos = [
  {
    id: '1',
    nome: 'Atacado das Frutas',
    imagem: require('../../assets/images/AtacadoFruta.png'),
  },
  {
    id: '2',
    nome: 'HortiFruti seu Zé',
    imagem: require('../../assets/images/HortiFrutiZe.png'),
  },
];

export default function Cards() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.lista}
      scrollEnabled={false} //
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.imagem} style={styles.imagem} />
          <Text style={styles.nome}>{item.nome}</Text>
          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Viisitar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
    paddingBottom: 180,
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
});
