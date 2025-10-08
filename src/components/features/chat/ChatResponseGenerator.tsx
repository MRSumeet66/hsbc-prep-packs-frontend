
import React from 'react';
import { ChatMessageProps } from './ChatMessage';

export const generateChatResponse = (userInput: string): Omit<ChatMessageProps, 'id' | 'isUser'> => {
  const lowerInput = userInput.toLowerCase();
  let responseContent = '';
  let chart: React.ReactNode | undefined;

  // Analyze input and generate appropriate response with chart if needed
  if (lowerInput.includes('revenue') || lowerInput.includes('sales')) {
    responseContent = "Based on the customer's revenue data for the past 6 months, there has been a 12% increase in overall sales. The most significant growth has been in the Trade Finance products.";
    chart = (
      <div className="mt-3 bg-muted/50 p-3 rounded-md">
        <div className="mb-2 text-xs font-medium">Monthly Revenue (Last 6 months)</div>
        <div className="flex items-end h-32 gap-1">
          {[65, 82, 76, 85, 92, 110].map((value, index) => (
            <div 
              key={index} 
              className="flex-1 bg-hsbc-red/80 rounded-t"
              style={{ height: `${value * 0.25}%` }}
              title={`Month ${index + 1}: £${value}k`}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    );
  } else if (lowerInput.includes('products') || lowerInput.includes('services')) {
    responseContent = "This customer currently uses 4 main products: Retail Payments (40%), Trade Finance (30%), Business Loans (20%), and Corporate Cards (10%).";
    chart = (
      <div className="mt-3 bg-muted/50 p-3 rounded-md">
        <div className="mb-2 text-xs font-medium">Product Distribution</div>
        <div className="flex items-center h-12 w-full">
          <div style={{ width: '40%' }} className="h-full bg-hsbc-red" title="Retail Payments: 40%"></div>
          <div style={{ width: '30%' }} className="h-full bg-hsbc-red/80" title="Trade Finance: 30%"></div>
          <div style={{ width: '20%' }} className="h-full bg-hsbc-red/60" title="Business Loans: 20%"></div>
          <div style={{ width: '10%' }} className="h-full bg-hsbc-red/40" title="Corporate Cards: 10%"></div>
        </div>
        <div className="flex text-xs text-muted-foreground mt-1 justify-between">
          <div>Retail Payments (40%)</div>
          <div>Trade Finance (30%)</div>
          <div>Business Loans (20%)</div>
          <div>Cards (10%)</div>
        </div>
      </div>
    );
  } else if (lowerInput.includes('risk') || lowerInput.includes('compliance')) {
    responseContent = "The customer's risk assessment shows a low risk profile with all compliance requirements met. Their credit score is in the top quartile for businesses in their sector.";
    chart = (
      <div className="mt-3 bg-muted/50 p-3 rounded-md">
        <div className="mb-2 text-xs font-medium">Risk Assessment</div>
        <div className="h-24 w-full">
          <div className="relative h-6 w-full bg-gray-200 rounded-full mt-2">
            <div className="absolute top-0 left-0 h-6 rounded-full bg-green-500" style={{ width: '80%' }}></div>
            <div className="absolute top-1 left-3 text-white text-xs font-bold">80/100 - Low Risk</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-xs text-muted-foreground">
              <div className="font-medium">Compliance Status</div>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>All requirements met</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <div className="font-medium">Credit Score</div>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Top quartile (A+)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (lowerInput.includes('contact') || lowerInput.includes('call')) {
    responseContent = "The primary contact for this customer is John Smith, CFO. Phone: +44 123 456 7890. Email: john.smith@acmecorp.com. Last contact was 12 days ago regarding trade finance options.";
  } else {
    responseContent = "I'm looking into that for you. The Customer Intelligence Platform can help you find detailed insights about your customers, including revenue data, product utilization, and experience metrics. Can you specify what aspect of the customer you're interested in?";
  }

  return {
    content: responseContent,
    chart
  };
};
