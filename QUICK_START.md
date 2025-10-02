# Quick Start Guide - Inventory Management System

## Overview
Sistema de gerenciamento de estoque completo com:
- **Backend**: Java Spring Boot 3.2 com JPA, H2 Database
- **Frontend**: Angular 17 standalone com Signals

## Prerequisites
- Java 17+
- Node.js 18+
- Maven (ou use o Maven Wrapper incluído)
- Angular CLI: `npm install -g @angular/cli`

## Running the Application

### 1. Start the Backend (Terminal 1)

```bash
cd backend
./mvnw spring-boot:run
```

Backend estará disponível em: `http://localhost:8080/api`

Console do H2: `http://localhost:8080/api/h2-console`
- JDBC URL: `jdbc:h2:mem:inventorydb`
- Username: `sa`
- Password: (deixe em branco)

### 2. Start the Frontend (Terminal 2)

```bash
cd frontend
npm install
ng serve
```

Frontend estará disponível em: `http://localhost:4200`

## API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/search?name={name}` - Search by name
- `GET /api/products/low-stock?threshold={n}` - Get low stock products

### Request Body Example (POST/PUT)
```json
{
  "name": "Laptop Dell XPS 15",
  "description": "High-performance laptop",
  "quantity": 10,
  "price": 1299.99
}
```

## Features Implemented

### Backend
✅ RESTful API with Spring Boot  
✅ JPA entities with validation  
✅ Repository pattern with custom queries  
✅ Service layer with business logic  
✅ Global exception handling  
✅ CORS configuration for Angular  
✅ H2 in-memory database  
✅ Lombok for boilerplate reduction  

### Frontend
✅ Standalone Angular components  
✅ Signals for reactive state  
✅ Reactive forms with validation  
✅ Product list with CRUD operations  
✅ Product form (create/edit)  
✅ Error handling and loading states  
✅ Responsive design  
✅ Low stock indicators  

## Project Structure

```
java-system/
├── backend/                          # Spring Boot Backend
│   ├── src/main/java/com/inventory/
│   │   ├── config/                  # CORS configuration
│   │   ├── controller/              # REST controllers
│   │   ├── dto/                     # Data Transfer Objects
│   │   ├── exception/               # Exception handling
│   │   ├── model/                   # JPA entities
│   │   ├── repository/              # Data repositories
│   │   └── service/                 # Business logic
│   └── src/main/resources/
│       └── application.yml          # App configuration
│
└── frontend/                         # Angular Frontend
    ├── src/app/
    │   ├── components/
    │   │   ├── product-list/        # Product list component
    │   │   └── product-form/        # Product form component
    │   ├── models/                  # TypeScript models
    │   ├── services/                # API services
    │   └── environments/            # Environment configs
    └── angular.json
```

## Development Tips

### Backend Development
```bash
# Run tests
cd backend
./mvnw test

# Package application
./mvnw clean package
```

### Frontend Development
```bash
# Run tests
cd frontend
ng test

# Build for production
ng build --configuration production

# Lint code
ng lint
```

## Next Steps

- [ ] Add authentication (JWT)
- [ ] Implement pagination
- [ ] Add product categories
- [ ] Include image upload
- [ ] Add export to CSV/Excel
- [ ] Implement search filters
- [ ] Add dashboard with statistics
- [ ] Deploy to cloud (AWS/Azure/Heroku)

## Troubleshooting

### Port already in use
- Backend: Change port in `application.yml` (default: 8080)
- Frontend: Run `ng serve --port 4300`

### CORS errors
- Verify `CorsConfig.java` allows `http://localhost:4200`
- Check Angular environment files point to correct API URL

### Database issues
- H2 console: `http://localhost:8080/api/h2-console`
- Data is in-memory, resets on app restart
- For persistent data, switch to PostgreSQL/MySQL

## Support

For issues or questions, check the main README.md or create an issue on GitHub.

