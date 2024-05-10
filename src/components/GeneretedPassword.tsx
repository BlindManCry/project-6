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
    color: #e6e5ea;
  }

  & > img {
    width: 1.75rem;
    width: 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 1.9rem 3.2rem;
    margin-top: 3.1rem;

    & > p {
      font-size: 3.2rem;
      line-height: 4.224rem;
    }

    & > img {
      width: 2.1rem;
      height: 2.4rem;
    }
  }
`;
