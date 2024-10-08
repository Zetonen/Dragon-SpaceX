import { createPortal } from "react-dom";
import { Backdrop, ContentWrap, Wrap } from "./ModalWrap.styled";
import { useEffect, useState } from "react";
const BaseModalWrap = ({ children, onClose }) => {
  const [closing, setClosing] = useState(false);
  document.body.style.overflow = "hidden";
  const CloseModal = (e) => {
    if (
      e.code === "Escape" ||
      e.target === e.currentTarget ||
      e.target.closest("button")?.id === "closeBtn"
    ) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        document.body.style.overflow = "auto";
        onClose();
      }, 750);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add('hide-scroll-bar');

    window.addEventListener("keydown", CloseModal);

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.add('hide-scroll-bar');

      window.removeEventListener("keydown", CloseModal);
    };
  }, []);

  return createPortal(
    <Backdrop id="modalWrap" $closing={closing} onClick={CloseModal}>
      <Wrap>
        <ContentWrap $closing={closing}>{children}</ContentWrap>
      </Wrap>
    </Backdrop>,
    document.querySelector("#popup-root")
  );
};
export default BaseModalWrap;
