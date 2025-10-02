package com.inventory.controller;

import com.inventory.dto.CreateProductRequest;
import com.inventory.dto.ProductDTO;
import com.inventory.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for Product management
 */
@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    /**
     * Get all products
     */
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.findAll();
        return ResponseEntity.ok(products);
    }

    /**
     * Get product by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        ProductDTO product = productService.findById(id);
        return ResponseEntity.ok(product);
    }

    /**
     * Create a new product
     */
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(
        @Valid @RequestBody CreateProductRequest request
    ) {
        ProductDTO product = productService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    /**
     * Update an existing product
     */
    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(
        @PathVariable Long id,
        @Valid @RequestBody CreateProductRequest request
    ) {
        ProductDTO product = productService.update(id, request);
        return ResponseEntity.ok(product);
    }

    /**
     * Delete a product
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Search products by name
     */
    @GetMapping("/search")
    public ResponseEntity<List<ProductDTO>> searchProducts(
        @RequestParam String name
    ) {
        List<ProductDTO> products = productService.searchByName(name);
        return ResponseEntity.ok(products);
    }

    /**
     * Get products with low stock
     */
    @GetMapping("/low-stock")
    public ResponseEntity<List<ProductDTO>> getLowStockProducts(
        @RequestParam(defaultValue = "10") Integer threshold
    ) {
        List<ProductDTO> products = productService.findLowStock(threshold);
        return ResponseEntity.ok(products);
    }
}

