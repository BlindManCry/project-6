import styled from "styled-components";
import ChooseStrength from "./ChooseStrength";
import ForceCalculation from "./ForceCalculation";
import ArrowRight from "/images/icon-arrow-right.svg";

export default function GeneretingPassword() {
  return (
    <StyledGeneretingPassword>
      <LengthCounter>
        <p>Character Length</p>
        <span>10</span>
      </LengthCounter>
      <input type="range" min={8} max={20} />
      <ChooseStrength />
      <ForceCalculation />
      <GenerateButton>
        <span>GENERATE</span>
        <img src={ArrowRight} alt="arrow-right-icon" />
      </GenerateButton>
    </StyledGeneretingPassword>
  );
}

const StyledGeneretingPassword = styled.div`
  margin-top: 1.6rem;
  padding: 1.6rem;
  background: #24232c;

  & > input {
    width: 100%;
    margin-top: 1.6rem;
    accent-color: #a4ffaf;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2.4rem;
    padding: 2.4rem 3.2rem 3.2rem 3.2rem;
  }
`;

const LengthCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
    color: #e6e5ea;
  }

  & > span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.168rem;
    color: #a4ffaf;
  }

  @media only screen and (min-width: 768px) {
    & > p {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.376rem;
    }

    & > span {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.224rem;
    }
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: 1.8rem 0rem 1.7rem 0rem;
  background: #a4ffaf;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.6rem;
  font-family: inherit;

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
    color: #24232c;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 3.2rem;
    padding: 2.1rem 0rem 2.1rem 0rem;

    & > span {
      font-size: 1.8rem;
      line-height: 2.376rem;
    }
  }
`;
