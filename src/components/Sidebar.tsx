import Link from 'next/link';
import React from 'react';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';
import DarkModeCheck from './DarkModeCheck';


export function Sidebar() {

  return (
    <div className={styles.container}>
      <img src="icons/Logo_min.svg" alt="timeup" />
      
      <div className={styles.buttons}>
        
        <button type="button">
          <div></div>
          <FiHome size={32} />
        </button>

        <button type="button" disabled>
          <div></div>
          <FiAward size={32} />
        </button>
        {/* <DarkModeCheck /> */}
      </div>
      
      <div className={styles.logOut}>
        <Link href="/">
          <FiLogOut size={28} />
        </Link>
      </div>
    </div>
  );
}
