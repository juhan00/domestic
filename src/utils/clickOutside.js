import { useEffect } from "react";

export const clickOutside = (ref, isOpen, setIsOpen) => {
  useEffect(() => {
    const checkOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkOutside);

    return () => {
      document.removeEventListener("mousedown", checkOutside);
    };
  }, [isOpen]);
};
