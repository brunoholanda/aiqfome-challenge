import { IconName } from "../components/Icon";

export const fakeMenu: Record<
  string,
  {
    description: string;
    items: {
      name: string;
      description: string;
      price: number;
      originalPrice?: number;
      highlight?: boolean;
      icons?: IconName[];
      discounted?: boolean;
    }[];
  }
> = {
  Niguiris: {
    description: "bolinho de arroz coberto com fatia de peixe cru ou frutos do mar",
    items: [
      {
        name: "Niguiri de Salmão",
        description: "Arroz com fatia de salmão fresco",
        price: 8.90,
      },
      {
        name: "Niguiri de Atum",
        description: "Arroz com fatia de atum fresco",
        price: 9.50,
      },
      {
        name: "Niguiri de Camarão",
        description: "Arroz com camarão cozido",
        price: 10.00,
      },
      {
        name: "Niguiri de Skin",
        description: "Pele de salmão crocante sobre arroz",
        price: 7.90,
      },
    ],
  },
  Ceviches: {
    description: "um prato super refrescante de peixe fatiado e marinado com limão",
    items: [
      {
        name: "Ceviche de salmão",
        description: "salmão temperado com limão, cebola e pimenta",
        price: 19.90,
        highlight: true,
      },
      {
        name: "Ceviche clássico",
        description: "Cubos de peixe branco marinados no limão com cebola roxa e coentro",
        price: 18.50,
      },
      {
        name: "Ceviche de atum",
        description: "Atum fresco marinado com limão, pimenta dedo-de-moça e cebola roxa",
        price: 21.00,
      },
      {
        name: "Ceviche tropical",
        description: "Peixe branco com manga, limão e hortelã",
        price: 20.50,
      },
    ],
  },
  Temakis: {
    description: "sushi em forma de cone com salmão e cream cheese",
    items: [
      {
        name: "Califórnia",
        description: "Kani, pepino e maçã ou manga",
        price: 13.99,
        originalPrice: 17.0,
        discounted: true
      },
      {
        name: "Califórnia",
        description: "Kani, pepino e maçã ou manga",
        price: 13.99,
        icons: ["folha"],
      },
      {
        name: "Filadélfia",
        description: "Arroz, salmão fresco, cream cheese e cebolinha",
        price: 13.99,
      },
      {
        name: "Mix",
        description: "Escolha 3 ingredientes: shimeji, alface americana, rúcula, tomate seco, cream cheese, maion...",
        price: 13.99,
        highlight: false,
        icons: ["mix"],
      },
      {
        name: "Salmão picante",
        description: "Alga, arroz, salmão fresco, pimenta e cebolinha",
        price: 13.99,
        highlight: false,
        icons: ["mix"],
      },
    ],
  },
  Bebidas: {
    description: "refrescos para acompanhar sua refeição",
    items: [
      {
        name: "Água sem gás",
        description: "Garrafa 500ml",
        price: 3.00,
      },
      {
        name: "Refrigerante lata",
        description: "Coca-Cola, Guaraná, Fanta ou similar",
        price: 6.00,
      },
      {
        name: "Chá gelado",
        description: "Chá verde com limão ou pêssego",
        price: 7.00,
      },
      {
        name: "Suco natural",
        description: "Suco da fruta (laranja, limão, abacaxi)",
        price: 8.50,
      },
    ],
  },
  Sobremesas: {
    description: "doces para fechar com chave de ouro",
    items: [
      {
        name: "Harumaki de banana",
        description: "Rolinho doce recheado com banana e canela",
        price: 9.90,
      },
      {
        name: "Mochi de morango",
        description: "Doce japonês feito de arroz com recheio de morango",
        price: 12.00,
      },
      {
        name: "Tempurá de sorvete",
        description: "Bola de sorvete empanada e frita",
        price: 14.00,
        highlight: true,
      },
      {
        name: "Torta de limão",
        description: "Torta gelada com base crocante e creme de limão",
        price: 10.50,
      },
    ],
  },
};
