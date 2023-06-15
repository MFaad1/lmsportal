import React, { useEffect } from 'react';

const AlertPopup = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getAlertClasses = () => {
    let classes = 'p-4 rounded-lg text-white text-sm font-medium';

    if (type === 'success') {
      classes += ' bg-green-500';
    } else if (type === 'warning') {
      classes += ' bg-yellow-500';
    } else if (type === 'error') {
      classes += ' bg-red-500';
    }

    return classes;
  };

  return (
    <div className="fixed top-0 right-0 m-4">
      <div className={getAlertClasses()}>
        {message}
      </div>
    </div>
  );
};

export default AlertPopup;
