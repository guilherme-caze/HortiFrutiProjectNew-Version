import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarrosselProdutos from '@/app/componentes/carrosselProdutos2';

export default function AtacadoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.replace('/favoritos')} style={styles.voltar}>
        <Image
          source={require('@/assets/images/voltar.png')}
          style={styles.imagemV}
        />
      </TouchableOpacity>

      {/* Agrupe imagem, título e descrição */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/AtacadoFruta.png')}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Atacado da Fruta</Text>
        <Text style={styles.descricao}>
          Bem-vindo ao Atacado das Frutas! Aqui você encontra frutas em grandes quantidades e com ótimo custo-benefício.
        </Text>
      </View>

      <View style={styles.produtosContainer}>
        <Text style={styles.subtitulo}>Produtos</Text>
        
        <CarrosselProdutos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  voltar: {
    marginBottom: 10,
    marginTop: -40,
  },
  // Novo estilo para o header
  headerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 16,
    elevation: 4, 
  },
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  imagemV: {
    borderRadius: 10,
    marginBottom: 10,
    width: 35,
    height: 35,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000', 
    marginBottom: 20,
  },
  produtosContainer: {
    marginTop: 10,
    marginBottom: 10, 
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
