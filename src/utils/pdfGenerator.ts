import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generateWebsitePDF = async (): Promise<void> => {
  try {
    // Show loading state
    const loadingElement = document.createElement('div');
    loadingElement.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        font-family: Inter, sans-serif;
      ">
        <div style="text-align: center;">
          <div style="
            width: 40px;
            height: 40px;
            border: 4px solid #3b82f6;
            border-top: 4px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
          "></div>
          <p style="font-size: 18px; margin: 0;">Generating Professional CV...</p>
          <p style="font-size: 14px; margin: 8px 0 0; opacity: 0.8;">Creating high-quality PDF</p>
        </div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </div>
    `;
    document.body.appendChild(loadingElement);

    // Store original theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Temporarily switch to light mode for better PDF
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    }

    // Wait for theme change to apply
    await new Promise(resolve => setTimeout(resolve, 100));

    // Get the main content container
    const mainContent = document.querySelector('main');
    if (!mainContent) {
      throw new Error('Main content not found');
    }

    // Create a temporary container for PDF generation
    const pdfContainer = document.createElement('div');
    pdfContainer.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: 210mm;
      background: white;
      font-family: 'Inter', sans-serif;
      color: #1f2937;
      line-height: 1.6;
      padding: 0;
      margin: 0;
    `;

    // Clone and prepare content for PDF
    const sections = Array.from(mainContent.children) as HTMLElement[];
    
    sections.forEach((section, index) => {
      const sectionClone = section.cloneNode(true) as HTMLElement;
      
      // Apply PDF-specific styles
      sectionClone.style.cssText = `
        background: white !important;
        color: #1f2937 !important;
        padding: 30px 40px !important;
        margin: 0 !important;
        page-break-inside: avoid;
        ${index > 0 ? 'border-top: 1px solid #e5e7eb;' : ''}
      `;

      // Fix all text colors and backgrounds
      const allElements = sectionClone.querySelectorAll('*');
      allElements.forEach((el: any) => {
        el.style.background = 'transparent';
        el.style.backgroundColor = 'transparent';
        
        // Handle text colors
        if (el.classList.contains('text-white') || 
            el.classList.contains('dark:text-white') ||
            el.style.color === 'white' ||
            el.style.color === 'rgb(255, 255, 255)') {
          el.style.color = '#1f2937';
        }
        
        // Handle headings
        if (el.tagName && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
          el.style.color = '#1f2937';
          el.style.fontWeight = 'bold';
        }

        // Handle gradients and special backgrounds
        if (el.classList.contains('bg-gradient-to-br') || 
            el.classList.contains('bg-gradient-to-r') ||
            el.style.background.includes('gradient')) {
          el.style.background = 'white';
          el.style.backgroundColor = 'white';
        }

        // Handle buttons and interactive elements
        if (el.tagName === 'BUTTON' || el.classList.contains('btn')) {
          el.style.background = '#3b82f6';
          el.style.color = 'white';
          el.style.border = '1px solid #3b82f6';
          el.style.borderRadius = '6px';
          el.style.padding = '8px 16px';
        }

        // Handle skill bars and progress elements
        if (el.style.background && el.style.background.includes('blue')) {
          el.style.background = '#3b82f6';
        }

        // Remove dark mode classes
        el.classList.remove('dark:bg-gray-900', 'dark:bg-gray-800', 'dark:text-white', 'dark:text-gray-300');
      });

      // Special handling for hero section
      if (index === 0) {
        sectionClone.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)';
        sectionClone.style.minHeight = 'auto';
        sectionClone.style.padding = '40px';
      }

      pdfContainer.appendChild(sectionClone);
    });

    document.body.appendChild(pdfContainer);

    // Generate PDF
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: pdfContainer.scrollWidth,
      height: pdfContainer.scrollHeight,
      onclone: (clonedDoc) => {
        // Ensure all fonts are loaded in the cloned document
        const clonedContainer = clonedDoc.querySelector('div');
        if (clonedContainer) {
          clonedContainer.style.fontFamily = 'Inter, system-ui, sans-serif';
        }
      }
    });

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    const contentHeight = pageHeight - (margin * 2);

    // Calculate image dimensions
    const imgWidth = contentWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add content to PDF
    let yPosition = margin;
    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    if (imgHeight <= contentHeight) {
      // Content fits on one page
      pdf.addImage(imgData, 'JPEG', margin, yPosition, imgWidth, imgHeight);
    } else {
      // Content needs multiple pages
      let remainingHeight = imgHeight;
      let sourceY = 0;

      while (remainingHeight > 0) {
        const currentPageHeight = Math.min(remainingHeight, contentHeight);
        
        // Create canvas for current page
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');
        pageCanvas.width = canvas.width;
        pageCanvas.height = (currentPageHeight * canvas.width) / imgWidth;

        if (pageCtx) {
          pageCtx.fillStyle = 'white';
          pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          
          pageCtx.drawImage(
            canvas,
            0, (sourceY * canvas.width) / imgWidth,
            canvas.width, pageCanvas.height,
            0, 0,
            canvas.width, pageCanvas.height
          );

          const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95);
          
          if (sourceY > 0) {
            pdf.addPage();
          }
          
          pdf.addImage(pageImgData, 'JPEG', margin, margin, imgWidth, currentPageHeight);
        }

        remainingHeight -= currentPageHeight;
        sourceY += currentPageHeight;
      }
    }

    // Add header and footer to all pages
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      
      // Header
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      pdf.text('Sayed Hussein - Senior Application Support Engineer & Developer', margin, 8);
      
      // Footer
      pdf.setFontSize(8);
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 5);
      pdf.text('Generated from: https://sayedhussein-portfolio.netlify.app', margin, pageHeight - 5);
    }

    // Clean up
    document.body.removeChild(pdfContainer);
    document.body.removeChild(loadingElement);

    // Restore original theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    // Save PDF
    pdf.save('Sayed_Hussein_Professional_CV.pdf');

  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Clean up on error
    const loadingElement = document.querySelector('[style*="position: fixed"]');
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }

    // Restore theme on error
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Show user-friendly error
    alert('Unable to generate PDF at the moment. Please try again or contact me directly for my CV.');
  }
};