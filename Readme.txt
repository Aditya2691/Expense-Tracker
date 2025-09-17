Expense Management API

This is a backend API's for managing income and expenses with User Registration and user Login API. It allows authenticated users to add, update, delete, and retrieve their income and expenses. The API provides endpoints for handling common operations related to managing income and expenses like title, amount, categories, description, and the date of the same.

Table of Contents

Technologies

Installation

Usage

API Endpoints

Add Income
Add Expense

Delete Expense
Delete Income

Update Income
Update Expense

Get Income
Get Expenses

License

Technologies

Node.js: JavaScript runtime used to build the server.

Express.js: Web framework for Node.js to handle API routes.

MongoDB: NoSQL database to store expense data.

Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.

JWT Authentication: For securing endpoints and authenticating users.

Installation
Step 1: Clone the repository
git clone https://github.com/yourusername/expense-management-api.git
cd expense-management-api

Step 2: Install dependencies

Ensure you have Node.js
 and npm
 installed, then run:

npm install

Step 3: Set up environment variables

Create a .env file in the root directory and add your MongoDB connection string and JWT secret key:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Usage

Start the server:

npm start


The API will be available at http://localhost:5000 by default.

API Endpoints for Income

1. Add Income

Route: POST /api/incomes

Description: Adds a new income record for the authenticated user.

Request Body:

{
  "title": "Salary",
  "amount": 2500.00,
  "categories": ["Salary", "Full-time"],
  "description": "Monthly salary payment",
  "date": "2023-09-17"
}


Response:

{
  "success": true,
  "message": "Income added",
  "data": {
    "_id": "unique_id",
    "userId": "user_id",
    "title": "Salary",
    "amount": 2500.00,
    "categories": ["Salary", "Full-time"],
    "description": "Monthly salary payment",
    "date": "2023-09-17"
  }
}


Authentication: Required (JWT token)

2. Delete Income

Route: DELETE /api/incomes/:id

Description: Deletes an income record by its ID.

Response:

{
  "success": true,
  "message": "Income deleted",
  "deletedIncome": {
    "_id": "income_id",
    "title": "Salary",
    "amount": 2500.00,
    "categories": ["Salary", "Full-time"],
    "description": "Monthly salary payment",
    "date": "2023-09-17"
  }
}


Authentication: Required (JWT token)

3. Update Income

Route: PUT /api/incomes/:id

Description: Updates an existing income record by its ID.

Request Body:

{
  "title": "Updated Salary",
  "amount": 3000.00,
  "categories": ["Salary", "Full-time"],
  "description": "Updated monthly salary",
  "date": "2023-09-18"
}


Response:

{
  "success": true,
  "message": "Income updated",
  "data": {
    "_id": "unique_id",
    "title": "Updated Salary",
    "amount": 3000.00,
    "categories": ["Salary", "Full-time"],
    "description": "Updated monthly salary",
    "date": "2023-09-18"
  }
}


Authentication: Required (JWT token)

4. Get Income

Route: GET /api/incomes

Description: Retrieves all income records for the authenticated user.

Response:

{
  "success": true,
  "data": [
    {
      "_id": "income_id",
      "title": "Salary",
      "amount": 2500.00,
      "categories": ["Salary", "Full-time"],
      "description": "Monthly salary payment",
      "date": "2023-09-17"
    },
    {
      "_id": "income_id_2",
      "title": "Freelance Work",
      "amount": 500.00,
      "categories": ["Freelance", "Part-time"],
      "description": "Freelance project payment",
      "date": "2023-09-18"
    }
  ]
}


Authentication: Required (JWT token)


API Endpoints for Expense

1. Add Expense

Route: POST /api/expenses

Description: Adds a new expense for the authenticated user.

Request Body:

{
  "title": "Lunch",
  "amount": 15.50,
  "categories": ["Food"],
  "description": "Lunch with friends",
  "date": "2023-09-17"
}


Response:

{
  "success": true,
  "message": "Expense added",
  "data": {
    "_id": "unique_id",
    "userId": "user_id",
    "title": "Lunch",
    "amount": 15.50,
    "categories": ["Food"],
    "description": "Lunch with friends",
    "date": "2023-09-17"
  }
}


Authentication: Required (JWT token)

2. Delete Expense

Route: DELETE /api/expenses/:id

Description: Deletes an expense by its ID.

Response:

{
  "success": true,
  "message": "Expense deleted",
  "deletedExpense": {
    "_id": "expense_id",
    "title": "Lunch",
    "amount": 15.50,
    "categories": ["Food"],
    "description": "Lunch with friends",
    "date": "2023-09-17"
  }
}


Authentication: Required (JWT token)

3. Update Expense

Route: PUT /api/expenses/:id

Description: Updates an existing expense by its ID.

Request Body:

{
  "title": "Updated Lunch",
  "amount": 20.00,
  "categories": ["Food"],
  "description": "Lunch with family",
  "date": "2023-09-18"
}


Response:

{
  "success": true,
  "message": "Expense updated",
  "data": {
    "_id": "unique_id",
    "title": "Updated Lunch",
    "amount": 20.00,
    "categories": ["Food"],
    "description": "Lunch with family",
    "date": "2023-09-18"
  }
}


Authentication: Required (JWT token)

4. Get Expenses

Route: GET /api/expenses

Description: Retrieves all expenses for the authenticated user.

Response:

{
  "success": true,
  "data": [
    {
      "_id": "expense_id",
      "title": "Lunch",
      "amount": 15.50,
      "categories": ["Food"],
      "description": "Lunch with friends",
      "date": "2023-09-17"
    },
    {
      "_id": "expense_id_2",
      "title": "Coffee",
      "amount": 5.00,
      "categories": ["Food"],
      "description": "Coffee with colleagues",
      "date": "2023-09-18"
    }
  ]
}


Authentication: Required (JWT token)

License

This project is licensed under the MIT License.

📚 Additional Notes

Ensure that you have MongoDB running, or use a cloud solution like MongoDB Atlas.

JWT Authentication is required for protected endpoints. Make sure the client sends a valid token in the Authorization header.