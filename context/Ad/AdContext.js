import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [stepClick, setStepClick] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // checkUserLoggedIn();
  }, []);

  return (
    <AdContext.Provider
      value={{
        error,
        loading,
        status,
        setStatus,
        type,
        setType,
        step,
        setStep,
        stepClick,
        setStepClick,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};

export default AdContext;
