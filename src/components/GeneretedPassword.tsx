import styled from "styled-components";
import copyIcon from "/images/icon-copy.svg";

export default function GeneretedPassword() {
  return (
    <StyledGeneretedPassword>
      <p>PTx1f5DaFX</p>
      <img src={copyIcon} alt="copy icon" />
    </StyledGeneretedPassword>
  );
}

const StyledGeneretedPassword = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  padding: 1.7rem 1.55rem 1.5rem 1.6rem;
  background: #24232c;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-family: JetBrains Mono;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.168rem;
  }

  & > img {
    width: 1.75rem;
    width: 2rem;
  }
`;
