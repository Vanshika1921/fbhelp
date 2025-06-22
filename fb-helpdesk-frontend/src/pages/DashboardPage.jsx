import React, { useState } from 'react';

export default function DashboardPage() {
  // Simulated conversations data
  const simulatedConversations = [
    {
      id: 'demo-user-1',
      customerName: 'John Doe',
      profilePic: 'https://i.pravatar.cc/150?img=3',
      messages: [
        { from: 'agent', text: 'Hello, I need help with my order.' },
      ],
    },
    {
      id: 'simuser2',
      customerName: 'Alice Walker',
      profilePic: 'https://i.pravatar.cc/150?img=6',
      messages: [
        { from: 'customer', text: 'Do you deliver to Canada?' },
        { from: 'agent', text: 'Yes we do' },
      ],
    },
  ];

  const [conversations, setConversations] = useState(simulatedConversations);
  const [selectedConvId, setSelectedConvId] = useState(simulatedConversations[0].id);
  const [newMessage, setNewMessage] = useState('');

  // Find currently selected conversation
  const selectedConversation = conversations.find(c => c.id === selectedConvId);

  // Handle send message
  const handleSend = () => {
    if (!newMessage.trim()) return;

    // Update conversations state with new message
    setConversations(prev =>
      prev.map(conv =>
        conv.id === selectedConvId
          ? {
              ...conv,
              messages: [...conv.messages, { from: 'agent', text: newMessage.trim() }],
            }
          : conv
      )
    );

    setNewMessage('');
  };

  // Sidebar component
  const Sidebar = ({ conversations, selectedConvId, onSelect }) => {
    return (
      <div>
        {conversations.map(conv => (
          <div
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            style={{
              cursor: 'pointer',
              fontWeight: conv.id === selectedConvId ? 'bold' : 'normal',
              padding: '10px',
              borderBottom: '1px solid #ddd',
              backgroundColor: conv.id === selectedConvId ? '#f0f0f0' : 'transparent',
            }}
          >
            {conv.customerName}
          </div>
        ))}
      </div>
    );
  };

  // ChatThread component
  const ChatThread = ({ messages }) => {
    return (
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        {messages.length === 0 ? (
          <p>No messages</p>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                maxWidth: '70%',
                marginBottom: '8px',
                alignSelf: msg.from === 'agent' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.from === 'agent' ? '#DCF8C6' : '#ECECEC',
                padding: '8px 12px',
                borderRadius: '15px',
              }}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>
    );
  };

  // MessageInput component
  const MessageInput = ({ value, onChange, onSend }) => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
    };

    return (
      <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
        <textarea
          rows={2}
          style={{ width: '100%', resize: 'none', padding: '8px' }}
          placeholder="Type your message..."
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button
          style={{ marginTop: '5px', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={onSend}
        >
          Send
        </button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '25%', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <Sidebar conversations={conversations} selectedConvId={selectedConvId} onSelect={setSelectedConvId} />
      </div>

      {/* Chat Window */}
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        {selectedConversation ? (
          <>
            <ChatThread messages={selectedConversation.messages} />
            <MessageInput
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onSend={handleSend}
            />
          </>
        ) : (
          <p style={{ margin: 'auto', color: '#888' }}>Select a conversation</p>
        )}
      </div>

      {/* Customer Profile */}
      <div style={{ width: '25%', backgroundColor: '#f9f9f9', padding: '20px', textAlign: 'center' }}>
        {selectedConversation ? (
          <>
            <img
              src={selectedConversation.profilePic}
              alt={selectedConversation.customerName}
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h2 style={{ marginTop: '15px' }}>{selectedConversation.customerName}</h2>
            <p style={{ color: '#666' }}>Facebook User</p>
          </>
        ) : (
          <p style={{ color: '#888' }}>No customer selected</p>
        )}
      </div>
    </div>
  );
}
