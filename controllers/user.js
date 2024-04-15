const User = require('../models/user');
const { generateToken } = require('../middlewear/auth');

async function signin(req, res) {
    try {
        const user = await User.signin(req.body.email, req.body.password);
        const token = generateToken(user);
        res.status(200).json({ email: user.email, id: user.id, role: user.role, token: token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function signup(req, res) {
    try {
        console.log('req.body: ', req.body);
        const newUser = await User.signup(req.body.email, req.body.password, req.body.role ?? 'normal');
        res.status(201).json('Created')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { signin, signup }
