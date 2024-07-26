"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import { revalidatePath } from "next/cache";
export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    if (!dialogRef.current?.open && modal === "true") {
      dialogRef.current?.showModal();
    }
  }, [modal]);
  console.log(dialogRef);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="absolute h-screen w-screen bg-black/90 p-4"
      onClose={onDismiss}
    >
      <button onClick={onDismiss} className="close-button text-2xl text-white">
        x
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
}
