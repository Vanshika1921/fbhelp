const express = require('express');
const router = express.Router();
const { getMessages, postMessage } = require('../controllers/messages');

router.get('/:conversationId', getMessages);
router.post('/:conversationId', postMessage);

module.exports = router;
