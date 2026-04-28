import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function Highlight({children}: {children: ReactNode}) {
  return <p className={styles.highlight}>{children}</p>;
}
