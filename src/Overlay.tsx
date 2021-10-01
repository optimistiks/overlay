import React, { useEffect, useState } from "react";
import debug from "debug";
import styles from "./Overlay.module.css";
import { listenEvents } from "./streamelements";

const log = debug("overlay");

export function Overlay() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (window.onWidgetLoadInitialData) {
      log("found data in window, %O", { data: window.onWidgetLoadInitialData });
      setData(window.onWidgetLoadInitialData);
    } else {
      log("put setData to window");
      window.initOverlay = setData;
    }
    listenEvents();
  }, []);
  useEffect(() => {
    log("data is updated %O", data);
  }, [data]);
  return (
    <div>
      <div className={styles.text}>hello world</div>
    </div>
  );
}
