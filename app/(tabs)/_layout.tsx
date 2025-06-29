import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { FavoritosProvider } from '@/app/componentes/FavoritosContext';
import { CarrinhoProvider } from '@/app/(tabs)/CarrinhoContext';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <FavoritosProvider>
      <CarrinhoProvider>
        <Tabs
          screenOptions={{
            tabBarStyle:{display: 'none'},
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Tela de Login',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={Colors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              title: 'Tela de cadastro',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
        </Tabs>
      </CarrinhoProvider>
    </FavoritosProvider>
  );
}
