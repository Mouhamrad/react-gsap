import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700i&display=swap');
body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`;

export const Hero = styled.div`
  visibility: hidden;
  height: 100vh;
`;

export const Container = styled.div`
  width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
`;

export const HeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  height: 100vh;
`;

export const HeroContent = styled.div`
  width: 50%;
`;
export const HeroContentInner = styled.div`
  width: 400px;
  color: #323232;
  margin: 0 auto;
  h1 {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 24px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    padding-right: 48px;
    margin-bottom: 56px;
  }
`;
export const HeroContentLine = styled.div`
  margin: 0;
  height: 44px;
  overflow: hidden;
`;
export const BtnRow = styled.div`
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 56px;
    height: 1px;
    background: #dfdfdf;
    top: 50%;
    left: -68px;
  }
`;
export const ExploreButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  position: relative;
  &:focus {
    outline: none;
  }
`;
export const ArrowIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007fff;
  height: 48px;
  width: 48px;
  border-radius: 100px;
  margin-left: 16px;
  left: 64px;
  transform-origin: center center;
`;

export const HeroImages = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
export const Girl = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0px;
  width: 45%;
  height: 50%;
`;
export const Boy = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 24px;
  left: 0px;
  width: 52%;
  height: 65%;
`;
