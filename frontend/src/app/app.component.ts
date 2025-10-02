import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";

/**
 * Root application component
 */
@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="app-container">
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [
    `
      .app-container {
        min-height: 100vh;
        background-color: #f5f5f5;
      }
    `,
  ],
})
export class AppComponent {
  title = "Inventory Management System";
}

