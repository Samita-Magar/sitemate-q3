// server/routes/issues.js
const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');

// GET all issues
router.get('/', async (req, res) => {
  const issues = await Issue.findAll();
  res.json(issues);
});

// POST a new issue
router.post('/', async (req, res) => {
  const newIssue = await Issue.create(req.body);
  console.log('Issue Created:', newIssue);
  res.status(201).send(newIssue);
});

// PUT to update an issue by ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  await Issue.update(req.body, { where: { id: id } });
  const updatedIssue = await Issue.findByPk(id);
  console.log('Issue Updated:', updatedIssue);
  res.send(updatedIssue);
});

// DELETE an issue by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Issue.destroy({ where: { id: id } });
  console.log('Issue Deleted:', id);
  res.send({ id });
});

module.exports = router;
