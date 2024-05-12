import styled from "styled-components";
import checkIcon from "/images/icon-check.svg";
import { useState } from "react";
import { useGenerator } from "../context/GeneratorContext";

type SingleOptionProps = {
  optiontext: string;
  currentOption: string;
  setCheckboxCounter: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

export default function SingleOption({
  optiontext,
  currentOption,
  setCheckboxCounter,
  index,
}: SingleOptionProps) {
  const [isChecked, setIsChecked] = useState<string>("");

  const { setIsInclude, setChoosenIndexes } = useGenerator();

  const handleUnCheck = () => {
    setIsChecked("");
    setCheckboxCounter((count: number) => count - 1);
    setIsInclude((include: string[]) =>
      include.filter((option) => option !== currentOption)
    );
    setChoosenIndexes((curIndex: number[]) =>
      curIndex.filter((item) => item !== index)
    );
  };

  const handleCheck = () => {
    setIsChecked(currentOption);
    setCheckboxCounter((count: number) => count + 1);
    setIsInclude((include: string[]) => [...include, currentOption]);
    setChoosenIndexes((curIndex: number[]) => [...curIndex, index]);
  };

  return (
    <StyledSingleOption>
      {isChecked === currentOption ? (
        <CheckBox onClick={handleUnCheck}>
          <img src={checkIcon} alt="check-icon" />
        </CheckBox>
      ) : (
        <EmptyCheckbox onClick={handleCheck}></EmptyCheckbox>
      )}

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
  cursor: pointer;
`;

const EmptyCheckbox = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid #e6e5ea;
  cursor: pointer;
`;
