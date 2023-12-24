export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface CartItem extends Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}


