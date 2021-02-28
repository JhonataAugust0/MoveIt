/** Imports
 *  Importação do useContext, função do react que per- 
 * mite que a aplicação utilize o conceito de contextos. 
 * Importação do context de Challenges e da sua estili-
 * zação.
 */
import { useContext } from 'react';
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

/** Imports
 *  export function Profile
 * A função profile tem a responsabilidade de utilizar  
 * o atributo level, de ChallengesContext, para formar o
 * perfil do usuário da aplicação, ela é a responsável
 * por capturar a foto que será exibida no perfil, o nome
 * e o level do usuário.
 */
export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JhonataAugust0.png" alt="Jhonata Augusto" />
      <div>
        <strong>Jhonata Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level {level}
        </p>
      </div>
    </div>
  );
}
