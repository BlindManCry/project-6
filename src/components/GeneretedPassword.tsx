import styled from "styled-components";
import copyIcon from "/images/icon-copy.svg";
import copyHoverIcon from "/images/icon-copy-hover.svg";
import { useState } from "react";
import { useGenerator } from "../context/GeneratorContext";

export default function GeneretedPassword() {
  const [isCopyHovered, setIsCopyHoverd] = useState<boolean>(false);

  const {
    isPasswordGenereted,
    generetedPassword,
    isLoading,
    setIsTextCopied,
    isTextCopied,
  } = useGenerator();

  const handleCopy = () => {
    if (generetedPassword === "") return;
    navigator.clipboard.writeText(generetedPassword);
    setIsTextCopied(true);
  };

  return (
    <StyledGeneretedPassword>
      {isLoading && <LoadingText>Genereting...</LoadingText>}
      {!isLoading && !isPasswordGenereted && (
        <DefaultInput>P4$5W0rD!</DefaultInput>
      )}
      {!isLoading && isPasswordGenereted && (
        <Password>{generetedPassword}</Password>
      )}

      <CopyDiv>
        {isTextCopied && <p>Copied</p>}
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
            onClick={handleCopy}
          />
        )}
      </CopyDiv>
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

  @media only screen and (min-width: 768px) {
    padding: 1.9rem 3.2rem;
    margin-top: 3.1rem;

    & > p {
      font-size: 3.2rem;
      line-height: 4.224rem;
    }
  }
`;

const DefaultInput = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.168rem;
  color: #e6e5ea;
  opacity: 25%;
`;

const Password = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.168rem;
  color: #e6e5ea;
  opacity: 1;
`;

const LoadingText = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.168rem;
  color: #e6e5ea;
  opacity: 1;
`;

const CopyDiv = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  & > p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.376rem;
    color: #a4ffaf;
  }

  & > img {
    width: 1.75rem;
    width: 2rem;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    & > img {
      width: 2.1rem;
      height: 2.4rem;
    }
  }
`;
