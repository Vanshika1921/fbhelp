import React from 'react';

export default function ConversationList({ conversations = [], selectedConvId, onSelect }) {
  return (
    <div>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          className={`p-3 cursor-pointer border-b flex items-center gap-3 ${
            selectedConvId === conv.id ? 'bg-blue-100' : 'hover:bg-gray-50'
          }`}
        >
          <img
            src={conv.profilePic}
            alt={conv.customerName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold">{conv.customerName}</div>
            <div className="text-sm text-gray-600">{conv.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
