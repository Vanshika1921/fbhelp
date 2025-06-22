import React, { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow border rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
}
