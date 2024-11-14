import {useEffect, useRef} from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode
}

export default function Modal({openModal, closeModal, children}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal])
  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="flex justify-end">
        <button className="p-1" onClick={closeModal}><AiOutlineClose/></button>
      </div>
      {children}
    </dialog>
  );
}
