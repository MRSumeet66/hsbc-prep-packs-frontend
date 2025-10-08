
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend }) => {
  return (
    <div className="p-3 border-t border-border flex items-center gap-2">
      <Input
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
        className="flex-1"
      />
      <Button 
        onClick={handleSend} 
        size="icon"
        className="bg-hsbc-red hover:bg-hsbc-red/90"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
};
