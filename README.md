[![codecov](https://codecov.io/github/Tat-101/bb-assignment-front/branch/main/graph/badge.svg?token=63WH3TP4F0)](https://codecov.io/github/Tat-101/bb-assignment-front)

# BB Assignment - User Management Frontend Application

This repository contains the frontend application for the "BB Assignment". This project is built using React and is designed to provide a user interface for managing users. The application allows users to be added, removed, and deleted, with role-based access control and authentication mechanisms.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Documentation](#documentation)

## Overview

The "BB Assignment" frontend application is part of a larger user management system. This app allows administrators to manage users, including adding, removing, and deleting users. It supports role-based access control, ensuring that only authorized users can perform certain actions. The app also includes authentication features to secure user data.

## Installation

To get started with the project, clone the repository and set up the environment:

```bash
git clone https://github.com/Tat-101/bb-assignment-front.git
cd bb-assignment-front
cp .env.example .env.local
```

After copying the environment variables, you can choose to run the project using either of the following methods:

- **Option 1: Using npm:**
  ```bash
  npm install
  npm start
  ```
- **Option 2: Using Docker Compose:**
  ```bash
  docker-compose up -d
  ```
  This will start all services, including the frontend, backend, and PostgreSQL.

### Prerequisites

Make sure you have the following installed:

- Docker
- [Node.js](https://nodejs.org/) (for running tests or development without Docker)
- [Git](https://git-scm.com/)

## Running the Application

If you used `npm start`, the application will be accessible at `http://localhost:3001`.  
If you used Docker Compose, the application should also be accessible at `http://localhost:3001`.”

## Testing

The project includes a suite of tests to ensure that everything is working as expected. To run the tests:

```bash
npm test
```

The tests will run in continuous integration (CI) mode and generate a coverage report.

## Documentation

For detailed API documentation, visit the [Postman Documentation](https://documenter.getpostman.com/view/1837888/2sA3s4mWNC).
