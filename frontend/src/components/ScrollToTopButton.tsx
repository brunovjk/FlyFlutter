import React, { FunctionComponent, useState, useEffect } from "react";
import classNames from "classnames";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: FunctionComponent<ScrollToTopButtonProps> = ({
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 164);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonClasses = classNames(
    "fixed bottom-4 right-4 bg-blue-500 text-white rounded-full py-2 px-4 shadow-md",
    {
      "opacity-0": !isVisible,
      "opacity-100": isVisible,
    },
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleClick}
      disabled={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
