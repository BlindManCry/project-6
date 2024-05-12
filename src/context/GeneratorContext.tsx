import { createContext, useState, ReactNode, useContext } from "react";

interface GeneratorContextType {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  passwordStrength: string;
  setPasswordStrength: React.Dispatch<React.SetStateAction<string>>;
  checkboxCounter: number;
  setCheckboxCounter: React.Dispatch<React.SetStateAction<number>>;
  isInclude: string[];
  setIsInclude: React.Dispatch<React.SetStateAction<string[]>>;
  chosenIndexes: number[];
  setChoosenIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  generetedPassword: string;
  setGeneretedPassword: React.Dispatch<React.SetStateAction<string>>;
  isPasswordGenereted: boolean;
  setIsPasswordGenereted: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isTextCopied: boolean;
  setIsTextCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue: GeneratorContextType = {
  passwordLength: 8,
  setPasswordLength: () => {},
  passwordStrength: "",
  setPasswordStrength: () => {},
  checkboxCounter: 0,
  setCheckboxCounter: () => {},
  isInclude: [],
  setIsInclude: () => {},
  chosenIndexes: [],
  setChoosenIndexes: () => {},
  generetedPassword: "",
  setGeneretedPassword: () => {},
  isPasswordGenereted: false,
  setIsPasswordGenereted: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isTextCopied: false,
  setIsTextCopied: () => {},
};

interface GeneratorProviderProps {
  children: ReactNode;
}

const GeneratorContext =
  createContext<GeneratorContextType>(initialContextValue);

function GeneratorProvider({ children }: GeneratorProviderProps) {
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [checkboxCounter, setCheckboxCounter] = useState<number>(0);
  const [isInclude, setIsInclude] = useState<string[]>([]);
  const [chosenIndexes, setChoosenIndexes] = useState<number[]>([]);
  const [generetedPassword, setGeneretedPassword] = useState<string>("");
  const [isPasswordGenereted, setIsPasswordGenereted] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false);

  return (
    <GeneratorContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        passwordStrength,
        setPasswordStrength,
        checkboxCounter,
        setCheckboxCounter,
        isInclude,
        setIsInclude,
        chosenIndexes,
        setChoosenIndexes,
        generetedPassword,
        setGeneretedPassword,
        isPasswordGenereted,
        setIsPasswordGenereted,
        isLoading,
        setIsLoading,
        isTextCopied,
        setIsTextCopied,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
}

function useGenerator(): GeneratorContextType {
  const context = useContext(GeneratorContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { GeneratorProvider, useGenerator };
