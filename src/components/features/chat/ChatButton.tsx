
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatPanel } from './ChatPanel';

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <Button 
        onClick={toggleChat}
        className="shadow-md bg-hsbc-red hover:bg-hsbc-red/90 transition-all duration-300 flex items-center gap-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span>AI Agent</span>
      </Button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 z-50" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-14 right-0 z-[60]">
            <ChatPanel onClose={() => setIsOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
};
