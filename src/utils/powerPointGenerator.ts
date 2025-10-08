
import PptxGenJS from "pptxgenjs";
import { CustomerData } from "@/components/features/customer/types/customer-types";

export const generateCustomerPowerPoint = async (customer: CustomerData): Promise<void> => {
  // Create a new presentation
  const pres = new PptxGenJS();
  
  // Add title slide
  let slide = pres.addSlide();
  slide.addText(
    `${customer.name} - Customer Brief`, 
    { x: 0.5, y: 1.0, w: 9, h: 1.5, fontSize: 28, color: "363636", bold: true, align: "center" }
  );
  slide.addText(
    `Generated on ${new Date().toLocaleDateString()}`, 
    { x: 0.5, y: 2.5, w: 9, h: 0.5, fontSize: 14, color: "666666", align: "center" }
  );
  
  // Add business overview slide
  slide = pres.addSlide();
  slide.addText("Business Overview", { x: 0.5, y: 0.5, w: 9, h: 0.5, fontSize: 24, color: "363636", bold: true });
  slide.addText([
    { text: "Business Type: ", options: { bold: true } },
    { text: customer.businessType }
  ], { x: 0.5, y: 1.5, w: 9, h: 0.5, fontSize: 14 });
  slide.addText([
    { text: "Revenue: ", options: { bold: true } },
    { text: customer.revenue }
  ], { x: 0.5, y: 2.0, w: 9, h: 0.5, fontSize: 14 });
  slide.addText([
    { text: "Description: ", options: { bold: true } },
    { text: customer.description }
  ], { x: 0.5, y: 2.5, w: 9, h: 2.0, fontSize: 14 });
  
  // Add key contacts slide
  slide = pres.addSlide();
  slide.addText("Key Contacts", { x: 0.5, y: 0.5, w: 9, h: 0.5, fontSize: 24, color: "363636", bold: true });
  
  let contactsData = [];
  customer.keyContacts.forEach((contact) => {
    contactsData.push([
      contact.name,
      contact.role,
      contact.email,
      contact.phone
    ]);
  });
  
  slide.addTable(
    [
      ["Name", "Role", "Email", "Phone"],
      ...contactsData
    ],
    { x: 0.5, y: 1.5, w: 9, colW: [2, 2, 3, 2], fontSize: 12 }
  );
  
  // Add products slide
  slide = pres.addSlide();
  slide.addText("Active Products", { x: 0.5, y: 0.5, w: 9, h: 0.5, fontSize: 24, color: "363636", bold: true });
  
  let productsData = [];
  customer.products.filter(p => p.status === 'active').forEach((product) => {
    productsData.push([
      product.name,
      `$${product.revenue.toLocaleString()}`,
      product.onboardDate
    ]);
  });
  
  slide.addTable(
    [
      ["Product", "Revenue", "Onboard Date"],
      ...productsData
    ],
    { x: 0.5, y: 1.5, w: 9, colW: [3, 3, 3], fontSize: 12 }
  );
  
  // Save the presentation
  const fileName = `${customer.name.replace(/\s+/g, '-')}-Brief.pptx`;
  await pres.writeFile({ fileName });
};
