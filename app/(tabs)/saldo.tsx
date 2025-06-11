import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraInferior from '@/app/componentes/barraInferior';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Título com ícone */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Saldo</Text>
          <Image
            source={require('../../assets/images/carteira.png')}
            style={styles.headerIcon}
          />
        </View>

        {/* saldo do usuario melhorado */}
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoTexto}>
            <Text style={styles.label}>Saldo: </Text>R$ 19,99
          </Text>
          <Text style={styles.cartao}>xxxx xxxx xxxx xxxx</Text>

          <TouchableOpacity
            style={styles.buttonSaldo}
            onPress={() => console.log('Adicionar saldo pressionado')}
          >
            <Text style={styles.buttonText}>+ Adicionar saldo</Text>
          </TouchableOpacity>
        </View>

        {/* adicionar forma de pagamento melhorado */}
        <View style={styles.pagamentoContainer}>
          <Text style={styles.pagamentoTexto}>
            Adicionar outra forma de pagamento
          </Text>

          <TouchableOpacity
            style={styles.buttonPagamento}
            onPress={() => console.log('Adicionar forma de pagamento pressionado')}
          >
            <Text style={styles.buttonText}>+ Adicionar</Text>
          </TouchableOpacity>
        </View>

        {/* Barra inferior */}
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500',
    marginRight: 10,
  },
  headerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  // Saldo
  saldoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  saldoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cartao: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  buttonSaldo: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-end',
    elevation: 3,
  },

  // Pagamento
  pagamentoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  pagamentoTexto: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 16,
  },
  buttonPagamento: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-end',
    elevation: 3,
  },

  label: {
    fontWeight: '600',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
