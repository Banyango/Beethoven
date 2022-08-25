import React, {FC, PropsWithChildren} from "react";
import {IContainerProps} from "./container.props.interface";

import styles from './container.module.scss';

export const Container : FC<PropsWithChildren<IContainerProps>> = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Container;
