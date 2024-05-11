import styled from "styled-components";
import SingleOption from "./SingleOption";
import { useEffect } from "react";
import { useGenerator } from "../context/GeneratorContext";

export default function ChooseStrength() {
  const { setPasswordStrength, checkboxCounter, setCheckboxCounter } =
    useGenerator();

  useEffect(() => {
    if (checkboxCounter === 1) {
      setPasswordStrength("too weak");
    } else if (checkboxCounter === 2) {
      setPasswordStrength("weak");
    } else if (checkboxCounter === 3) {
      setPasswordStrength("medium");
    } else if (checkboxCounter === 4) {
      setPasswordStrength("strong");
    } else if (checkboxCounter === 0) {
      setPasswordStrength("none");
    }
  }, [checkboxCounter, setPasswordStrength]);

  return (
    <StyledChoosenStrength>
      <SingleOption
        optiontext="Include Uppercase Letters"
        currentOption="uppercase"
        setCheckboxCounter={setCheckboxCounter}
      />
      <SingleOption
        optiontext="Include Lowercase Letters"
        currentOption="lowercase"
        setCheckboxCounter={setCheckboxCounter}
      />
      <SingleOption
        optiontext="Include Numbers"
        currentOption="numbers"
        setCheckboxCounter={setCheckboxCounter}
      />
      <SingleOption
        optiontext="Include Symbols"
        currentOption="symbols"
        setCheckboxCounter={setCheckboxCounter}
      />
    </StyledChoosenStrength>
  );
}

const StyledChoosenStrength = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media only screen and (min-width: 768px) {
    gap: 2rem;
  }
`;
