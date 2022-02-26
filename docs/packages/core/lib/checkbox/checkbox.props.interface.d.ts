import { ChangeEvent, FocusEvent } from "react";
export interface ICheckboxProps {
    /**
     * The label of the checkbox.
     */
    label: string;
    /**
     * The value of the checkbox.
     */
    value: string;
    /**
     * The name of the checkbox.
     */
    name: string;
    /**
     * The checked state of the checkbox.
     */
    checked: boolean;
    /**
     * The disabled state of the checkbox.
     */
    disabled: boolean;
    /**
     * The onChange event handler of the checkbox.
     */
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * The onFocus event handler of the checkbox.
     */
    onFocus: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * The onBlur event handler of the checkbox.
     */
    onBlur: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * True if the checkbox is readonly; false otherwise.
     */
    readonly?: boolean;
}
