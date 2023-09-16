# User-Product-Manager

## Project overview

The  User-Product-Manager is a powerful Node.js application that provides robust user authentication and seamless product management through a secure RESTful API. This versatile application empowers users to effortlessly handle e-commerce operations, including user registration, authentication, and product management.

Key Features
User Registration and Authentication:

*Users can securely register and log in.
JWT (JSON Web Token) ensures authentication with data privacy and security.
Product Management:

*Create, retrieve products.
Implement efficient product pagination for streamlined data handling.
Secure API Access:

*JWT tokens are mandatory for API access, ensuring authorized product management.
Tokens are time-limited, enhancing security.
MongoDB Integration:

*MongoDB serves as the backend database for product storage.
Provides scalable and robust data management.


## Requirements

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed.
- MongoDB or MySQL database set up and running.
- Postman or a similar API testing tool for interaction.

## Project Structure

The project follows an MVC (Model-View-Controller) structure:

- **Controller:** Handles request and response logic.
- **Routes:** Define API endpoints.
- **Services:** Contains business logic and interacts with the database.
- **Models:** Define data structures and schemas.
- **Middleware:** Provides authentication and validation.
- **Schemas:** Include validation schemas for data.

## Getting Started

To set up and run the Appointment Scheduling Application on your local machine, follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

   2. **Install Dependencies**

   Navigate to the project directory:

   ```bash
   cd User-Product-Manager
   ```

   Next, install the project dependencies using npm (Node Package Manager). Run the following command:

   ```bash
   npm install
   ```

   This will download and install all the required packages and modules specified in the `package.json` file.

3. **Configure MongoDB**

   The project relies on MongoDB as its database. You'll need to set up a MongoDB database and configure the connection URL in the project.

   - If you don't have MongoDB installed locally, you can install it by following the instructions on the [MongoDB website](https://docs.mongodb.com/manual/installation/).

   - Once MongoDB is installed, you can create a new database and obtain the connection URL.

   - Update the MongoDB connection URL in the `server.js` file in your project directory. Look for the following line and replace it with your database URL:

     ```javascript
     mongoose.connect('mongodb+srv://pr639490:UDrbjfu9Je9NudWr@cluster0.oed5ort.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

4. **Start the Server**

   After configuring the database, you can start the server by running the following command:

   ```bash
   npm start
   ```

   This command will start the Node.js server, and you should see a message indicating that the server is running on a specific port (e.g., `Server is running on port 3000`).

5. **Testing the API**

Test the API endpoints using Postman or similar tools:

1.User Registration: POST http://localhost:3000/api/auth/register
2.User Login: POST http://localhost:3000/api/auth/login
3.Create a New Product: POST http://localhost:3000/api/products
4.Retrieve Products with Pagination: GET http://localhost:3000/api/products?page=1&limit=10