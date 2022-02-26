export interface ITextFieldProps {
    /**
     * The text field label.
     */
    label?: string;
    /**
     * The text field value.
     */
    value?: string;
    /**
     * The text field placeholder.
     */
    placeholder?: string;
    /**
     * The text field name.
     */
    name?: string;
    /**
     * The text field type.
     */
    type?: 'text' | 'password' | 'email' | 'number';
    /**
     * The style of the text field.
     */
    style: 'default' | 'minimal';
    /**
     * The text field disabled.
     */
    disabled?: boolean;
    /**
     * The text field readonly.
     */
    readonly?: boolean;
}
