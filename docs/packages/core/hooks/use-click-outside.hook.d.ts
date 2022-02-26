import { RefObject } from "react";
/**
 * Hook for detecting click outside of the given ref.
 * @param ref        Ref to check for click outside.
 * @param handler    The handler to call.
 */
export declare const useClickOutside: (ref: RefObject<any>, handler: (event: Event) => void) => void;
