import React from "react";
import {IButtonGroupProps} from "./button-group.props.interface";

import styles from './button-group.module.scss';
import classNames from "classnames";

export const ButtonGroup: React.FC<IButtonGroupProps> = ({children, className}) => {
  return (
    <div className={classNames(styles.btn_group, className)}>
      {children}
    </div>
  );
}

export default ButtonGroup;
