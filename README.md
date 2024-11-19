## Overview 
This project is a Next.js application demonstrating table CRUD operations with filtering and sorting functionality. It integrates Auth0 for user authentication and authorization and uses localStorage for persistent data management. The app is fully responsive and highlights simple scenarios for managing and displaying data.

## Features
 - Crud Operations : Create, read, update, and delete table entries.
 - Filtering & Sorting: Organize large datasets
 - Auth0 Integration: Secure authentication and role-based access control
 - Persistent Storage: Data is stored in browser using localStorage
 - Responsive Design: Mobile & Desktop

## Getting Started

### Prerequisites
- Node.js (>=16.0.0)
- Auth0 account
- Basic understanding of React and NextJs

### Installation

1. Clone the Repo
```bash

git clone https://github.com/cbgithub/nextjs-table-crud-app.git 
```
2. Navigate to the Project Directory

```bash 
cd my-app
```

3. Install Dependencies

```bash 
npm install
```

4. Set up .env.local with Auth0 credentials

```bash 
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```
5. Start the development server:

```bash
npm run dev

```


### Usage

- Open the app in your browser at http://localhost:3000.
- Log in via Auth0 to access CRUD functionality.
- Interact with the table to add, edit, or delete entries.
Changes are saved to localStorage, ensuring persistent data across sessions.
- Use filters and sorting to efficiently organize table content.

### Folder Structure

```bash
src/app/
|-- components/         # Reusable components
|-- api/auth/[auth0]/   # Auth0 routes
|-- employees/          # Employees table components
```



