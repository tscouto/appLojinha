# App de Produtos

Este é um aplicativo simples de exibição de produtos, desenvolvido com **React Native**, com foco na apresentação de uma lista de itens, exibindo suas imagens, preços e permitindo ao usuário adicionar produtos ao carrinho. O app é uma ótima demonstração de como utilizar componentes personalizados, como a lista de produtos e a interação com os elementos, além de mostrar como integrar dados dinâmicos em uma interface mobile.

## Funcionalidades

- **Exibição de Produtos**: Uma lista de produtos é carregada e exibida com suas imagens, nomes e preços.
- **Interação com Produtos**: Ao clicar no botão de um produto, um alerta é exibido com a informação do produto adicionado ao carrinho.
- **Estrutura Responsiva**: O layout foi projetado para ser visualizado em dispositivos móveis, com ajustes automáticos para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis nativos.
- **TypeScript**: Usado para adicionar tipagem estática e melhorar a qualidade do código.
- **FlatList**: Componente do React Native utilizado para renderizar a lista de produtos de forma eficiente.
- **SafeAreaView**: Utilizado para garantir que os conteúdos sejam exibidos corretamente em áreas seguras da tela do dispositivo.
- **StatusBar**: Gerenciamento da barra de status para uma melhor experiência de usuário.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- **App.tsx**: Arquivo principal do aplicativo, responsável por renderizar a lista de produtos.
- **ProductItem.tsx**: Componente que representa um produto individual e exibe suas informações (nome, preço, imagem).
- **types/Product.ts**: Define o tipo `Product` utilizado em todo o projeto para garantir a tipagem correta dos dados dos produtos.
- **data.ts**: Contém uma lista de produtos simulada para fins de demonstração.

## Como Rodar o Projeto

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/tscouto/appLojinha.git
