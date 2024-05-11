import styled from "styled-components";
import { useGenerator } from "../context/GeneratorContext";
import RenderPasswordSttrength from "./RenderPasswordSttrength";

export default function ForceCalculation() {
  const { passwordStrength } = useGenerator();

  return (
    <StyledForceCalculation>
      <p>STRENGTH</p>
      <CalculationOutput>
        {passwordStrength !== "none" ? <h2>{passwordStrength}</h2> : <h2></h2>}
        <RenderPasswordSttrength />
      </CalculationOutput>
    </StyledForceCalculation>
  );
}

const StyledForceCalculation = styled.div`
  width: 100%;
  padding: 1.4rem 1.6rem;
  background: #18171f;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
    color: #817d92;
  }

  @media only screen and (min-width: 768px) {
    padding: 2.1rem 3.15rem 2rem 3.2rem;

    & > p {
      font-size: 1.8rem;
      line-height: 2.376rem;
    }
  }
`;

const CalculationOutput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.376rem;
    color: #e6e5ea;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    gap: 1.55rem;

    & > h2 {
      font-size: 2.4rem;
      line-height: 3.168rem;
    }
  }
`;
