import React from 'react';
import styles from './Test.module.scss';
interface TestProps {
  item: string;
}

export const Test: React.FC<TestProps> = () => {
  return <div className={styles.div}>Ok</div>;
};
