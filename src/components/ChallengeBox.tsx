/** Imports
 *  Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos.
 * Importação dos contexts de Challenges e de Countdown
 * e suas estilizações. 
 */
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";

/** export function ChallengeBox
 *  É a função que tem a responsabilidade de lançar os
 * desafios para os usuários da aplicação assim que um
 * cilco é encerrado. 
 * Ela também tem a função de demonstrar os botões de 
 * falha e êxito para o usuário, controlando, a partir
 * da entrada do usuário, se ele recebe ou não o XP da-
 * quele desafio.
 */
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
      completedChallenge()
      resetCountdown()
    }

    function handleChallengeFailed() {
      resetChallenge()      
      resetCountdown()
    }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios!
          </p>
        </div>
      )}
    </div>
  );
}
