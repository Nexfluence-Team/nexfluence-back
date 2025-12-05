const Contact = require('../models/contact');

/**
 * POST /api/contact
 * Save a new contact message
 */
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, message: 'name, email and message are required' });
    }

    const contact = await Contact.create({ name, email, phone, subject, message });
    return res.status(201).json({ ok: true, data: contact });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/contact
 * Return all contacts (this should be protected for admin)
 */
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, data: contacts });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/contact/:id
 * Return a single contact by ID
 */
exports.getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ ok: false, message: 'Contact not found' });
    }

    res.json({ ok: true, data: contact });
  } catch (err) {
    next(err);
  }
};

/**
 * PATCH /api/contact/:id
 * Update status (seen/archived)
 */
exports.updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const contact = await Contact.findByIdAndUpdate(id, update, { new: true });
    if (!contact) return res.status(404).json({ ok: false, message: 'Not found' });

    res.json({ ok: true, data: contact });
  } catch (err) {
    next(err);
  }
};
