import { useEffect } from "react";

const scrollLocks = new Set<string>();
let scrollTopSnapshot = 0;
let isScrollLocked = false;
let prevHtmlOverflow = "";
let prevBodyOverflow = "";
let prevBodyPosition = "";
let prevBodyTop = "";
let prevBodyLeft = "";
let prevBodyRight = "";
let prevBodyWidth = "";
let prevHtmlSnap = "";
let prevBodySnap = "";

const lockScroll = () => {
  if (typeof window === "undefined" || isScrollLocked) return;

  scrollTopSnapshot =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const { body, documentElement } = document;

  // snapshot styles to restore later
  prevHtmlOverflow = documentElement.style.overflow;
  prevBodyOverflow = body.style.overflow;
  prevBodyPosition = body.style.position;
  prevBodyTop = body.style.top;
  prevBodyLeft = body.style.left;
  prevBodyRight = body.style.right;
  prevBodyWidth = body.style.width;
  prevHtmlSnap = (documentElement.style as any).scrollSnapType || "";
  prevBodySnap = (body.style as any).scrollSnapType || "";

  // Prevent background scroll without blocking nested containers
  documentElement.style.overflow = "hidden";
  (documentElement.style as any).scrollSnapType = "none";
  body.style.overflow = "hidden";
  (body.style as any).scrollSnapType = "none";

  isScrollLocked = true;
};

const unlockScroll = () => {
  if (typeof window === "undefined" || !isScrollLocked) return;

  const { body, documentElement } = document;

  // restore previous styles
  documentElement.style.overflow = prevHtmlOverflow;
  (documentElement.style as any).scrollSnapType = prevHtmlSnap;
  body.style.overflow = prevBodyOverflow;
  (body.style as any).scrollSnapType = prevBodySnap;
  body.style.position = prevBodyPosition;
  body.style.top = prevBodyTop;
  body.style.left = prevBodyLeft;
  body.style.right = prevBodyRight;
  body.style.width = prevBodyWidth;

  // restore scroll position
  window.scrollTo(0, scrollTopSnapshot);
  isScrollLocked = false;
};

const syncScrollLockState = () => {
  if (scrollLocks.size > 0) lockScroll();
  else unlockScroll();
};

export const useBodyScrollLock = (locked: boolean, lockId: string) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (locked) {
      scrollLocks.add(lockId);
      syncScrollLockState();
      return () => {
        scrollLocks.delete(lockId);
        syncScrollLockState();
      };
    }

    scrollLocks.delete(lockId);
    syncScrollLockState();

    return () => {
      scrollLocks.delete(lockId);
      syncScrollLockState();
    };
  }, [locked, lockId]);
};
