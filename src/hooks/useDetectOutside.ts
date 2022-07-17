import { useEffect } from 'react';

export const useDetectOutsideClick = (
  ref: React.RefObject<HTMLInputElement>,
  handleOutsideClick: (e: Event) => void,
) => {
  useEffect(
    () => {
      const listener = (e: Event) => {
        if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
          return;
        }
        handleOutsideClick(e);
      };

      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    },
    [ref, handleOutsideClick]
  );
};