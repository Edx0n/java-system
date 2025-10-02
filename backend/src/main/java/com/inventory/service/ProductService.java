package com.inventory.service;

import com.inventory.dto.CreateProductRequest;
import com.inventory.dto.ProductDTO;
import com.inventory.exception.ProductNotFoundException;
import com.inventory.model.Product;
import com.inventory.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service layer for Product management
 */
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;

    /**
     * Find all products
     */
    public List<ProductDTO> findAll() {
        log.debug("Finding all products");
        return productRepository.findAll()
            .stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }

    /**
     * Find product by ID
     */
    public ProductDTO findById(Long id) {
        log.debug("Finding product with id: {}", id);
        return productRepository.findById(id)
            .map(this::toDTO)
            .orElseThrow(() -> new ProductNotFoundException(id));
    }

    /**
     * Create a new product
     */
    public ProductDTO create(CreateProductRequest request) {
        log.debug("Creating new product: {}", request.name());
        Product product = new Product();
        product.setName(request.name());
        product.setDescription(request.description());
        product.setQuantity(request.quantity());
        product.setPrice(request.price());

        Product savedProduct = productRepository.save(product);
        log.info("Product created with id: {}", savedProduct.getId());
        return toDTO(savedProduct);
    }

    /**
     * Update an existing product
     */
    public ProductDTO update(Long id, CreateProductRequest request) {
        log.debug("Updating product with id: {}", id);
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));

        product.setName(request.name());
        product.setDescription(request.description());
        product.setQuantity(request.quantity());
        product.setPrice(request.price());

        Product updatedProduct = productRepository.save(product);
        log.info("Product updated with id: {}", updatedProduct.getId());
        return toDTO(updatedProduct);
    }

    /**
     * Delete a product
     */
    public void delete(Long id) {
        log.debug("Deleting product with id: {}", id);
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        log.info("Product deleted with id: {}", id);
    }

    /**
     * Search products by name
     */
    public List<ProductDTO> searchByName(String name) {
        log.debug("Searching products by name: {}", name);
        return productRepository.findByNameContainingIgnoreCase(name)
            .stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }

    /**
     * Find products with low stock
     */
    public List<ProductDTO> findLowStock(Integer threshold) {
        log.debug("Finding products with quantity less than: {}", threshold);
        return productRepository.findByQuantityLessThan(threshold)
            .stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }

    /**
     * Convert Product entity to DTO
     */
    private ProductDTO toDTO(Product product) {
        return new ProductDTO(
            product.getId(),
            product.getName(),
            product.getDescription(),
            product.getQuantity(),
            product.getPrice(),
            product.getCreatedAt(),
            product.getUpdatedAt()
        );
    }
}

