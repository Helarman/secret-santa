'use client';

import toast, { ToastBar, Toaster } from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";

const ToasterProvider = () => {
  const Icon = () => {
    return (
      <div className="flex items-center">

      </div>
    )
  }
  return (
    <Toaster
      toastOptions={{
        className: 'dark:bg-indigo-500 dark:text-white ',
        style: {
          borderRadius: 0,
        },
      }}>

      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div
              className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full flex  dark:bg-indigo-500`}
            >

              {message}

              <div className="flex border-l border-gray-200 pl-3">
                <button
                  onClick={() => toast.dismiss(t.id)}
                >
                  <FaXmark size={18} />
                </button>
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster >
  );
}

export default ToasterProvider;
