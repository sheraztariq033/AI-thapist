import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl'; // For modal width
  className?: string; // Custom class for the modal content itself
  overlayClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
  overlayClassName = '',
  titleClassName = '',
  bodyClassName = '',
  footerClassName = '',
  closeButtonClassName = ''
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${overlayClassName}`}
      onClick={onClose} // Close on overlay click
    >
      <div
        className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out ${sizeStyles[size]} w-full ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Modal Header */}
        {title && (
          <div className={`px-6 py-4 border-b border-gray-200 flex justify-between items-center ${titleClassName}`}>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className={`text-gray-400 hover:text-gray-600 focus:outline-none ${closeButtonClassName}`}
              aria-label="Close modal"
            >
              {/* Simple X icon, consider using an SVG icon component later */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        )}
        {!title && ( // Add a close button even if there's no title, positioned top-right
          <div className="absolute top-0 right-0 pt-4 pr-4">
             <button
                 onClick={onClose}
                 className={`text-gray-400 hover:text-gray-600 focus:outline-none ${closeButtonClassName}`}
                 aria-label="Close modal"
             >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
          </div>
        )}

        {/* Modal Body */}
        <div className={`p-6 ${bodyClassName}`}>
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className={`px-6 py-4 bg-gray-50 border-t border-gray-200 text-right ${footerClassName}`}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Use a portal to render the modal at the body level
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
     // Create modal-root if it doesn't exist
     const newModalRoot = document.createElement('div');
     newModalRoot.setAttribute('id', 'modal-root');
     document.body.appendChild(newModalRoot);
     modalRoot = newModalRoot;
  }
  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
