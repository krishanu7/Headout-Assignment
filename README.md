# Headout Assignment

## Overview

This project is a simple HTTP server that handles GET requests on the endpoint `/data`. The server accepts two query parameters, `n` (file name) and `m` (line number), and responds with the content of the specified file at the given line number or the entire file content if only the file name is provided.

## Tech Stack

- Node.js
- Express.js
- Docker

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Headout-assignment.git
   cd Headout-assignment
   ```
2. Build the Docker image:
   ```
   docker build -t http-server .
   ```
3. Run the Docker container:
   ```
   docker run -p 8080:8080 http-server
   ```

## Endpoints
   Get entire file content:
    ```
    http://localhost:8080/data?n=1
    ```
    <img width="1381" alt="Screenshot 2024-01-26 at 4 40 07 PM" src="https://github.com/krishanu7/Headout-Assignment/assets/93394632/d3e96c73-c6c8-4c1c-9640-0a7dbf6fe614">

   Get content at a specific line:
    ```
    http://localhost:8080/data?n=1&m=5
    ```
    <img width="1381" alt="Screenshot 2024-01-26 at 4 29 47 PM" src="https://github.com/krishanu7/Headout-Assignment/assets/93394632/c76cc5d9-dc4e-41dd-9a13-0b51748a980f">
