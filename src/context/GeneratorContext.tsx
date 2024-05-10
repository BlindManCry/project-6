import { createContext, useState, ReactNode, useContext } from "react";

interface GeneratorContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const initialContextValue: GeneratorContextType = {
  count: 0,
  setCount: () => {},
};

interface GeneratorProviderProps {
  children: ReactNode;
}

const GeneratorContext =
  createContext<GeneratorContextType>(initialContextValue);

function GeneratorProvider({ children }: GeneratorProviderProps) {
  const [count, setCount] = useState(0);
  return (
    <GeneratorContext.Provider value={{ count, setCount }}>
      {children}
    </GeneratorContext.Provider>
  );
}

function useGenerator() {
  const context = useContext(GeneratorContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { GeneratorProvider, useGenerator };
