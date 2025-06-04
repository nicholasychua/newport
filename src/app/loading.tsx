'use client';
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-sans">
      <span className="text-base text-muted-foreground tracking-tight mb-2 font-medium" style={{ letterSpacing: '-0.01em' }}>
        Gathering information about Nick…
      </span>
      {/* Animated three dots using Tailwind CSS */}
      <div className="flex items-center justify-center h-6 mt-1 mb-2 space-x-1">
        <span className="dot bg-primary/80" />
        <span className="dot bg-primary/60 animation-delay-200" />
        <span className="dot bg-primary/40 animation-delay-400" />
      </div>
      <style>{`
        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin: 0 3px;
          border-radius: 50%;
          background: #64748b;
          animation: blink 1s infinite both;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
} 