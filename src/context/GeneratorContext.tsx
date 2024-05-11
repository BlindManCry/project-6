import { createContext, useState, ReactNode, useContext } from "react";

interface GeneratorContextType {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  passwordStrength: string;
  setPasswordStrength: React.Dispatch<React.SetStateAction<string>>;
}

const initialContextValue: GeneratorContextType = {
  passwordLength: 8,
  setPasswordLength: () => {},
  passwordStrength: "",
  setPasswordStrength: () => {},
};

interface GeneratorProviderProps {
  children: ReactNode;
}

const GeneratorContext =
  createContext<GeneratorContextType>(initialContextValue);

function GeneratorProvider({ children }: GeneratorProviderProps) {
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  return (
    <GeneratorContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        passwordStrength,
        setPasswordStrength,
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
