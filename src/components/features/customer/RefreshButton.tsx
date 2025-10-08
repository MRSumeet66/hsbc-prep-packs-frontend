
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useParams } from 'react-router-dom';
import { getMockCustomerData } from '@/data/mockCustomerData';
import { FormatSelectionDialog } from './FormatSelectionDialog';
import { generateCustomerPDF } from '@/utils/pdfGenerator';
import { generateCustomerPowerPoint } from '@/utils/powerPointGenerator';

interface RefreshButtonProps {
  isGenerating: boolean;
  onRefresh: () => void;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ isGenerating, onRefresh }) => {
  const [open, setOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string>("pdf");
  const { toast } = useToast();
  const { customerId } = useParams<{ customerId: string }>();
  
  const handleDownload = () => {
    setOpen(true);
  };

  const handleGeneratePDF = async () => {
    toast({
      title: "Generating PDF...",
      description: "Please wait while we prepare your document.",
    });
    
    try {
      const customer = getMockCustomerData(customerId || '1');
      await generateCustomerPDF(customer);
      
      toast({
        title: "PDF Downloaded",
        description: "Your customer brief has been saved as a PDF.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleGeneratePowerPoint = async () => {
    toast({
      title: "Generating PowerPoint...",
      description: "Please wait while we prepare your presentation.",
    });
    
    try {
      const customer = getMockCustomerData(customerId || '1');
      await generateCustomerPowerPoint(customer);
      
      toast({
        title: "PowerPoint Downloaded",
        description: "Your customer brief has been saved as a PowerPoint presentation.",
      });
    } catch (error) {
      console.error("Error generating PowerPoint:", error);
      toast({
        title: "Error",
        description: "Failed to generate PowerPoint. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleConfirm = () => {
    setOpen(false);
    
    if (selectedFormat === "pdf") {
      handleGeneratePDF();
    } else if (selectedFormat === "ppt") {
      handleGeneratePowerPoint();
    }
    
    onRefresh();
  };

  return (
    <>
      <Button 
        size="sm"
        className="shadow-sm bg-hsbc-red hover:bg-hsbc-red/90 transition-all duration-300 flex items-center gap-1"
        onClick={handleDownload}
        disabled={isGenerating}
      >
        <Download className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
        <span className="text-xs">Download</span>
      </Button>

      <FormatSelectionDialog
        open={open}
        setOpen={setOpen}
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
        onConfirm={handleConfirm}
      />
    </>
  );
};
