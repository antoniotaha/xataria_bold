import {
  DateFieldProps,
  DatePickerInput,
  extractInputProps,
  Field,
  FieldRenderProps,
  getFieldError,
  Tooltip,
  withStyles,
  WithStylesProps
} from "bold-ui";
import { format, parse } from "bold-ui/lib/form/inputs/DateField/DateField";
import React from "react";
import { blue } from "bold-ui/lib/styles/colors";

class DateField extends React.Component {
  render() {
    return (
      <Field
        {...this.props}
        render={this.renderInput}
        hasWrapper={false}
        format={format}
        parse={parse}
      />
    );
  }

  renderInput = props => {
    const { theme } = this.props;
    return (
      <Tooltip
        text={getFieldError(props)}
        placement="top-start"
        style={{
          background: theme.pallete.status.danger.main,
          background: blue,
          color: theme.pallete.status.danger.onColor
        }}
      >
        <DatePickerInput
          {...extractInputProps(this.props)}
          {...props.input}
          status={props.hasError ? "error" : undefined}
          clearable={false}
        />
      </Tooltip>
    );
  };
}

export default DateField;
