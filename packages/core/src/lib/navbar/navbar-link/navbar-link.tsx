import React from "react";
import {INavbarLinkProps} from "./navbar-link.props.interface";

import styles from "./navbar-link.module.scss";
import classNames from "classnames";

export const NavbarLink: React.FC<INavbarLinkProps> = ({ url, text, active}) => {
  return (
    <li>
      <a className={classNames({[styles.active]: active}, styles.link)} href={url}>
        {text}
      </a>
    </li>
  );
};
