export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  discountPercentage: number;
}

export interface CartItem extends Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}


