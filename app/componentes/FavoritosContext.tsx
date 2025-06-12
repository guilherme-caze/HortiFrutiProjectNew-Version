import React, { createContext, useContext, useState } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: number | string;
  imagem: any;
};

type FavoritosContextType = {
  favoritos: Produto[];
  adicionarFavorito: (produto: Produto) => void;
  removerFavorito: (id: string) => void;
  isFavorito: (id: string) => boolean;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const adicionarFavorito = (produto: Produto) => {
    setFavoritos((prev) => {
      if (prev.find((p) => p.id === produto.id)) return prev;
      return [...prev, produto];
    });
  };

  const removerFavorito = (id: string) => {
    setFavoritos((prev) => prev.filter((p) => p.id !== id));
  };

  const isFavorito = (id: string) => favoritos.some((p) => p.id === id);

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
  return context;
};