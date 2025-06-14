import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import TipoProduto from '@/app/componentes/tipoProduto';
import CarrosselPromocao from '@/app/componentes/carrosselPromocao';
import CarrosselProdutos from '@/app/componentes/carrosselProdutos';
import BarraInferior from '@/app/componentes/barraInferior';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <View style={styles.container}>
        {/* menu */}
        <TipoProduto />

        {/* Carrossel promocao */}
        <CarrosselPromocao />

        {/* texto */}
        <Text style={styles.title1}>Em destaque</Text>

        {/* carrossel */}
        <CarrosselProdutos />

        {/* barra inferior */}
        <BarraInferior />

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 0,
    },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title1: {
    fontSize: 24,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'Black',
    padding: 10,
  },
});
