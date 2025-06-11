import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import TipoProduto from '@/app/componentes/tipoProduto';
import Cards from '@/app/componentes/cards';
import BarraInferior from '@/app/componentes/barraInferior';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* menu */}
        <TipoProduto />

        {/* cards */}
        <Cards />

        {/* barra inferior */}
        <BarraInferior />

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: -35, //Arrumando o buraco
  },
  
});
