import { Component, inject, signal, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

/**
 * Component for displaying the list of products
 */
@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  selectedProduct = signal<Product | null>(null);

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Load all products from the API
   */
  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load products. Please try again.");
        this.loading.set(false);
      },
    });
  }

  /**
   * Delete a product
   */
  deleteProduct(id: number): void {
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (err) => {
          this.error.set("Failed to delete product. Please try again.");
        },
      });
    }
  }

  /**
   * Select a product for editing
   */
  selectProduct(product: Product): void {
    this.selectedProduct.set(product);
  }

  /**
   * Clear selected product
   */
  clearSelection(): void {
    this.selectedProduct.set(null);
  }

  /**
   * Handle product saved event
   */
  onProductSaved(): void {
    this.clearSelection();
    this.loadProducts();
  }
}

