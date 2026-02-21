import * as React from "react";
import { useUIStore } from "@/store/useUIStore";
import { Button } from "./Button";

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ id, title, children }: ModalProps) => {
  const { activeModal, closeModal } = useUIStore();

  if (activeModal !== id) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden border border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-heading font-semibold text-lg">{title}</h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
