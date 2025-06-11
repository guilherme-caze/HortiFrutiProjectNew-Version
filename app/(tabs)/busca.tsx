import { StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import BarraInferior from '@/app/componentes/barraInferior';
import { router } from 'expo-router';

export default function TelaBuscaProdutos() {
  const [busca, setBusca] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Image
          source={require('../../assets/images/CenouraLogo.png')}
          style={styles.cenouraLogo}
        />

        <View style={styles.barraBusca}>
          <FontAwesome name="search" size={20} color="#999" style={styles.iconeBusca} />
          <TextInput
            style={styles.campoBusca}
            placeholder="Buscar produtos..."
            placeholderTextColor="#999"
            onChangeText={setBusca}
            value={busca}
          />
        </View>

        {/* Barra inferior */}
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -35, //Arrumando o buraco
  },
  barraBusca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 3,
  },
  iconeBusca: {
    marginRight: 8,
  },
  campoBusca: {
    flex: 1,
    fontSize: 16,
  },
  cenouraLogo: {
    width: 45, 
    height: 45, 
    resizeMode: 'contain', 
    top: 20,
    marginBottom: 30,
    left: '50%', 
    transform: [{ translateX: -20 }],
    zIndex: 1, 
  },
});
