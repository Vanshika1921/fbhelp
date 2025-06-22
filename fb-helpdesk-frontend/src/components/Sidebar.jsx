import React from 'react';
import ConversationList from './ConversationList';

export default function Sidebar({ conversations, selectedConvId, onSelect }) {
  return (
    <div className="h-full overflow-auto">
      <ConversationList
        conversations={conversations}
        selectedConvId={selectedConvId}
        onSelect={onSelect}
      />
    </div>
  );
}
