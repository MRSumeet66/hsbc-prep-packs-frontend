import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { getAllCustomers } from '@/data/mockCustomerData';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const allCustomers = getAllCustomers();

  // Filter customers based on search value
  const filteredCustomers = value.trim()
    ? allCustomers.filter(customer =>
        customer.name.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show dropdown when there are filtered results
  useEffect(() => {
    setShowDropdown(filteredCustomers.length > 0);
    setSelectedIndex(-1);
  }, [value, filteredCustomers.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < filteredCustomers.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredCustomers[selectedIndex]) {
        navigateToCustomer(filteredCustomers[selectedIndex].id);
      } else if (filteredCustomers.length > 0) {
        navigateToCustomer(filteredCustomers[0].id);
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  const navigateToCustomer = (customerId: string) => {
    navigate(`/customer/${customerId}`);
    setShowDropdown(false);
    onChange('');
  };

  return (
    <div className="relative mb-6 animate-in z-50" ref={dropdownRef}>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10">
        <Search className="h-full w-full" />
      </div>
      
      <Input
        placeholder="Search for customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-12 h-14 border-2 focus-visible:ring-hsbc-red shadow-sm bg-card/90 text-base"
      />
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-muted/70 text-xs text-muted-foreground px-2 py-1 rounded z-10">
        {value ? `${filteredCustomers.length} results` : 'Type to search'}
      </div>

      {/* Dropdown with search results */}
      {showDropdown && filteredCustomers.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border-2 border-border rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50">
          {filteredCustomers.map((customer, index) => (
            <div
              key={customer.id}
              className={`p-3 cursor-pointer hover:bg-muted/50 transition-colors border-b border-border/40 last:border-b-0 ${
                index === selectedIndex ? 'bg-muted/50' : ''
              }`}
              onClick={() => navigateToCustomer(customer.id)}
            >
              <div className="font-medium text-sm">{customer.name}</div>
              <div className="text-xs text-muted-foreground">{customer.industry}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
