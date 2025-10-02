package com.inventory.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

/**
 * Request DTO for creating a new product
 */
public record CreateProductRequest(
    @NotBlank(message = "Product name is required")
    String name,
    
    String description,
    
    @NotNull(message = "Quantity is required")
    @PositiveOrZero(message = "Quantity must be zero or positive")
    Integer quantity,
    
    @NotNull(message = "Price is required")
    @PositiveOrZero(message = "Price must be zero or positive")
    BigDecimal price
) {}
