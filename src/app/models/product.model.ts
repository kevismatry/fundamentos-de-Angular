export type Products = Product[]

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
  taxes?: number;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
