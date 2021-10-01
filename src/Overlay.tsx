import React, { useEffect } from "react";
import styles from "./Overlay.module.css";
import { listenEvents } from "./streamelements";

export function Overlay() {
  useEffect(() => {
    listenEvents();
  }, []);
  return (
    <div>
      <div className={styles.text}>hello world</div>
    </div>
  );
}
