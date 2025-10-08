
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  RadioGroup, 
  RadioGroupItem 
} from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { FileText, Presentation } from 'lucide-react';

interface FormatSelectionDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFormat: string;
  setSelectedFormat: React.Dispatch<React.SetStateAction<string>>;
  onConfirm: () => void;
}

export const FormatSelectionDialog: React.FC<FormatSelectionDialogProps> = ({
  open,
  setOpen,
  selectedFormat,
  setSelectedFormat,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download Format</DialogTitle>
          <DialogDescription>
            Select your preferred format for the customer briefing pack.
          </DialogDescription>
        </DialogHeader>
        
        <RadioGroup value={selectedFormat} onValueChange={setSelectedFormat} className="py-4">
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="pdf" id="pdf" />
            <Label htmlFor="pdf" className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-600" />
              PDF Document
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ppt" id="ppt" />
            <Label htmlFor="ppt" className="flex items-center gap-2">
              <Presentation className="h-5 w-5 text-orange-600" />
              PowerPoint Presentation
            </Label>
          </div>
        </RadioGroup>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={onConfirm}>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
