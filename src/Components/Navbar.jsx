import { useState } from "react";
import styled from "styled-components";
import { Menu, Close } from "@mui/icons-material";
import "./navbar.css";

const Wrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in;
  align-items: center;
  a {
    color: ${(param) => (param.offset > 100 ? "#000" : "#fff")};
  }
  padding: ${(param) => (param.offset > 100 ? "12px 0" : "30px 0")};
  @media screen and (max-width: 1000px) {
    max-width: 90%;
  }
  @media screen and (min-width: 500px) {
    padding: ${(param) => (param.offset > 100 ? "20px 0" : "30px 0")};
  }
`;

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const [offset, setOffset] = useState(0);
  window.onscroll = () => {
    setOffset(window.pageYOffset);
  };

  const true_Check = () => {
    if (!check) {
      setCheck(true);
    }
  };
  const false_Check = () => {
    if (check) {
      setCheck(false);
    }
  };

  return (
    <div
      className="nav_container"
      style={{
        boxShadow:
          offset > 100 ? "0px 10px 30px -20px #bdbdbd" : "0 0 0px 0px #000",
        background: offset > 100 ? "#fff" : "transparent",
      }}
    >
      <Wrapper offset={offset}>
        <div className="left">
          <img className="logo_img" src="./assets/official_logo.png" alt="" />
          <span className="logo_txt">
            <a href="#home">CodewithAaryan</a>
          </span>
        </div>
        <div className={check ? "right right_change" : "right"}>
          <div className="menu_item" onClick={() => setCheck(false)}>
            <a href="#home">Home</a>
          </div>
          <div className="menu_item" onClick={() => setCheck(false)}>
            <a href="#about">About</a>
          </div>
          <div className="menu_item" onClick={() => setCheck(false)}>
            <a href="#skill">Skill</a>
          </div>
          <div className="menu_item" onClick={() => setCheck(false)}>
            <a href="#service">Service</a>
          </div>
          <div className="menu_item" onClick={() => setCheck(false)}>
            <a href="#contact">Contact me</a>
          </div>
          <div className="icon_box">
            <Menu
              className={check && "menu_icon"}
              onClick={true_Check}
              style={{ color: offset > 100 ? "#000" : "#fff" }}
            />
            <Close className={!check && "close_icon"} onClick={false_Check} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
