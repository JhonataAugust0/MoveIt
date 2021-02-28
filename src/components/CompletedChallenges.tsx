/** Imports
 *  Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos.
 * Importação do context de Challenges e da estilização
 * do componente,
 */
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

/** export function CompletedChallenges
 *  É a função que adquire a quantidade de desafios com-
 * pletas por um usuário por meio do contexto de chall-
 * enges e as exibe na sua biografia. 
 */
export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
