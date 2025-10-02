package com.inventory.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Data Transfer Object for Product
 */
public record ProductDTO(
    Long id,
    String name,
    String description,
    Integer quantity,
    BigDecimal price,
    LocalDateTime createdAt,
    LocalDateTime updatedAt
) {}

