import { useEffect, useState } from "react";

export default function useCursor(event: any) {
  const [modalPosition, setModalPosition] = useState<[number, number]>([0, 0]);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  const getPosition = (event: any) => {
    setModalPosition([event.clientX, event.clientY + scroll]);
    return modalPosition;
  };

  return { getPosition };
}
