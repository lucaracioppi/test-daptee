export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}
