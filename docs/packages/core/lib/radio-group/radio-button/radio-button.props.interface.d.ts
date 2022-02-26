/// <reference types="react" />
export interface IRadioButtonProps {
    /**
     * The value of the radio button.
     */
    value: string;
    /**
     * The label of the radio button.
     */
    label: string;
    /**
     * The checked state of the radio button.
     */
    checked?: boolean;
    /**
     * The disabled state of the radio button.
     */
    disabled?: boolean;
    /**
     * The onChange event handler of the radio button.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
