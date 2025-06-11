import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '@/app/componentes/cards';
import Comercios from '@/app/componentes/comercios';
import BarraInferior from '@/app/componentes/barraInferior';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.title1}>Comércios</Text>

        <Comercios />

        {/* texto */}
        <Text style={styles.title2}>Produtos</Text>

        {/* Cards */}
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
  title1: {
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'orange',
    padding: 10,
    textAlign: 'center',
  },
  title2: {
    fontSize: 40,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'orange',
    padding: 10,
    textAlign: 'center',
  },
});
