import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { router, usePathname } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalScreen() {
  const pathname = usePathname();

  // Função para navegar
  const handlePress = (route: string) => {
    requestAnimationFrame(() => {
      router.push(route);
    });
  };

  // Mapeamento de rotas para ícones
  const menuItems = [
    { icon: 'home', label: 'Início', route: '/menu' },
    { icon: 'search', label: 'Buscas', route: '/busca' },
    { icon: 'heart', label: 'Favoritos', route: '/favoritos' },
    { icon: 'shopping-cart', label: 'Pedidos', route: '/Carrinho' },
    { icon: 'user', label: 'Perfil', route: '/perfil' },
  ];

  return (
    <View style={styles.container}>
      {/* Menu */}
      <View style={styles.funcionalidadesContainer}>
        {/* Logo da cenoura */}
        <Image source={require('../../assets/images/CenouraLogo.png')} style={styles.cenouraLogo} />

        {/* Itens do menu */}
        {menuItems.map(item => (
          <TouchableOpacity
            key={item.icon}
            style={styles.funcionalidadesItem}
            onPress={() => handlePress(item.route)}
          >
            <Icon
              name={item.icon}
              size={32}
              color={pathname === item.route ? '#ED841C' : '#97C447'}
            />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 2,
  },
  menuText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  funcionalidadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 1,
    width: '112%',
    borderTopWidth: 2,
    borderTopColor: '#9EC852',
  },
  funcionalidadesItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  cenouraLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    left: '55%',
    transform: [{ translateX: -20 }],
    zIndex: 1,
  },
});
