
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="relative mb-6 animate-in">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground">
        <Search className="h-full w-full" />
      </div>
      
      <Input
        placeholder="Search for customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-14 border-2 focus-visible:ring-hsbc-red shadow-sm bg-card/90 text-base"
      />
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-muted/70 text-xs text-muted-foreground px-2 py-1 rounded">
        {value ? 'Press Enter' : 'Type to search'}
      </div>
    </div>
  );
};
