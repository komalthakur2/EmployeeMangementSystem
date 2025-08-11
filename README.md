# Employee Management System

A full-stack React application for employee data with CRUD operations.

## Features

- Manage employees: Create, Read, Update, Delete.
- Responsive React frontend built with React.js.
- Backend REST API using Spring Boot and Java.
- Data persistence with MySQL database.
- API testing using Hoppscotch.
- Development in VS Code and Spring Tool Suite.

## Tech Stack

- **Frontend:** React.js, JavaScript  
- **Backend:** Java, Spring Boot  
- **Database:** MySQL  
- **API Testing:** Hoppscotch  
- **IDE:** VS Code, Spring Tool Suite  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Java 21  
- Maven (or use Maven wrapper)  
- MySQL installed and running  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/komalthakur2/EmployeeMangementSystem.git
   cd EmployeeMangementSystem
Run the backend server:

bash
Copy
Edit
cd backend
./mvnw spring-boot:run
In a new terminal, run the frontend:

bash
Copy
Edit
cd ../frontend
npm install
npm start
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
to access the React frontend.

API Endpoints (Backend)
Testable in Hoppscotch or any API client

Method	Endpoint	Description
GET	/api/v1/employees	Get all employees

POST	/api/v1/employees	Add a new employee

GET	/api/v1/employees/{id}	Get employee by ID

PUT	/api/v1/employees/{id}	Update employee

DELETE	/api/v1/employees/{id}	Delete employee

Tools Used
Hoppscotch for API testing and debugging

VS Code for frontend and backend development

Spring Tool Suite for Spring Boot backend development

Author
KOMAL KUMARI THAKUR
