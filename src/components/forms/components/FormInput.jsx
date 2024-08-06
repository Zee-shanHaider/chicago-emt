import React from "react";
// ** Reactstrap Imports
import { Label, Input, InputGroup } from "reactstrap";
import styles from "../../../../src/assets/scss/form-input.module.scss";

function FormInput({
  label,
  required = false,
  showLabel = true,
  name,
  error,
  style,
  value,
  onChange,
  placeholder,
  type,
  onBlur,
  className,
  margin = true,
  checkbox = false,
  isDisabled,
  ...otherprops
}) {
  return (
    <div className={`${margin ? "my-1" : ""}`}>
      <Label className={styles.formlabel}>
        {showLabel ? label : ""}
        {required ? "*" : ""}
      </Label>

      <Input
        autoComplete="off"
        type={type}
        name={name}
        rows={6}
        value={value}
        className={`${styles.forminput} ${className}`}
        placeholder={placeholder}
        // autoFocus
        style={style}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
        {...otherprops}
      />
      {checkbox && (
        <Label className={`${styles.formlabel} ms-1`}>{label}</Label>
      )}
      <div className="error text-danger">{error}</div>
    </div>
  );
}

export default FormInput;
