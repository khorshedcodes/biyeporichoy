import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface ExportOptions {
  fileName?: string;
  quality?: number;
  scale?: number;
}

export const exportToImage = async (
  elementId: string,
  options: ExportOptions = {}
): Promise<string> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element #${elementId} not found`);
  }

  // Create canvas with high DPI scale for crisp text rendering in Bangla & English
  const canvas = await html2canvas(element, {
    scale: options.scale || 2.5,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    imageTimeout: 15000,
    onclone: (clonedDoc) => {
      // Ensure all elements in clone are visible and not constrained by overflow
      const clonedElement = clonedDoc.getElementById(elementId);
      if (clonedElement) {
        clonedElement.style.transform = 'none';
        clonedElement.style.margin = '0';
        clonedElement.style.boxShadow = 'none';
      }
    },
  });

  const dataUrl = canvas.toDataURL('image/png', options.quality || 0.95);
  
  // Trigger download
  const link = document.createElement('a');
  link.download = `${options.fileName || 'marriage-biodata-biyeporichoy'}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return dataUrl;
};

export const exportToPdf = async (
  elementId: string,
  options: ExportOptions = {}
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element #${elementId} not found`);
  }

  const canvas = await html2canvas(element, {
    scale: options.scale || 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    onclone: (clonedDoc) => {
      const clonedElement = clonedDoc.getElementById(elementId);
      if (clonedElement) {
        clonedElement.style.transform = 'none';
        clonedElement.style.margin = '0';
        clonedElement.style.boxShadow = 'none';
      }
    },
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.98);
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const imgWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pageHeight;
  }

  pdf.save(`${options.fileName || 'marriage-biodata-biyeporichoy'}.pdf`);
};

export const triggerPrint = (): void => {
  window.print();
};
