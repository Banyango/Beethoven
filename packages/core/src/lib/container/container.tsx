import React, {FC} from "react";
import {IContainerProps} from "./container.props.interface";

import styles from './container.module.scss';

export const Container : FC<IContainerProps> = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Container;
