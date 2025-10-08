
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, UserRound } from 'lucide-react';

export interface ChatMessageProps {
  id: string;
  content: string;
  isUser: boolean;
  chart?: React.ReactNode;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser, chart }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} gap-2 items-start`}>
      {!isUser && (
        <Avatar className="h-8 w-8 bg-hsbc-navy">
          <AvatarFallback className="bg-hsbc-navy text-white">H</AvatarFallback>
        </Avatar>
      )}
      
      <div 
        className={`max-w-[85%] rounded-lg p-3 ${
          isUser 
            ? 'bg-hsbc-red text-white' 
            : 'bg-muted'
        }`}
      >
        {content}
        {chart}
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 bg-gray-100">
          <AvatarFallback>
            <UserRound className="h-5 w-5 text-gray-500" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
