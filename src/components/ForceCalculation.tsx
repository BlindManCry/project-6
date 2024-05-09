import styled from "styled-components";

export default function ForceCalculation() {
  return (
    <StyledForceCalculation>
      <p>STRENGTH</p>
      <CalculationOutput>
        <h2>MEDIUM</h2>
        <StrengthProgress>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StrengthProgress>
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
  }
`;

const StrengthProgress = styled.div`
  display: flex;
  gap: 0.8rem;

  & > div {
    width: 1rem;
    height: 2.8rem;
    background: #f8cd65;
    /* border: 2px solid #e6e5ea; */
  }
`;
