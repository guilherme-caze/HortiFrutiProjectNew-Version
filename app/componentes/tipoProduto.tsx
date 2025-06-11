import React, { useRef, useState } from 'react';
import { InteractionManager } from 'react-native';
import {
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  AccessibilityInfo,
} from 'react-native';
import { router, usePathname } from 'expo-router'; // IMPORTANTE

const { width } = Dimensions.get('window');

const categorias = [
  {
    key: 'frutas',
    label: 'Frutas',
    icone: require('../../assets/images/fruta.png'),
    iconeSelecionado: require('../../assets/images/FrutaLaranjaIcone.png'),
  },
  {
    key: 'vegetais',
    label: 'Vegetais',
    icone: require('../../assets/images/vegetais.png'),
    iconeSelecionado: require('../../assets/images/VegetaisLaranjaIcone.png'),
  },
  {
    key: 'temperos',
    label: 'Temperos',
    icone: require('../../assets/images/tempero.png'),
    iconeSelecionado: require('../../assets/images/TemperosLaranjaIcone.png'),
  },
];

export default function TipoProduto() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [animSelecionado] = useState(
    categorias.map(() => new Animated.Value(1))
  );
  const pathname = usePathname(); // PEGA A ROTA ATUAL

  // Animação ao selecionar
  const animarSelecao = (idx: number, callback?: () => void) => {
    Animated.sequence([
      Animated.timing(animSelecionado[idx], {
        toValue: 1.1,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(animSelecionado[idx], {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (callback) callback();
    });
  };

  const handleSelecionar = (key: string, idx: number) => {
    AccessibilityInfo.announceForAccessibility(`Categoria ${categorias[idx].label} selecionada`);
    animarSelecao(idx, () => {
      InteractionManager.runAfterInteractions(() => {
        router.push({ pathname: `/${key}`, params: { tipo: key } });
      });
    });
  };

  return (
    <View>
      <View style={styles.menuContainer}>
        {categorias.map((cat, idx) => {
          // Checa se a rota atual corresponde à categoria
          const isSelected = pathname === `/${cat.key}`;
          return (
            <Animated.View
              key={cat.key}
              style={[
                styles.menuItem,
                isSelected && styles.selecionado,
                { transform: [{ scale: animSelecionado[idx] }] },
              ]}
            >
              <TouchableOpacity
                accessible
                accessibilityLabel={`Categoria ${cat.label}`}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
                onPress={() => handleSelecionar(cat.key, idx)}
                activeOpacity={0.7}
              >
                <Image
                  source={isSelected ? cat.iconeSelecionado : cat.icone}
                  style={styles.menuImage}
                />
                <Text style={styles.menuText}>{cat.label}</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 110,
    height: 100,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 2,
    justifyContent: 'center',
  },
  menuImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selecionado: {
    borderColor: 'orange',
    borderWidth: 3,
  },
});