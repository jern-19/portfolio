import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import restaurantRatingReport from "../../assets/pdf/restaurantRatingReport.pdf"

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Report() {
   const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(800);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setPageWidth(Math.min(width, 900));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        background: "#000",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Document
          file={restaurantRatingReport}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div
              key={index}
              style={{
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <Page
                pageNumber={index + 1}
                width={pageWidth}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}