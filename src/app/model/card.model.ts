export interface Card {
  id: string | number;
  header: string;
  subHeader: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  language: string;
  
}

export enum Brand {
  APPLE = 'Apple',
  SAMSUNG = 'Samsung',
  OPPO = 'Oppo',
  HUAWEI = 'Huawei'
}

export enum Category {
  SMARTPHONES = 'Smartphones',
  LAPTOPS = 'laptops'
}
