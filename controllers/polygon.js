const Polygon = require('../models/polygon.js');
const { authenticationMiddleware } = require('../middlewear/auth');

async function create(req, res) {
    try {
        console.log('req.body: ', req.body);
        // const created = await Polygon.create(req.body.name, req.body.coordinates, req.body.notes);
        const created = await Polygon.create(req.body);
        res.status(201).json(created)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

async function read(req, res) {
    try {
        const polygon = await Polygon.read(req.body.id);
        res.status(200).json(polygon)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function readAll(req, res) {
    try {
        const polygons = await Polygon.readAll();
        res.status(200).json(polygons);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

async function update(req, res) {
    try {
        const { id, coordinates, status, notes, modified_by } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Polygon ID is required' });
        }

        if (!coordinates && !status && !notes && !modified_by) {
            return res.status(400).json({ error: 'At least one of coordinates, status, notes, or modified_by is required' });
        }

        const updateData = { id, coordinates, status, notes, modified_by };

        const updatedPolygon = await Polygon.update(updateData);

        return res.status(200).json(updatedPolygon);
    } catch (error) {
        console.error('error: ', error);
        return res.status(400).json({ error: error.message });
    }
}


async function updateCoordinates(req, res, authenticationMiddleware) {
    try {
        const polygon = Polygon.fetchPolygon(req.body.id);
        const user = req.user;

        if (!user) res.status(401).json({ error: 'Unauthorized' });

        if (user.id == polygon.created_by) {
            await Polygon.editCoordinates(req.body.coordinates, 'User updated coordinates');
        } else if (user.role == 'authorized') {
            await Polygon.editCoordinates(req.body.coordinates, 'Authorized user updated coordinates');
        }
        res.status(200).json('Edited')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function updateStatus(req, res, authenticationMiddleware) {
    try {
        const polygon = Polygon.fetchPolygon(req.body.id);
        const user = req.user;

        if (!user) res.status(401).json({ error: 'Unauthorized' });
        if (!req.body.status || !req.body.note) res.status(400).json({ error: 'Status and Note needed for Status Update' });
        else if (user.role == 'authorized') res.status(403).json({ error: 'Insufficient permissions' });

        await Polygon.update(req.body.coordinates, req.body.notes);

        res.status(200).json('Updated')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function updateCoordinates(req, res, authenticationMiddleware) {
    try {
        const user = await Polygon.update(req.body.email, req.body.password);
        res.status(200).json({ email: user.email, id: user.id, role: user.role, token: token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = { create, read, readAll, update, updateCoordinates, updateStatus }
