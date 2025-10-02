/**
 * Product model interface
 */
export interface Product {
  id?: number;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Request model for creating or updating a product
 */
export interface ProductRequest {
  name: string;
  description?: string;
  quantity: number;
  price: number;
}

