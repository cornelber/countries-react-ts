import React from 'react'

interface ErrorMessageProps {
    error: string;
  }

  const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    return (
      <div className="fixed bottom-4 left-4 bg-red-500 text-white px-6 py-4 rounded shadow-lg z-50 max-w-xs">
        <span className="font-bold">Error: </span>
        <span>{error}</span>
      </div>
    );
  };

export default ErrorMessage