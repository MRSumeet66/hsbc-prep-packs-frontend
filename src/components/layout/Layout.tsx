
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { ChatButton } from '@/components/features/chat/ChatButton';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      {/* Hexagonal background patterns */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5 hexagon-bg" />
      
      <Header />
      <main className="flex-1 container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 relative z-10 max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      
      {/* Chat Button positioned at bottom right */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <ChatButton />
      </div> */}
    </div>
  );
};
