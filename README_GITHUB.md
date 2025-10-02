# 🏢 Java System - Inventory Management

Full-stack Inventory Management System built with **Java Spring Boot** and **Angular 17**.

## 🚀 Quick Start

### Backend (Terminal 1)

```bash
cd backend
./mvnw spring-boot:run
```

**Running at:** `http://localhost:8080/api`

### Frontend (Terminal 2)

```bash
cd frontend
npm install
ng serve
```

**Running at:** `http://localhost:4200`

## 📦 Technology Stack

### Backend

- Java 17+
- Spring Boot 3.2
- Spring Data JPA
- H2 Database (development)
- Lombok
- Maven

### Frontend

- Angular 17
- TypeScript
- RxJS
- Signals
- SCSS

## ✨ Features

- ✅ Create, Read, Update, Delete products
- ✅ Search products by name
- ✅ Low stock indicators
- ✅ Reactive forms with validation
- ✅ RESTful API
- ✅ Responsive design

## 📡 API Endpoints

```
GET    /api/products              - List all products
GET    /api/products/{id}         - Get product by ID
POST   /api/products              - Create product
PUT    /api/products/{id}         - Update product
DELETE /api/products/{id}         - Delete product
GET    /api/products/search       - Search by name
GET    /api/products/low-stock    - Get low stock items
```

## 🔧 Development

See [QUICK_START.md](QUICK_START.md) for detailed instructions.

## 📝 License

MIT License
