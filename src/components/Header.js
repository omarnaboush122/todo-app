import { useEffect, useState } from "react";
import NewTask from "./NewTask";

const Header = ({ toggleMode, dark }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeImage = () => {
    let backgroundImage;
    if (dark) {
      windowWidth >= 768
        ? (backgroundImage = {
            backgroundImage: "url(./images/bg-desktop-dark.jpg)",
          })
        : (backgroundImage = {
            backgroundImage: "url(./images/bg-mobile-dark.jpg)",
          });
    } else {
      windowWidth >= 768
        ? (backgroundImage = {
            backgroundImage: "url(./images/bg-desktop-light.jpg)",
          })
        : (backgroundImage = {
            backgroundImage: "url(./images/bg-mobile-light.jpg)",
          });
    }
    return backgroundImage;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="header" style={changeImage()}>
      <div className="top">
        <h1>Todo</h1>
        <img
          src={`./images/icon-${dark ? "sun" : "moon"}.svg`}
          alt="sun"
          onClick={toggleMode}
        />
      </div>
      <NewTask/>
    </header>
  );
};

export default Header;
