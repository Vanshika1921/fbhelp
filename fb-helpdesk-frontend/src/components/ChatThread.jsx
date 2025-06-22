// ChatThread.jsx
import React from 'react';

export default function ChatThread({ messages = [] }) {
  return (
    <div className="flex-1 overflow-auto p-4 space-y-3">
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet</p>
      ) : (
        messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-3 py-2 rounded ${
              msg.from === 'agent' ? 'bg-blue-200 self-end' : 'bg-gray-300 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))
      )}
    </div>
  );
}
