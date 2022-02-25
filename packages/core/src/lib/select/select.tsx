import './select.module.scss';
import {IOption, ISelectProps} from "./select.props.interface";
import React, {useMemo, useState} from "react";

import styles from './select.module.scss';
import classNames from "classnames";

export const Select: React.FC<ISelectProps> = props => {
  const [value, setValue] = useState(props.value);

  const options = useMemo(() => {
    return props.options.map((option: IOption, index) => {
      return (
        <option key={index} value={option.value}>{option.label}</option>
      )
    })
  }, [props.options]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    props.onChange(event);
  };

  return (
    <div className={classNames(props.className, styles.select, {[styles.disabled]: props.disabled})}>
      <select
        name={props.name}
        disabled={props.disabled}
        multiple={false}
        onChange={onChange}
        value={value}
        style={{
          maxWidth: `${props.maxWidth}px`,
        }}
      >
        {options}
      </select>
      <i className={classNames(styles.icon, "bi-chevron-down", {[styles.disabled]: props.disabled})}/>
    </div>
  );
}

export default Select;
