import React, {PropsWithChildren, useRef} from "react";
import {INavbarProps} from "./navbar.props.interface";

import styles from './navbar.module.scss';
import classNames from "classnames";
import {useClickOutside} from "../../hooks/use-click-outside.hook";

export const Navbar: React.FC<PropsWithChildren<INavbarProps>> = props => {
  return (
    <nav className={classNames(styles.navbar, props.style)}>
      <div className={styles.logo}>
        <a className={styles.logo_name} href={props.url}>
          {props.image ? <img src={props.image}/> : <i className={props.icon}/>}
          {props.name}</a>
      </div>
      {props.collapsed ? <NavBarCollapsed {...props}/> : (<ul className={styles.items}>
        {props.children}
      </ul>)}
    </nav>
  );
}

const NavBarCollapsed: React.FC<PropsWithChildren<INavbarProps>> = props => {
  const [collapsed, setCollapsed] = React.useState(true);
  const className = collapsed ? "bi-three-dots" : "bi-arrow-down";
  const ref = useRef<HTMLUListElement>(null);
  useClickOutside(ref, () => setCollapsed(true));
  return (
    <ul ref={ref} className={styles.items_dropdown}>
      <li>
        <i className={className} onClick={() => setCollapsed(!collapsed)}/>
        {collapsed ? null : <ul>{props.children}</ul>}
      </li>
    </ul>
  )
}

export default Navbar;
