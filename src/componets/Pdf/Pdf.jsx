import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';
import Blog from '../Blog/Blog';

const Pdf = () => {
    const componentRef = useRef();
    
    const handleDownload = () => {
        const options = {
          orientation: 'portrait',
          unit: 'in',
          format: [8.5, 11],
        };
        const pdfContent = componentRef.current;
        const fileName = 'blog.pdf';
        if (pdfContent) {
          pdfConverter(options, pdfContent, (pdf) => {
            downloadPDF(pdf, fileName);
          });
        }
      };
    return (
        <div>
            <div ref={componentRef}> <Blog></Blog></div>
            <ReactToPdf targetRef={componentRef} filename="blog.pdf">
  {({ toPdf }) => (
    <button onClick={toPdf}>Download as PDF</button>
  )}
</ReactToPdf>
</div>
       
    );
};

export default Pdf;