"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface SidePanelProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function SidePanel({
  children,
  isOpen,
  onClose,
  title,
}: SidePanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const closeOnKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.body.classList.add("drawer-open");
    window.addEventListener("keydown", closeOnKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", closeOnKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[180]">
          <motion.button
            type="button"
            className="absolute inset-0 cursor-pointer border-0 bg-[rgb(10_7_11_/_62%)]"
            aria-label={`Close ${title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            className="absolute top-0 right-0 bottom-0 w-[min(720px,92vw)] overflow-auto bg-paper"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={prefersReducedMotion ? false : { x: "102%" }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: "102%" }}
            transition={{ duration: 0.42, ease: [0.2, 0.75, 0.2, 1] }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute top-[18px] right-[18px] z-4 grid size-11 cursor-pointer place-items-center rounded-full border border-white/70 bg-[rgb(10_7_11_/_28%)] text-white"
              aria-label={`Close ${title}`}
              onClick={onClose}
            >
              <X aria-hidden="true" size={23} />
            </button>
            <span
              id={titleId}
              className="absolute size-px overflow-hidden p-0 [clip:rect(0,0,0,0)] whitespace-nowrap border-0"
            >
              {title}
            </span>
            {children}
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
