require('dotenv').config()
const cors = require('cors');
const express = require('express');

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('OK'));
app.use("/api", require("./routes"));

// const jwt = require('jsonwebtoken');

// ... other setup ...

// Authentication middleware
// app.use((req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         return res.status(401).send('Unauthorized');
//     }

//     const token = authHeader.split(' ')[1]; // Assuming 'Bearer token' format

//     try {
//         const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET);
//         req.user = decoded; // Attach user info to the request 
//         next();
//     } catch (err) {
//         res.status(401).send('Invalid token');
//     }
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});