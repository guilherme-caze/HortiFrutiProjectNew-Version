import React, { useRef, useState } from 'react';
import { FlatList, Image, Dimensions, StyleSheet, TouchableOpacity, View, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { router } from 'expo-router'; 

const { width } = Dimensions.get('window');

const promocoes = [
  require('../../assets/images/tercaDaFruta.png'),
  require('../../assets/images/quartaDoVegetal.png'),
  require('../../assets/images/quintaDoTempero.png'),
];

export default function CarrosselPromocao() {
  const [indexAtivo, setIndexAtivo] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slide = Math.round(event.nativeEvent.contentOffset.x / width);
        setIndexAtivo(slide);
      },
    }
  );

  // Função para navegar conforme o banner clicado
  const handleBannerPress = (index: number) => {
    if (index === 0) router.push('/frutas');
    else if (index === 1) router.push('/vegetais');
    else if (index === 2) router.push('/temperos');
  };

  return (
    <View>
      <Animated.FlatList
        data={promocoes}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.promocao} onPress={() => handleBannerPress(index)}>
            <Image source={item} style={styles.promocaoImage} />
          </TouchableOpacity>
        )}
      />

      {/* Indicadores */}
      <View style={styles.indicadorContainer}>
        {promocoes.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicador,
              { opacity: i === indexAtivo ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promocao: {
    width: width,
    alignItems: 'center',
  },
  promocaoImage: {
    width: '94%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  indicadorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicador: {
    width: 25,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFA500',
    marginHorizontal: 5,
  },
});
