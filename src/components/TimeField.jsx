import {
  extractInputProps,
  Field,
  FieldRenderProps,
  getFieldError,
  TimeFieldProps,
  TimeInput,
  Tooltip,
  useTheme
} from "bold-ui";
import React from "react";

function TimeField(props) {
  const theme = useTheme();

  const renderInput = formProps => {
    return (
      <Tooltip
        text={getFieldError(formProps)}
        placement="top-start"
        style={{
          background: theme.pallete.status.danger.main,
          color: theme.pallete.status.danger.onColor
        }}
      >
        <TimeInput
          style={{
            width: "3rem",
            height: "2rem",
            padding: "calc(0.5rem - 1px) 0.15rem",
            textAlign: "center"
          }}
          {...extractInputProps(props)}
          {...formProps.input}
          status={formProps.hasError ? "error" : undefined}
          autoComplete="off"
          clearable={false}
        />
      </Tooltip>
    );
  };

  const format = value => {
    // Omit seconds in case the initial field value is in format 'HH:mm:ss'
    return value ? value.slice(0, 5) : value;
  };

  return (
    <Field {...props} render={renderInput} format={format} hasWrapper={false} />
  );
}

export default TimeField;
