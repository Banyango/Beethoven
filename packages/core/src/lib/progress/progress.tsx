import React from "react";

import {IProgressProps} from "./progress.props.interface";

import styles from "./progress.module.scss";

export const Progress: React.FC<IProgressProps> = props => {
  return (
    <div className={styles.progress_background}>
      <div className={styles.progress_bar} style={{width: `${props.percentage}%`}} />
    </div>
  );
}

export default Progress;
