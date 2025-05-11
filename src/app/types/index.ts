export type Store = {
  id: string;
  name: string;
  logo: string;
  deliveryIcon: "moto" | "moto-green" | "capacete" | "bag";
  deliveryText: string;
  deliveryColor: string;
  rating: number;
  isOpen: boolean;
};

export interface ExtraItem {
  id: string;
  label: string;
  price: number;
}

export type SavedItem = {
  name: string;
  quantity: number;
  total: number;
  price: number;
  size?: string;
  accomp?: string[];
  utensils?: string;
  extras?: string[];
  drinks?: { id: string; label: string; price: number; quantity: number }[];
  note?: string;
};

export type CartItem = {
  name: string;
  quantity: number;
  total: number;
  groups: {
    title: string;
    lines: { label: string; priceDiff?: number }[];
  }[];
  note?: string;
};

