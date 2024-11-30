# Project Files Documentation

## Server-Side Components

### 1. Environment Configuration (`server/.env`)
- MongoDB connection string configuration
- Server port configuration (5000)
- Basic environment variables setup

### 2. Database Models

#### Blog Model (`server/models/Blog.js`)
- Defines blog post schema with fields:
  - title (required)
  - content (required)
  - slug (unique, auto-generated)
  - createdAt (timestamp)
- Includes pre-save middleware for automatic slug generation from title

#### User Model (`server/models/User.js`)
- Defines user schema with:
  - email (unique, required)
  - password (required)
  - isAdmin flag
  - adminRole (super_admin/content_admin/regular_admin)
  - lastLogin tracking
- Includes admin validation method

#### Admin Credentials Model (`server/models/AdminCredential.js`)
- Manages admin user credentials
- Fields include:
  - username
  - password
  - role
  - isActive status
  - lastLogin tracking

### 3. Database Connection (`server/db/connection.js`)
- MongoDB connection setup with error handling
- Connection timeout configurations
- Success/error logging

### 4. Server Routes

#### Authentication Routes (`server/routes/authRoutes.js`)
- Login endpoint with credential validation
- Admin authentication logic
- Password comparison using bcrypt
- Session management
- Login status tracking

#### Blog Routes (`server/routes/blogRoutes.js`)
- CRUD operations for blog posts:
  - GET: Fetch all blogs
  - POST: Create new blog
  - GET /:id: Fetch single blog
  - PUT /:id: Update blog
  - DELETE /:id: Remove blog
- Includes error handling and logging

### 5. Server Configuration (`server/server.js`)
- Express server setup
- Middleware configuration:
  - CORS setup
  - JSON parsing
  - Error handling
- Route integration
- MongoDB connection
- Server initialization

## Frontend Components

### 1. Blog Components

#### Blog List Component (`src/components/blog/BlogList.jsx`)
- Displays grid of blog posts
- Search functionality
- Responsive design
- Video banner integration
- Post filtering capabilities

#### Blog Post Component (`src/components/blog/BlogPost.jsx`)
- Individual blog post display
- Rich text content rendering
- Video banner integration
- Date formatting
- Error handling

#### Blog Admin Component (`src/components/blog/BlogAdmin.jsx`)
- Admin dashboard interface
- Blog post management
- TinyMCE editor integration
- CRUD operations
- Search and filter functionality
- Stats display

#### Blog Editor Component (`src/components/blog/BlogEditor.js`)
- TinyMCE rich text editor integration
- Blog post creation interface
- Image upload capability
- Post publishing functionality

### 2. Styling

#### Blog Styles (`src/components/blog/blog.css`)
- Main blog styling:
  - Post layout
  - Typography
  - Responsive design
  - Hero section styling
  - Content formatting

#### Blog List Styles (`src/components/blog/BlogList.css`)
- Grid layout styling
- Card designs
- Search interface
- Responsive adjustments
- Animation effects

#### Blog Admin Styles (`src/components/blog/BlogAdmin.css`)
- Dashboard layout
- Editor styling
- Post management interface
- Stats display
- Dark mode support

### 3. Custom Components

#### Custom Blots (`src/components/blog/CustomBlots.js`)
- Custom Quill editor components:
  - Featured image with caption
  - Info box component
- Extensible component system

### 4. Authentication

#### Auth Context (`src/context/AuthContext.jsx`)
- Authentication state management
- Login/logout functionality
- Auth status checking
- User context provider

#### Auth Routes (`src/routes/authRoutes.js`)
- JWT authentication implementation
- Login route handling
- Session management
- Security middleware

## Key Features

1. **Content Management**
   - Rich text editing
   - Image uploads
   - Post categorization
   - Draft management

2. **Authentication & Authorization**
   - Secure admin access
   - Role-based permissions
   - Session management
   - JWT implementation

3. **User Interface**
   - Responsive design
   - Search functionality
   - Filtering capabilities
   - Modern dashboard

4. **Security**
   - Password hashing
   - JWT authentication
   - Protected routes
   - Session handling

## Integration Points

1. **Frontend-Backend Communication**
   - API endpoints
   - Error handling
   - Data validation
   - Status codes

2. **Database Interactions**
   - CRUD operations
   - Schema validation
   - Index optimization
   - Error handling

3. **Authentication Flow**
   - Login process
   - Session management
   - Token handling
   - Security measures

## Best Practices

1. **Code Organization**
   - Modular components
   - Clear file structure
   - Consistent naming
   - Separation of concerns

2. **Security**
   - Input validation
   - XSS prevention
   - CSRF protection
   - Secure cookies

3. **Performance**
   - Optimized queries
   - Caching strategies
   - Lazy loading
   - Asset optimization

4. **Error Handling**
   - Consistent error responses
   - Logging
   - User feedback
   - Graceful degradation

## Development Guidelines

1. **Setup Requirements**
   - Node.js environment
   - MongoDB installation
   - Environment variables
   - Required dependencies

2. **Development Workflow**
   - Local setup
   - Testing procedures
   - Code review process
   - Deployment steps

3. **Maintenance**
   - Regular updates
   - Security patches
   - Performance monitoring
   - Backup procedures
