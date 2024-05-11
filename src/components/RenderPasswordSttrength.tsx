import styled from "styled-components";
import { useGenerator } from "../context/GeneratorContext";

export default function RenderPasswordSttrength() {
  const { passwordStrength } = useGenerator();

  return (
    <StrengthProgress>
      {passwordStrength === "none" && <div></div>}
      {passwordStrength === "too weak" && (
        <TooWeak>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </TooWeak>
      )}
      {passwordStrength === "weak" && (
        <Weak>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Weak>
      )}
      {passwordStrength === "medium" && (
        <Medium>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Medium>
      )}
      {passwordStrength === "strong" && (
        <Strong>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Strong>
      )}
    </StrengthProgress>
  );
}

const StrengthProgress = styled.div``;

const TooWeak = styled.div`
  display: flex;
  gap: 0.8rem;
  & > div {
    width: 1rem;
    height: 2.8rem;
  }

  & > div:nth-child(1) {
    background: #f64a4a;
  }
  & > div:nth-child(2) {
    border: 2px solid #e6e5ea;
  }
  & > div:nth-child(3) {
    border: 2px solid #e6e5ea;
  }
  & > div:nth-child(4) {
    border: 2px solid #e6e5ea;
  }
`;

const Weak = styled.div`
  display: flex;
  gap: 0.8rem;
  & > div {
    width: 1rem;
    height: 2.8rem;
  }

  & > div:nth-child(1) {
    background: #fb7c58;
  }
  & > div:nth-child(2) {
    background: #fb7c58;
  }
  & > div:nth-child(3) {
    border: 2px solid #e6e5ea;
  }
  & > div:nth-child(4) {
    border: 2px solid #e6e5ea;
  }
`;

const Medium = styled.div`
  display: flex;
  gap: 0.8rem;
  & > div {
    width: 1rem;
    height: 2.8rem;
  }

  & > div:nth-child(1) {
    background: #f8cd65;
  }
  & > div:nth-child(2) {
    background: #f8cd65;
  }
  & > div:nth-child(3) {
    background: #f8cd65;
  }
  & > div:nth-child(4) {
    border: 2px solid #e6e5ea;
  }
`;

const Strong = styled.div`
  display: flex;
  gap: 0.8rem;
  & > div {
    width: 1rem;
    height: 2.8rem;
  }

  & > div:nth-child(1) {
    background: #a4ffaf;
  }
  & > div:nth-child(2) {
    background: #a4ffaf;
  }
  & > div:nth-child(3) {
    background: #a4ffaf;
  }
  & > div:nth-child(4) {
    background: #a4ffaf;
  }
`;
