//import { AbsenceDto } from "backend";
import {
  Form,
  Heading,
  HFlow,
  Modal,
  ModalBody,
  ModalFooter,
  NumberField,
  Text,
  VFlow,
  withStyles,
  WithStylesProps
} from "bold-ui";
import DateField from "../components/DateField";
import moment from "moment";
import React from "react";
import { FormRenderProps } from "react-final-form";
import { DATE_ISO } from "../utils/DateUtils";
import { inclusiveDiff } from "../utils/TimeUtils";
import SaveRemoveFooter from "./SaveRemoveFooter";

class EventsCreateView extends React.Component {
  componentWillMount() {
    if (this.props.editMode) {
      this.props.load();
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        onSubmitSucceeded={this.props.goBack}
        render={this.renderForm}
        initialValues={this.props.event}
      />
    );
  }

  renderForm = formProps => {
    const title = this.props.editMode ? "Editar eventos" : "Adicionar eventos";
    const fieldValue = formProps.values;
    const change = formProps.form.change;
    return (
      <Modal open={true} size="small" onClose={this.props.goBack}>
        <ModalBody>
          <VFlow vSpacing={2}>
            <Heading level={1}>{title}</Heading>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Início</Text>
                <DateField
                  name="startDate"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Fim</Text>
                <DateField
                  name="endDate"
                  onChange={this.onEndChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Nº de dias</Text>
                <NumberField
                  name="days"
                  onChange={this.onDaysChange(fieldValue, change)}
                  maxLength={3}
                />
              </VFlow>
            </HFlow>
          </VFlow>
        </ModalBody>

        <ModalFooter>
          <SaveRemoveFooter
            onSaveClick={formProps.handleSubmit}
            onRemoveClick={this.delete(fieldValue.id)}
            editMode={false}
          />
        </ModalFooter>
      </Modal>
    );
  };

  handleSubmit = value => {
    return this.props.save(value);
  };

  delete = id => () => {
    this.props.delete(id).then(res => this.props.goBack());
  };

  onStartChange = (event, change) => date => {
    const value = date && moment(date);
    if (!value) {
      change("days", null);
    } else if (event.endDate) {
      change("days", inclusiveDiff(event.endDate, value));
    } else if (event.days) {
      const endDate = moment(value).add(event.days, "days");
      change("endDate", endDate.format(DATE_ISO));
    }
  };

  onEndChange = (event, change) => date => {
    const value = date && moment(date);
    if (!value) {
      change("days", null);
    } else if (event.startDate) {
      change("days", inclusiveDiff(value, event.startDate));
    }
  };

  onDaysChange = (event, change) => value => {
    const days = value.currentTarget.value;
    if (!days || Number(days) === 0) {
      change("endDate", null);
    } else if (event.startDate) {
      const endDate = moment(event.startDate).add(days - 1, "days");
      change("endDate", endDate.format(DATE_ISO));
    }
  };
}

export default EventsCreateView;
