exports.getMessages = async (req, res) => {
  const db = req.app.get('db');
  const { conversationId } = req.params;

  try {
    const snapshot = await db
      .collection('conversations')
      .doc(conversationId)
      .collection('messages')
      .get();

    const messages = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
};

exports.postMessage = async (req, res) => {
  const db = req.app.get('db');
  const { conversationId } = req.params;
  const { from, text } = req.body;

  try {
    await db
      .collection('conversations')
      .doc(conversationId)
      .collection('messages')
      .add({
        from,
        text,
        timestamp: new Date().toISOString(),
      });

    res.status(201).json({ message: 'Message sent' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};
