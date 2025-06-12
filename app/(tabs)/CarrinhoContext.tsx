import React, { createContext, useContext, useState } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagem: any;
};

type CarrinhoItem = Produto & { quantidade: number; selecionado: boolean };

type CarrinhoContextType = {
  carrinho: CarrinhoItem[];
  adicionarProduto: (produto: Produto) => void;
  // outros métodos como remover, incrementar, etc.
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setCarrinho((prev) => {
      const existente = prev.find(item => item.id === produto.id);
      if (existente) {
        return prev.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1, selecionado: true }];
    });
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider');
  return context;
};