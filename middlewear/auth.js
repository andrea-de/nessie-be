const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        // No authenticated user
        req.user = null; 
        next();
        return;
    }

    // 'Bearer <token>'
    const token = authHeader.split(' ')[1]; 

    try {
        // Authenticated user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        // Not authenticated user
        req.user = null;
        next();
    }
}

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    };

    const options = {
        expiresIn: '24h' // Example expiration time
    };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = { authenticationMiddleware, generateToken }; 