export interface Product{
    id: string;
    name: string;
    price: number;
    image: string;
    title: string;
    descripcion: string;
}

export interface ProductApi{
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

//partial vuelve opcionales los campos de PrroductDTO
export interface ProductDTOUpdate extends Partial<ProductDTO>{ }
