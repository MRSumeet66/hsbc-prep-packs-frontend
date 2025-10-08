
import React from 'react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-hsbc-navy text-white p-3 rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-hsbc-red mr-2 p-1 rounded-sm w-6 h-6 flex items-center justify-center">
          <span className="text-xs font-bold">H</span>
        </div>
        <h3 className="font-medium">HSBC Assistant</h3>
      </div>
    </div>
  );
};
