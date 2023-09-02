import { useEffect, useState } from "react";
import useCursor from "./hook/useCursor";

function Cursor() {
  return (
    <div
      style={{
        position: "relative",
        // cursor: "none",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "100%",
          backgroundColor: "green",
          position: "absolute",
          // left: `${modalPosition[0]}px`,
          // top: `${modalPosition[1]}px`,
          transform: "translate(-50%, -50%)",
          transition: "0.3s ease-out",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}

export default Cursor;
