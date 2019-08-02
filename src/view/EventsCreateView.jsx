//import { AbsenceDto } from "backend";
import {
  Form,
  Heading,
  HFlow,
  MaskedInput,
  Modal,
  ModalBody,
  ModalFooter,
  NumberField,
  TabItem,
  Tabs,
  Text,
  TextArea,
  TextAreaField,
  TextInput,
  TimeInput,
  VFlow,
  Select,
  SelectField,
  Switch
} from "bold-ui";
import DateField from "../components/DateField";
import TimeField from "../components/TimeField";

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
    const title = this.props.editMode ? "Editar eventos" : "Criar evento";
    const fieldValue = formProps.values;
    const change = formProps.form.change;
    return (
      <Modal open={true} size="small" onClose={this.props.goBack}>
        <ModalBody>
          <VFlow vSpacing={2}>
            <Heading level={1}>{title}</Heading>
            <Tabs>
              <TabItem active>Dados do evento</TabItem>
              <TabItem>Convidados</TabItem>
            </Tabs>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold" required="true">
                  Visibilidade
                </Text>

                <Switch
                  name="switch"
                  label="Público"
                  disabled={false}
                  // onChange={actionHandler}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold" required="true">
                  Tipo de evento
                </Text>
                <Select
                  name="tipoEvento"
                  items={[
                    { value: 1, label: "Social" },
                    { value: 2, label: "Oficial" }
                  ]}
                  //itemToString={itemToString}
                  //itemIsEqual={itemIsEqual}
                  placeholder="Selecione uma opção"
                  multiple={false}
                  clearable
                  disabled={false}
                  loading={false}
                  //onChange={actionHandler}
                  //onBlur={actionHandler}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold" required="true">
                  Título
                </Text>
                <SelectField
                  id="collaborator"
                  name="collaborator"
                  title="Título"
                  placeholder="Título do evento"
                  items={this.props.searchOptions}
                  itemToString={this.itemToString}
                  itemIsEqual={this.itemIsEqual}
                  onChange={this.props.onChangeSearch}
                  multiple
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Início</Text>
                <DateField
                  name="startDate"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold" />
                <TimeInput
                  name="startTime"
                  icon="clockOutline"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>

              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Término</Text>
                <DateField
                  name="endDate"
                  onChange={this.onEndChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={5.0}>
                <TimeInput
                  name="startTime"
                  icon="clockOutline"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Local</Text>
                <TextInput
                  name="localEvent"
                  icon="mapMarkerOutline"
                  placeholder="Inclua um local ou endereço"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Descrição</Text>
                <TextArea
                  name="localEvent"
                  placeholder="Descrição do evento"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Convidados</Text>
                <TextArea
                  name="convidadosEvent"
                  onChange={this.onStartChange(fieldValue, change)}
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

  actionHandler = (event, change) => value => {
    return this.props.change(value);
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
