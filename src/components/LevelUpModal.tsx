import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";

import Confetti from "react-confetti";
import useWindowDimensions from "../contexts/WindowDimensions";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  const { width, height } = useWindowDimensions();

  return (
    <div className={styles.overlay}>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1000}
        recycle={false}
      />
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <header>{level}</header>
          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>
          <button
            type="button"
            className={styles.close}
            onClick={closeLevelUpModal}
          >
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>
      </div>
    </div>
  );
}
