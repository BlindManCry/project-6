import styled from "styled-components";
import copyIcon from "/images/icon-copy.svg";
import copyHoverIcon from "/images/icon-copy-hover.svg";
import { useState } from "react";

export default function GeneretedPassword() {
  const [isCopyHovered, setIsCopyHoverd] = useState<boolean>(false);

  return (
    <StyledGeneretedPassword>
      <p>P4$5W0rD!</p>
      {!isCopyHovered ? (
        <img
          src={copyIcon}
          alt="copy icon"
          onMouseEnter={() => setIsCopyHoverd(true)}
        />
      ) : (
        <img
          src={copyHoverIcon}
          alt="copy icon"
          onMouseLeave={() => setIsCopyHoverd(false)}
        />
      )}
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
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.224rem;
    color: #e6e5ea;
    opacity: 25%;
  }

  & > img {
    width: 1.75rem;
    width: 2rem;
    cursor: pointer;
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
