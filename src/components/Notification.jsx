import { createContext, useContext, useState, useEffect } from "react";

let toastId = 0;

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(message) {
    setToasts((prev) => [...prev, { id: toastId++, message }]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div>{children}</div>

      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
