const express = require('express');
const api = require('./api');
const router = express.Router();

// ROUTES
const getAll = (req, res) => res.json(api.get());
const getOne = (req, res) => res.json([]);
const add = (req, res) => res.json([]);
const patch = (req, res) => res.json([]);
const done = (req, res) => res.json([]);
const remove = (req, res) => res.json([]);

// EXPRESS
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', add);
router.patch('/:id', patch);
router.patch('/:id/done', done);
router.delete('/:id', remove);

module.exports = router;
