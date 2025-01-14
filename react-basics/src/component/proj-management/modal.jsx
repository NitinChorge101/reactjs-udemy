import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>, document.querySelector("body")
    )
}
)

export default Modal;