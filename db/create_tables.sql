    CREATE TYPE status_enum AS ENUM ('active', 'investigating', 'archived');

    CREATE TYPE role_enum AS ENUM ('normal', 'authorized');

    CREATE TABLE polygons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        coordinates double precision[][]; NOT NULL,
        notes TEXT,
        status status_enum NOT NULL DEFAULT 'active',
        create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_by VARCHAR(255),
        modified_by VARCHAR(255)   
    );

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,  
        role role_enum NOT NULL DEFAULT 'normal',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );