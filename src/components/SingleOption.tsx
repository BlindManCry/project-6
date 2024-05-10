import styled from "styled-components";
import checkIcon from "/images/icon-check.svg";

type SingleOptionProps = {
  optiontext: string;
};

export default function SingleOption({ optiontext }: SingleOptionProps) {
  return (
    <StyledSingleOption>
      <CheckBox>
        <img src={checkIcon} alt="check-icon" />
      </CheckBox>
      <p>{optiontext}</p>
    </StyledSingleOption>
  );
}

const StyledSingleOption = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
    color: #e6e5ea;
  }

  @media only screen and (min-width: 768px) {
    gap: 2.4rem;

    & > p {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.376rem;
    }
  }
`;

const CheckBox = styled.div`
  width: 2rem;
  height: 2rem;
  background: #a4ffaf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
