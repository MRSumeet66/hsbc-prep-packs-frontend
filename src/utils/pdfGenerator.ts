
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CustomerData } from "@/components/features/customer/types/customer-types";

export const generateCustomerPDF = async (customer: CustomerData): Promise<void> => {
  // Create a new PDF document
  const pdf = new jsPDF();
  
  // Add title
  pdf.setFontSize(22);
  pdf.text(`${customer.name} - Customer Brief`, 20, 20);
  
  // Add business info
  pdf.setFontSize(14);
  pdf.text(`Business Type: ${customer.businessType}`, 20, 40);
  pdf.text(`Revenue: ${customer.revenue}`, 20, 50);
  
  // Add description
  pdf.setFontSize(12);
  pdf.text("Business Description:", 20, 70);
  const splitDescription = pdf.splitTextToSize(customer.description, 170);
  pdf.text(splitDescription, 20, 80);
  
  // Add key contacts
  pdf.setFontSize(14);
  pdf.text("Key Contacts:", 20, 120);
  let contactY = 130;
  customer.keyContacts.forEach(contact => {
    pdf.setFontSize(12);
    pdf.text(`${contact.name} - ${contact.role}`, 20, contactY);
    pdf.text(`${contact.email} | ${contact.phone}`, 20, contactY + 7);
    contactY += 20;
  });
  
  // Add products
  pdf.setFontSize(14);
  pdf.text("Active Products:", 20, contactY + 10);
  let productY = contactY + 20;
  customer.products.filter(p => p.status === 'active').forEach(product => {
    pdf.setFontSize(12);
    pdf.text(`${product.name} - $${product.revenue.toLocaleString()}`, 20, productY);
    productY += 10;
  });
  
  // Try to capture charts if they exist
  try {
    const chartsContainer = document.querySelector('#customer-charts');
    if (chartsContainer) {
      const canvas = await html2canvas(chartsContainer as HTMLElement);
      const imgData = canvas.toDataURL('image/png');
      // Add to a new page
      pdf.addPage();
      pdf.text("Customer Analytics", 20, 20);
      pdf.addImage(imgData, 'PNG', 15, 40, 180, 100);
    }
  } catch (err) {
    console.error("Failed to capture charts:", err);
  }
  
  // Save the PDF
  pdf.save(`${customer.name.replace(/\s+/g, '-')}-Brief.pdf`);
};
