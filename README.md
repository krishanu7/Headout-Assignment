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

    Example Requests:
    Get entire file content:
    ```
    http://localhost:8080/data?n=1
    ```
    
    Get content at a specific line:
    ```
    http://localhost:8080/data?n=1&m=5
    ```
