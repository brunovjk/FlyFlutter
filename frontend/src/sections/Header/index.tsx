import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logo = () => (
    <div className={styles.links}>
      <Link href="/">Logo</Link>
    </div>
  );

  const Links = () => (
    <div className={styles.links}>
      <Link
        href="https://github.com/brunovjk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/brunovjk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      <Link
        href="https://discord.com/channels/@brunovjk#0416"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </Link>
    </div>
  );

  return (
    <header
      className={styles.header}
      style={{ top: scrollPos === 0 ? 0 : -64 }}
    >
      <div className={styles.container}>
        <Logo />
        <Links />
      </div>
    </header>
  );
};

export default Header;
