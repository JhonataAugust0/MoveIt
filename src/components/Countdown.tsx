/** Imports
 *  Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos.
 * Importação do context de CountDown e a estilização 
 * do componente,
 */
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

/** export function Countdown
 *  Countdown é a função responsável por fazer a crono
 * metragem dos ciclos pomodoro da aplicação. Ela uti-
 * liza do context de CountDown, usando seus parâmetros
 * para fazer a contagem, inicialização e finalização 
 * de um ciclo e sua reinicialização, além de verificar 
 * se há um ciclo ativo. 
 */
export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext (CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um novo ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
