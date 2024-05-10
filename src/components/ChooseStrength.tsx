import styled from "styled-components";
import SingleOption from "./SingleOption";

export default function ChooseStrength() {
  return (
    <StyledChoosenStrength>
      <SingleOption optiontext="Include Uppercase Letters" />
      <SingleOption optiontext="Include Lowercase Letters" />
      <SingleOption optiontext="Include Numbers" />
      <SingleOption optiontext="Include Symbols" />
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
