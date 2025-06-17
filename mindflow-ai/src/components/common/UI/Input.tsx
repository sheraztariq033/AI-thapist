import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string; // For styling the div wrapping label, input, error
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text', // Default type
  error,
  className = '', // This will be passed to the input element itself
  containerClassName = '',
  labelClassName = '',
  inputClassName = '', // Specific classes for input if needed, otherwise use className
  errorClassName = '',
  ...props
}) => {
  const id = useId(); // Generate a unique ID for label-input association

  const baseInputStyle = 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm';
  const errorInputStyle = 'border-red-500 focus:ring-red-500 focus:border-red-500';

  return (
    <div className={`mb-4 ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`
          ${baseInputStyle}
          ${error ? errorInputStyle : ''}
          ${inputClassName || className}
        `}
        {...props}
      />
      {error && (
        <p className={`mt-1 text-xs text-red-600 ${errorClassName}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
