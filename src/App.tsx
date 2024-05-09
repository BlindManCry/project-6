import styled from "styled-components";
import { GlobalStyles } from "./Globals";
import GeneretedPassword from "./components/GeneretedPassword";
import GeneretingPassword from "./components/GeneretingPassword";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h2>Password Generator</h2>
        <GeneretedPassword />
        <GeneretingPassword />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  width: 34.3rem;
  margin-top: 6.4rem;

  & > h2 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
    text-align: center;
    color: #817d92;
  }
`;
