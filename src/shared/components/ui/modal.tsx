import * as React from "react";
import { cn } from "@/lib/utils";

const Modal = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "modal fade z-[9999] bg-black/50 p-[12px] sm:p-[16px] md:p-[60px_30px] backdrop-blur-[5px]",
        className
      )}
      {...props}
    />
  )
);
Modal.displayName = "Modal";

const ModalDialog = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("modal-dialog w-full mx-auto max-w-[930px]", className)}
      {...props}
    />
  )
);
ModalDialog.displayName = "ModalDialog";

const ModalContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "modal-content relative z-[1] mx-auto rounded-xl border-none bg-white p-[16px] shadow-sm sm:p-[30px] md:p-[32px]",
        className
      )}
      {...props}
    />
  )
);
ModalContent.displayName = "ModalContent";

const ModalHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("modal-header border-none p-0", className)}
      {...props}
    />
  )
);
ModalHeader.displayName = "ModalHeader";

const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    data-bs-dismiss="modal"
    aria-label="Close"
    className={cn(
      "rbt-round-btn absolute -right-5 -top-5 z-10 flex h-10 w-10 items-center justify-center bg-transparent text-base text-gray-900 opacity-100 transition-all hover:text-gray-900 focus:outline-none",
      className
    )}
    {...props}
  >
    <i className="fa-solid fa-xmark" />
  </button>
));
ModalCloseButton.displayName = "ModalCloseButton";

export { Modal, ModalDialog, ModalContent, ModalHeader, ModalCloseButton };
