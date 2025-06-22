const express = require('express');
const router = express.Router();

const VERIFY_TOKEN = 'my_secret_token';  // Choose a secret token string, keep it consistent with Facebook app settings

// Verification endpoint - Facebook sends GET request to verify webhook
router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

// Event handler - Facebook sends POST request when new events occur
router.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(entry => {
      const webhookEvent = entry.messaging[0];
      console.log('Webhook event received:', webhookEvent);

      // TODO: Here, process messages or other events and save to Firestore as needed.
      // For example, save message text, sender ID, timestamp, etc.

    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
