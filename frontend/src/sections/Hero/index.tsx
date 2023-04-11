import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

import { ConnectKitButton } from "connectkit";

const Hero = () => {
  return (
    <div className={styles.container}>
      <ConnectKitButton />
    </div>
  );
};

export default Hero;
