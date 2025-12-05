const express = require('express');
const router = express.Router();

const { 
  createContact, 
  getContacts, 
  getContactById,   // ← added
  updateContact 
} = require('../controllers/contactController');

// Public: create a contact
router.post('/', createContact);

// Admin endpoints (in production protect these with auth middleware)
router.get('/', getContacts);

// Get single contact
router.get('/:id', getContactById);   // ← added

router.patch('/:id', updateContact);

module.exports = router;
