import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string; // For the main card container
  titleClassName?: string; // For the title element
  bodyClassName?: string; // For the card body area
  footer?: React.ReactNode; // Optional footer content
  footerClassName?: string; // For the footer element
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  titleClassName = '',
  bodyClassName = '',
  footer,
  footerClassName = ''
}) => {
  const baseCardStyle = 'bg-white shadow-lg rounded-lg overflow-hidden';
  const baseTitleStyle = 'px-6 py-4 text-xl font-semibold text-gray-800 border-b border-gray-200';
  const baseBodyStyle = 'px-6 py-4';
  const baseFooterStyle = 'px-6 py-3 bg-gray-50 border-t border-gray-200';

  return (
    <div className={`${baseCardStyle} ${className}`}>
      {title && (
        <div className={`${baseTitleStyle} ${titleClassName}`}>
          {title}
        </div>
      )}
      <div className={`${baseBodyStyle} ${bodyClassName}`}>
        {children}
      </div>
      {footer && (
        <div className={`${baseFooterStyle} ${footerClassName}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
