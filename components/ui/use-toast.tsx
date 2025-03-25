import { toast } from 'sonner'; // Import the default export as toast
import React from 'react';

const ToastExample = () => {

  const handleShowToast = () => {
    toast('Hello from Sonner!');
  };

    const handleShowActionToast = () => {
        toast.success("Your message has been sent.", {
            action: {
                label: "Undo",
                onClick: () => {
                    toast("Action undone", { duration: 2000 });
                },
            },
        });
    };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
            <button onClick={handleShowActionToast}>Show Action Toast</button>
    </div>
  );
};

export default ToastExample;
