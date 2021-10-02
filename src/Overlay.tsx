import React, { useEffect, useState } from "react";
import debug from "debug";
import { ArwesThemeProvider, StylesBaseline, FrameBox } from "@arwes/core";
import { BleepsProvider } from "@arwes/sounds";
import { AnimatorGeneralProvider } from "@arwes/animation";
import styles from "./Overlay.module.css";
import { listenEvents } from "./streamelements";

const log = debug("overlay");

const SOUND_ASSEMBLE_URL = `${process.env.PUBLIC_URL}/assemble.mp3`;

const animatorGeneral = { duration: { enter: 1000 } };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: "assemble" } };

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
        <BleepsProvider
          audioSettings={audioSettings}
          playersSettings={playersSettings}
          bleepsSettings={bleepsSettings}
        >
          <StylesBaseline />
          <AnimatorGeneralProvider animator={animatorGeneral}>
            <FrameBox
              // @ts-ignore
              className={styles.frameBox}
              animator={{ activate }}
              hover
            />
          </AnimatorGeneralProvider>
        </BleepsProvider>
      </ArwesThemeProvider>
    </div>
  );
}
