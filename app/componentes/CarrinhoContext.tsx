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
  incrementar: (id: string) => void;
  decrementar: (id: string) => void;
  remover: (id: string) => void;
  selecionar: (id: string) => void;
  desmarcarTodos: () => void;
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

  const incrementar = (id: string) => {
    setCarrinho(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementar = (id: string) => {
    setCarrinho(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantidade: Math.max(1, item.quantidade - 1) }
            : item
        )
        .filter(item => item.quantidade > 0)
    );
  };

  const remover = (id: string) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const selecionar = (id: string) => {
    setCarrinho(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  };

  const desmarcarTodos = () => {
    setCarrinho(prev =>
      prev.map(item => ({ ...item, selecionado: false }))
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        incrementar,
        decrementar,
        remover,
        selecionar,
        desmarcarTodos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider');
  return context;
};