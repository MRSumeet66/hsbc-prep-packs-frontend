
import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';
import { generateChatResponse } from './ChatResponseGenerator';
import { ChatMessageProps } from './ChatMessage';

interface ChatPanelProps {
  onClose: () => void;
}

export const ChatPanel = ({ onClose }: ChatPanelProps) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      id: '1',
      content: 'Hello! I\'m your HSBC Assistant. How can I help you with customer insights today?',
      isUser: false,
    },
  ]);
  
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: ChatMessageProps = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
    };
    
    setMessages([...messages, userMessage]);
    setInput('');

    // Process user input and generate appropriate response
    setTimeout(() => {
      const response = generateChatResponse(input);
      
      const assistantResponse: ChatMessageProps = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        isUser: false,
        chart: response.chart
      };
      
      setMessages(prev => [...prev, assistantResponse]);
    }, 1000);
  };

  return (
    <div className="w-80 md:w-96 h-[480px] bg-card rounded-lg shadow-lg border border-border flex flex-col animate-in fade-in slide-in-right">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};
