/** Imports
 *  Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos.
 * Importação do context de Challenges e da estilização
 * do componente,
 */
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

/** export function ExperienceBar
 *  A ExperienceBar é a função responsável por construir 
 * a barra de experiência do usuário, calculando sua ex
 * periencia e integrando com o componente CSS para a 
 * sua estilização.
 */
export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
