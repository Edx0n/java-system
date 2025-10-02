import {
  Component,
  inject,
  signal,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

/**
 * Component for creating and editing products
 */
@Component({
  selector: "app-product-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnChanges {
  private productService = inject(ProductService);
  private fb = inject(FormBuilder);

  @Input() product: Product | null = null;
  @Output() productSaved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  productForm: FormGroup;
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.productForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["product"] && this.product) {
      this.productForm.patchValue({
        name: this.product.name,
        description: this.product.description || "",
        quantity: this.product.quantity,
        price: this.product.price,
      });
    } else if (changes["product"] && !this.product) {
      this.productForm.reset({
        name: "",
        description: "",
        quantity: 0,
        price: 0,
      });
    }
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    if (this.productForm.valid) {
      this.loading.set(true);
      this.error.set(null);

      const productData = this.productForm.value;

      if (this.product?.id) {
        this.updateProduct(this.product.id, productData);
      } else {
        this.createProduct(productData);
      }
    }
  }

  /**
   * Create a new product
   */
  private createProduct(productData: any): void {
    this.productService.createProduct(productData).subscribe({
      next: () => {
        this.loading.set(false);
        this.productForm.reset();
        this.productSaved.emit();
      },
      error: (err) => {
        this.error.set("Failed to create product. Please try again.");
        this.loading.set(false);
      },
    });
  }

  /**
   * Update an existing product
   */
  private updateProduct(id: number, productData: any): void {
    this.productService.updateProduct(id, productData).subscribe({
      next: () => {
        this.loading.set(false);
        this.productForm.reset();
        this.productSaved.emit();
      },
      error: (err) => {
        this.error.set("Failed to update product. Please try again.");
        this.loading.set(false);
      },
    });
  }

  /**
   * Cancel form editing
   */
  onCancel(): void {
    this.productForm.reset();
    this.error.set(null);
    this.cancelled.emit();
  }

  /**
   * Get form control
   */
  get f() {
    return this.productForm.controls;
  }
}

