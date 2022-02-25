import './breadcrumbs.module.scss';
import {IBreadcrumbsProps} from "./breadcrumb.props.interface";

import styles from './breadcrumbs.module.scss';

export function Breadcrumbs(props: IBreadcrumbsProps) {
  const crumbs = props.crumbs?.map((crumb, index) => {
    return (
      <>
        {index > 0 ? <span className={styles.separator}>{'>'}</span> : null}
        <li key={index}>
          <a href={crumb.href}>{crumb.label}</a>
        </li>
      </>
    );
  });
  return (
    <ul className={styles.breadcrumb}>
      {crumbs}
    </ul>
  );
}

export default Breadcrumbs;
