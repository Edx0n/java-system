# Backend - Inventory Management System

Spring Boot REST API for inventory management.

## 🚀 Quick Start

```bash
# Run the application
./mvnw spring-boot:run

# Or on Windows
mvnw.cmd spring-boot:run
```

The API will be available at: `http://localhost:8080/api`

## 📦 Technologies

- Java 17+
- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database (in-memory)
- Lombok
- Maven

## 📡 API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/search?name={name}` - Search by name
- `GET /api/products/low-stock?threshold={n}` - Low stock products

### Request Body Example
```json
{
  "name": "Laptop Dell XPS 15",
  "description": "High-performance laptop",
  "quantity": 10,
  "price": 1299.99
}
```

## 🗄️ Database

H2 Console: `http://localhost:8080/api/h2-console`

**Connection Settings:**
- JDBC URL: `jdbc:h2:mem:inventorydb`
- Username: `sa`
- Password: (leave blank)

## 🔧 Development

```bash
# Run tests
./mvnw test

# Build
./mvnw clean package

# Run with specific profile
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

## 📁 Project Structure

```
src/main/java/com/inventory/
├── config/          # Configuration classes (CORS)
├── controller/      # REST Controllers
├── dto/             # Data Transfer Objects
├── exception/       # Exception handling
├── model/           # JPA Entities
├── repository/      # Data repositories
└── service/         # Business logic
```

## ✅ Features

- ✅ RESTful API with proper HTTP status codes
- ✅ JPA entities with validation
- ✅ Custom queries and search
- ✅ Global exception handling
- ✅ CORS configuration for Angular
- ✅ H2 in-memory database for development
