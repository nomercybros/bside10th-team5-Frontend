import React from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import LogoIcon from "../elements/LogoIcon";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GNB_H, WHITE, GRAY100 } from "../../styles/theme";
import { isLoggedInState } from "../../state";
import useAutoLogin from "../../hooks/useAutoLogin";
import { removeCookie } from "../../utills/cookie";

const GnbWrapper = styled.header.attrs((props) => ({
  isVisible: props.isVisible,
}))`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${GNB_H}px;
  padding: 20px 40px;
  background-color: ${WHITE};
  border-bottom: 1px solid ${GRAY100};
  transform: ${(props) => (props.isVisible ? "translateY(0%)" : "translateY(-100%)")};
  transition: all 400ms ease-in-out 0s;
  & button {
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const Gnb = ({ isVisible }) => {
  useAutoLogin();

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const onClick = (e) => {
    const { value } = e.currentTarget;
    if (value === "list-page") router.push("/memories");
    if (value === "logo") router.push("/");
    if (value === "logout") {
      removeCookie("token");
      setIsLoggedIn(false);
    }
    if (value === "login") {
      router.push("/login");
    }
  };

  return (
    <GnbWrapper isVisible={isVisible}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={onClick} value="logo">
          <LogoIcon />
        </button>
        <button className="subtitle-2" value="list-page" onClick={onClick} style={{ marginLeft: "3.75rem" }}>
          회고록 리스트
        </button>
      </div>
      <div>
        <button className="subtitle-2" value={isLoggedIn ? "logout" : "login"} onClick={onClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </div>
    </GnbWrapper>
  );
};

export default Gnb;

Gnb.propTypes = {
  isVisible: PropTypes.bool,
};
