import React from "react";
import Select from "react-select";

const SelectDropdown = ({
  options,
  placeholder,
  showAboveLabel = false,
  label,
  required = false,
  className,
  removeDivider = true,
  margin = true,
  isClearable = true,
  error,
  handlePage,
  disabled,
  zindex = false,
  bold = false,
  ...otherprops
}) => {
  return (
    <div className={`${margin ? "my-1" : ""}`}>
      {showAboveLabel ? (
        <label
          style={
            bold
              ? { fontWeight: "bold ", fontSize: "18px" }
              : { fontWeight: "normal" }
          }
          className={`mb-0`}
        >
          {label}
          {required ? "*" : ""}
        </label>
      ) : (
        ""
      )}

      <Select
        isDisabled={disabled}
        onMenuScrollToBottom={handlePage}
        options={options}
        styles={{ height: "40px", width: "100%" }}
        placeholder={placeholder ? placeholder : "Select..."}
        className={`text-dark ${className}`}
        components={
          removeDivider
            ? {
                IndicatorSeparator: () => null,
              }
            : null
        }
        isClearable={isClearable}
        {...otherprops}
      />
      {error && <div className={`error text-red`}>{error}</div>}
    </div>
  );
};

export default SelectDropdown;
