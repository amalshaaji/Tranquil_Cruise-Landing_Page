"use client";

import { useEffect, useRef } from "react";
import { Eyebrow, Heading } from "@/components/ui/Heading";

/** Native <dialog> in the site's card style: opens as soon as it mounts, calls onClose when dismissed. */
export function Modal({
  eyebrow,
  title,
  onClose,
  children,
}: {
  eyebrow: string;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.showModal();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[92vh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto rounded-soft border border-stone bg-paper p-0 text-ink backdrop:bg-ink/50"
    >
      <div className="flex items-start justify-between gap-6 border-b border-stone/70 px-5 py-6 sm:px-8">
        <div>
          <Eyebrow className="mb-2">{eyebrow}</Eyebrow>
          <Heading as="h3" id="modal-title">
            {title}
          </Heading>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={() => ref.current?.close()}
          className="-mr-3 -mt-2 grid size-12 shrink-0 place-items-center text-mist transition-colors hover:text-ink"
        >
          <svg viewBox="0 0 20 20" className="size-5 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>
      </div>
      {children}
    </dialog>
  );
}
