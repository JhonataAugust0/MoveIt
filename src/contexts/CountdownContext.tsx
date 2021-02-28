/** Imports
 * Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos.
 * Importação de useState, que permite a utilização de 
 * estados na aplicação, além do useEffect, que executa
 * funcionalidades através do comportamento do usuário.
 * Importação do context de Challenges e da estilização
 * do componente,
 */
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

/** interface CountdownContextData
 *  Definição da estrutura de dados do context Countdown,
 * por meio da criação de uma interface.  
 */
interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  isCounting: boolean
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

/** export function CountdownProvider({ children }: CountdownProviderProps) 
 *  A função CountextProvider utilzia da interface da 
 * estrutura de dados para construir a lógica sintática 
 * do cronômetro utilização do useEffect. Além de ana-
 * lisar se o contador está ativo e requisitando as fun
 * ções de acordo com os efeitos que o usuário causar na
 * aplicação.   
 */
export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [isCounting, setIsCounting] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        isCounting,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
