package com.inventory.repository;

import com.inventory.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository for Product entity
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    /**
     * Find products by name containing the search term (case insensitive)
     */
    List<Product> findByNameContainingIgnoreCase(String name);

    /**
     * Find products with quantity less than specified value
     */
    List<Product> findByQuantityLessThan(Integer quantity);

    /**
     * Find all products ordered by name
     */
    @Query("SELECT p FROM Product p ORDER BY p.name ASC")
    List<Product> findAllOrderedByName();
}
