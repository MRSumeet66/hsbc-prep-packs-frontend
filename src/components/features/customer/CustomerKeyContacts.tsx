
import React from 'react';
import { CardContent } from '@/components/ui/card';

interface Contact {
  name: string;
  role: string;
  email: string;
  phone: string;
}

interface CustomerKeyContactsProps {
  contacts: Contact[];
}

export const CustomerKeyContacts: React.FC<CustomerKeyContactsProps> = ({ contacts }) => {
  return (
    <CardContent className="pt-0">
      <div className="mt-4 pt-4 border-t border-border/40">
        <h4 className="font-medium mb-2">Contact Details</h4>
        <div className="space-y-3">
          {contacts.map((contact, idx) => (
            <div key={idx} className="pb-2 border-b border-border/30 last:border-0">
              <div className="font-medium">{contact.name}</div>
              <div className="text-muted-foreground text-xs">{contact.role}</div>
              <div className="text-xs mt-1">{contact.email}</div>
              <div className="text-xs">{contact.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  );
};
