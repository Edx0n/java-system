import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Product, ProductRequest } from "../models/product.model";

/**
 * Service for managing products via API
 */
@Injectable({
  providedIn: "root",
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/products`;

  /**
   * Get all products
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Get product by ID
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new product
   */
  createProduct(product: ProductRequest): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * Update an existing product
   */
  updateProduct(id: number, product: ProductRequest): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  /**
   * Delete a product
   */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Search products by name
   */
  searchProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search`, {
      params: { name },
    });
  }

  /**
   * Get products with low stock
   */
  getLowStockProducts(threshold: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/low-stock`, {
      params: { threshold: threshold.toString() },
    });
  }
}

