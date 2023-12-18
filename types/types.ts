export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
   
}

export interface CartItem extends Product {
    quantity: number;
}