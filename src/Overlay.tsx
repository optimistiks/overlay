import React, { useEffect, useState } from "react";
import debug from "debug";
import { ArwesThemeProvider, StylesBaseline, FrameBox } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import styles from "./Overlay.module.css";
import { listenEvents } from "./streamelements";

const log = debug("overlay");

const animatorGeneral = { duration: { enter: 1000 } };

export function Overlay() {
  const [data, setData] = useState(null);
  const [activate, setActivate] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setActivate(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

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
    <div className={styles.root}>
      <ArwesThemeProvider>
        <StylesBaseline />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <div className={styles.grid}>
            <div className={styles.grid__camera}>
              {/* @ts-ignore */}
              <FrameBox
                // @ts-ignore
                className={styles.frameBox}
                animator={{ activate }}
                hover
              >
                camera
              </FrameBox>
            </div>
            <div className={styles.grid__topbar}>
              {/* @ts-ignore */}
              <FrameBox
                // @ts-ignore
                className={styles.frameBox}
                animator={{ activate }}
                hover
              >
                topbar
              </FrameBox>
            </div>
            <div className={styles.grid__sidebar}>
              {/* @ts-ignore */}
              <FrameBox
                // @ts-ignore
                className={styles.frameBox}
                animator={{ activate }}
                hover
              >
                sidebar
              </FrameBox>
            </div>
            <div className={styles.grid__video}>
              {/* @ts-ignore */}
              <FrameBox
                // @ts-ignore
                className={styles.frameBox}
                animator={{ activate }}
                hover
              >
                video
              </FrameBox>
            </div>
          </div>
        </AnimatorGeneralProvider>
      </ArwesThemeProvider>
    </div>
  );
}
