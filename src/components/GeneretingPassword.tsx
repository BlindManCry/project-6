import styled from "styled-components";
import ChooseStrength from "./ChooseStrength";
import ForceCalculation from "./ForceCalculation";
import ArrowRight from "/images/icon-arrow-right.svg";
import ArrowRightHover from "/images/icon-arrow-right-hover.svg";
import { useState } from "react";
import { useGenerator } from "../context/GeneratorContext";
import {
  lowercaseArr,
  numbersArr,
  shuffleArray,
  symbolsArr,
  uppercaseArr,
} from "../helper functions/GeneretePassword";

export default function GeneretingPassword() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const {
    passwordLength,
    setPasswordLength,
    checkboxCounter,
    chosenIndexes,
    setGeneretedPassword,
    setIsPasswordGenereted,
    setIsLoading,
    setIsTextCopied,
    isLoading,
  } = useGenerator();

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(e.target.value);
    setPasswordLength(newValue);
  };

  // password generator main function
  const handleGeneretePassword = async () => {
    setIsLoading(true);
    setIsTextCopied(false);

    if (isLoading) return;
    // this is just for design
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);

    setGeneretedPassword("");
    const arrayOfArrays = [uppercaseArr, lowercaseArr, numbersArr, symbolsArr];

    const singleTypeLength = Math.floor(passwordLength / checkboxCounter);

    const singleTypeRemainder = passwordLength % checkboxCounter;

    let firtsArr: string[] = [];
    let secondArr: string[] = [];
    let thirdArr: string[] = [];
    let fourthArr: string[] = [];

    chosenIndexes.sort((a, b) => a - b);

    firtsArr = arrayOfArrays[chosenIndexes[0]];
    secondArr = arrayOfArrays[chosenIndexes[1]];
    thirdArr = arrayOfArrays[chosenIndexes[2]];
    fourthArr = arrayOfArrays[chosenIndexes[3]];

    const generetedPasswordLetters: string[] = [];

    if (firtsArr) {
      for (let i = 0; i < singleTypeLength; i++) {
        const randomPasswordIndex = Math.floor(Math.random() * firtsArr.length);
        generetedPasswordLetters.push(firtsArr[randomPasswordIndex]);
      }
    }

    if (secondArr) {
      for (let i = 0; i < singleTypeLength; i++) {
        const randomPasswordIndex = Math.floor(
          Math.random() * secondArr.length
        );
        generetedPasswordLetters.push(secondArr[randomPasswordIndex]);
      }
    }

    if (thirdArr) {
      for (let i = 0; i < singleTypeLength; i++) {
        const randomPasswordIndex = Math.floor(Math.random() * thirdArr.length);
        generetedPasswordLetters.push(thirdArr[randomPasswordIndex]);
      }
    }

    if (fourthArr) {
      for (let i = 0; i < singleTypeLength; i++) {
        const randomPasswordIndex = Math.floor(
          Math.random() * fourthArr.length
        );
        generetedPasswordLetters.push(fourthArr[randomPasswordIndex]);
      }
    }

    const allLettersInOne = [firtsArr, secondArr, thirdArr, fourthArr];

    const passwordElementsInOne: string[] = [];
    if (singleTypeRemainder !== 0) {
      for (let i = 0; i < checkboxCounter; i++) {
        passwordElementsInOne.push(...allLettersInOne[i]);
      }

      for (let i = 0; i < singleTypeRemainder; i++) {
        const randomPasswordIndex = Math.floor(
          Math.random() * passwordElementsInOne.length
        );
        generetedPasswordLetters.push(
          passwordElementsInOne[randomPasswordIndex]
        );
      }
    }

    const passwordLettersRandomize = shuffleArray(generetedPasswordLetters);

    for (let i = 0; i < passwordLettersRandomize.length; i++) {
      setGeneretedPassword(
        (password) => (password += passwordLettersRandomize[i])
      );
    }
    setIsPasswordGenereted(true);
    setIsLoading(false);
  };

  return (
    <StyledGeneretingPassword>
      <LengthCounter>
        <p>Character Length</p>
        <span>{passwordLength}</span>
      </LengthCounter>
      <input
        type="range"
        min={8}
        max={20}
        value={passwordLength}
        onChange={handleLengthChange}
      />
      <ChooseStrength />
      <ForceCalculation />
      <GenerateButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleGeneretePassword}
        disabled={checkboxCounter === 0}
      >
        <span>GENERATE</span>
        {!isHovered ? (
          <img src={ArrowRight} alt="arrow-right-icon" />
        ) : (
          <img src={ArrowRightHover} alt="arrow-right-icon" />
        )}
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
    background-image: linear-gradient(
      to right,
      #a4ffaf 0%,
      #a4ffaf 100%,
      #18171f 100%,
      #18171f 100%
    );
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
  transition: all 0.3s;
  cursor: pointer;

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

  &:hover {
    outline: 2px solid #a4ffaf;
    background: #24232c;

    & > span {
      color: #a4ffaf;
    }
  }
`;
