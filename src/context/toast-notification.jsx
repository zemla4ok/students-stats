import React, { createContext, useContext, useState } from 'react';

export const SEVERITY = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
}

export const ToastNotificationContext = createContext(undefined);

export const ToastNotificationProvider= ({ children }) => {
  const [message, setMessage] = useState('');
  const value = {
    message,
    setMessage,
  };

  return (
    <ToastNotificationContext.Provider value={value}>
      {children}
    </ToastNotificationContext.Provider>
  );
};

export function useToastNotification() {
  const context = useContext(ToastNotificationContext);
  if (context === undefined) {
    throw new Error('useToastNotification must be used within a ToastNotificationProvider');
  }

  return { message: context.message, setMessage: context.setMessage };
}
