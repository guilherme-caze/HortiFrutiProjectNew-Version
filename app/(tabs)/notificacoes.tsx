import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraInferior from '@/app/componentes/barraInferior';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        
        <View style={styles.itemSimple}>

          <TouchableOpacity onPress={() => router.push('/perfil')} >
            <Image
              source={require('../../assets/images/voltar.png')}
              style={styles.itemImageLarge}
            />          
          </TouchableOpacity>

          <Text style={styles.itemTitleLarge}>Notificações</Text>
        </View>

        {/*  */}
        <View style={styles.itemContainer}>
           <Image
            source={require('../../assets/images/sino.png')}
            style={styles.itemImage}
           />
            <Text style={styles.itemTitle}>Seu pedido está a caminho</Text>
        </View>

         {/*  */}
         <View style={styles.itemContainer}>
           <Image
            source={require('../../assets/images/sino.png')}
            style={styles.itemImage}
           />
            <Text style={styles.itemTitle}>Seu pedido foi entregue</Text>
        </View>

         {/*  */}
         <View style={styles.itemContainer}>
           <Image
            source={require('../../assets/images/sino.png')}
            style={styles.itemImage}
           />
            <Text style={styles.itemTitle}>Pedido canceladoo</Text>
        </View>

        {/* barra inferior */}
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  itemSimple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  itemImageLarge: {
    width: 40,
    height: 40,
    marginRight: 60,
  },
  itemTitleLarge: {
    fontSize: 20,
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 5,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});
