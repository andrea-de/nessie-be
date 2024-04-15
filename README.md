# Mapbox User and Polygon Backend Service

This Node.js backend service provides a RESTful API for creating, retrieving, updating, and deleting polygon and user data designed to integrate seamlessly with a Mapbox-powered React application.

### Key Features:

#### User Authentication:
- Secure user registration and login.
- Authentication middleware for protecting API routes.

#### Polygon Management:
- Create new polygons with associated names, notes, and status attributes.
- Retrieve polygon data, including geoJSON coordinates for rendering on Mapbox maps.
- Update existing polygon information.

#### Database Integration:
- Assumes a PostgreSQL database. ([instructions]()).

## Requirements

1. Configuired Supabase Database
    - [Schemas]()

2. Created .env file in the project root with the following variables.
    - SUPABASE_URL 
    - SUPABASE_ANON_KEY
    - JWT_SECRET


## API

### User Endpoints

| METHOD | ROUTE | Description | Authorization |
| ----------- | ----------- | ----------- | ----------- |
| POST | api/users/signup | Register a new user | public |
| POST | api/users/signin | Log in a user (returns JWT) | public | |


### Polygon Endpoints

| METHOD | ROUTE | Description | Authorization |
| ----------- | ----------- | ----------- | ----------- |
| GET | api/polygons/all | Retrieve a list of all polygons | public  |
| GET | api/polygons/read/:id | Retrive signle polygon | public  |
| POST | api/polygons/create | Create polygon | user  |
| PUT | api/polygons/coordinate | Update coordinates | user or superuser  |
| PUT | api/polygons/status | Update status | superuser |

## Additional Notes
Link to [React Frontend](https://github.com/andrea-de/nessie-fe) 

### TODO

Consider adding input validation.
Implement more robust error handling.