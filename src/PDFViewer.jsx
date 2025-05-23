// PDFViewer.jsx
import React from 'react';
import {Worker, Viewer, SpecialZoomLevel} from '@react-pdf-viewer/core';
// only pull in the core styles (no default-layout CSS)
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFViewer({ fileUrl }) {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js" style={{background: 'transparent'}}>
            {/*
              wrap in a container to size it (100% width + height):
              you can adjust height as needed
            */}
            <div
                style={{
                    width: '50%',      // ← set your desired width
                    height: '100%',     // ← set your desired height
                    margin: '0 auto',    // center it horizontally
                    background: 'transparent'
                }}>
                <Viewer fileUrl={fileUrl}
                        defaultScale={SpecialZoomLevel.PageWidth}/>
            </div>
        </Worker>
    );
}
