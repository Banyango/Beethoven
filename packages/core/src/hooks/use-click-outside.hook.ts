import {RefObject, useEffect} from "react";

/**
 * Hook for detecting click outside of the given ref.
 * @param ref        Ref to check for click outside.
 * @param handler    The handler to call.
 */
export const useClickOutside = (ref: RefObject<any>, handler: (event: Event) => void) =>
{
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler])
}
