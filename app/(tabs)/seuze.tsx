import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarrosselProdutos from '@/app/componentes/carrosselProdutos3';

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


      <Image
        source={require('@/assets/images/HortiFrutiZe.png')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Hortifruti Seu Zé</Text>
      <Text style={styles.descricao}>
        Aqui no Hortifruti do Seu Zé, oferecemos frutas, legumes e verduras fresquinhos, direto da roça para sua mesa. Com um atendimento acolhedor e produtos de qualidade, garantimos sabor e frescor em cada escolha. Venha conferir!
      </Text>

      <View style={styles.produtosContainer}>
        <Text style={styles.subtitulo}>Produtos</Text>
        
        {/* Cards de produtos do Atacado aqui */}
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
    marginTop: -50,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  produtosContainer: {
    marginTop: 10,
    marginBottom: 10, //aquiiiiiii
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
