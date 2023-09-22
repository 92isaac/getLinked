import React, { ReactNode } from "react";
import { Button } from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center mt-[120px] justify-center h-[70%] px-4">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[#1E1E1E] opacity-75"></div>
        </div>

        <div className="relative bg-[#150E28] rounded-lg px-8 py-6">
          {children}
          <Button
              title="Back"
              className="mt-4 pt-2 w-full"
              OnClick={onClose}
            />
        
        </div>
      </div>
    </div>
  );
};

export default Modal;
