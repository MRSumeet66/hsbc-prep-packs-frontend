
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useCustomerBriefing = (customerId: string) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleGeneratePack = () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      toast({
        title: "Briefing Pack Generated",
        description: "The customer briefing pack has been successfully generated.",
      });
    }, 2000);
  };

  // Pre-generate the pack when the component mounts or customerId changes
  useEffect(() => {
    if (!isGenerated && !isGenerating) {
      handleGeneratePack();
    }
  }, [customerId]); // Re-generate when customer ID changes

  return {
    isGenerating,
    isGenerated,
    handleGeneratePack,
  };
};
