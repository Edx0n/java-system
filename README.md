# Java System - Spring Boot + Angular

Full-stack application with Java Spring Boot backend and Angular frontend.

## Project Structure

```
java-system/
├── backend/          # Spring Boot REST API
└── frontend/         # Angular application
```

## Technology Stack

### Backend

- Java 17+
- Spring Boot 3.x
- Spring Data JPA
- Spring Security
- PostgreSQL/MySQL
- Maven
- JUnit 5 & Mockito

### Frontend

- Angular 17+
- TypeScript
- RxJS
- Angular Material / PrimeNG
- SCSS
- Jasmine & Karma

## Prerequisites

- Java 17 or higher
- Node.js 18+ and npm
- PostgreSQL or MySQL
- Maven (or use included Maven Wrapper)
- Angular CLI: `npm install -g @angular/cli`

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd java-system
```

### 2. Setup Backend

```bash
cd backend

# Configure database in src/main/resources/application.yml
# Update the following properties:
# - spring.datasource.url
# - spring.datasource.username
# - spring.datasource.password

# Run the application
./mvnw spring-boot:run

# Or build and run
./mvnw clean package
java -jar target/java-system-0.0.1-SNAPSHOT.jar
```

Backend will be available at: `http://localhost:8080`

### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
ng serve

# Or with specific port
ng serve --port 4200
```

Frontend will be available at: `http://localhost:4200`

## Development

### Backend Development

```bash
cd backend

# Run tests
./mvnw test

# Run with specific profile
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev

# Generate coverage report
./mvnw clean test jacoco:report
```

### Frontend Development

```bash
cd frontend

# Run tests
ng test

# Run E2E tests
ng e2e

# Build for production
ng build --configuration production

# Analyze bundle size
ng build --stats-json
```

## API Documentation

Once the backend is running, access Swagger UI at:

- `http://localhost:8080/swagger-ui.html`

## Database Migrations

We use Flyway for database migrations. Migration scripts are located at:

- `backend/src/main/resources/db/migration/`

Naming convention: `V{version}__{description}.sql`
Example: `V1__create_users_table.sql`

## Code Style

This project follows specific coding standards:

- All code comments in English
- No emojis in code or commit messages
- Conventional commits format
- See `.cursorrules` for detailed guidelines

## Testing

### Backend Tests

```bash
cd backend
./mvnw test                    # Unit tests
./mvnw verify                  # Integration tests
```

### Frontend Tests

```bash
cd frontend
ng test                        # Unit tests
ng test --code-coverage        # With coverage
ng e2e                         # E2E tests
```

## Building for Production

### Backend

```bash
cd backend
./mvnw clean package -DskipTests
# JAR will be in target/ directory
```

### Frontend

```bash
cd frontend
ng build --configuration production
# Build output will be in dist/ directory
```

## Environment Variables

### Backend

Configure in `application.yml` or use environment variables:

- `DATABASE_URL`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`
- `JWT_SECRET`
- `JWT_EXPIRATION`

### Frontend

Configure in `src/environments/`:

- `environment.ts` - development
- `environment.prod.ts` - production

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Commit your changes: `git commit -m "feat: add my feature"`
3. Push to the branch: `git push origin feature/my-feature`
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.
