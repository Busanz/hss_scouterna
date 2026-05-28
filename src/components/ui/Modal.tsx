"use client";

import { useRef } from "react";

interface ModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ url, isOpen, onClose }: ModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col w-full max-w-6xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="grow w-full h-full bg-gray-100">
          <iframe
            ref={iframeRef}
            src={url}
            title="Embedded Webpage"
            className="w-full h-full border-none"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        <div className="flex items-center  justify-end px-4 py-3 bg-gray-50 border-b border-gray-200">
          <button
            onClick={onClose}
            className="w-36 h-12 bg-black/60 text-white text-xl font-semibold font-['Montserrat'] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.24)] overflow-hidden cursor-pointer hover:bg-secondary-hover transition-colors duration-200"
          >
            Tillbaka
          </button>
        </div>
      </div>
    </div>
  );
}
