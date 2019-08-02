//import { AbsenceDto } from "backend";
import {
  Form,
  Heading,
  HFlow,
  FormControl,
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
  Switch,
  useStyles
} from "bold-ui";
import Container from "../components/Container";
import DateField from "../components/DateField";
import TimeField from "../components/TimeField";

import moment from "moment";
import React, { useState } from "react";
import { FormRenderProps } from "react-final-form";
import { DATE_ISO } from "../utils/DateUtils";
import { inclusiveDiff } from "../utils/TimeUtils";
import SaveRemoveFooter from "./SaveRemoveFooter";

class EventsCreateView extends React.Component {
  constructor() {
    super();
    this.state = {
      privacidade: 0
    };
  }

  onChangePrivacidade() {
    this.setState({
      privacidade: !this.state.privacidade
    });
  }

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
    const itemToString = item => item;
    const items = ["Oficial", "Social"];
    const [open, setOpen] = useState(1);

    return (
      <Modal
        open={open}
        size="large"
        onClose={() => setOpen(0)}
        style={{ height: "750px", width: "750px" }}
      >
        <ModalBody>
          <VFlow vSpacing={0.5}>
            <Heading level={1}>Criar evento</Heading>
            <Tabs style={"border-bottom: 1px solid lightgray"}>
              <TabItem active>Dados evento</TabItem>
              <TabItem>Convidados</TabItem>
            </Tabs>
          </VFlow>

          <VFlow vSpacing={1} style={{ marginTop: "20px" }}>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold" required="true">
                  Visibilidade
                </Text>

                <Switch
                  name="switch"
                  label={this.state.privacidade ? "Privado" : "Público"}
                  disabled={false}
                  onChange={() => this.onChangePrivacidade()}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                {/* <Text fontWeight="bold" required="true">
                  Tipo evento
                </Text> */}
                <FormControl label="Tipo evento" required>
                  <Select
                    items={items}
                    itemToString={itemToString}
                    name="favorite pasta"
                    required
                  />
                </FormControl>
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Título</Text>
                <TextArea
                  style={{ width: "680px", height: "32px" }}
                  name="localEvent"
                  placeholder="Descrição do evento"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <Text fontWeight="bold">Início</Text>

              <VFlow vSpacing={0.5}>
                <DateField
                  name="startDate"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <TimeInput
                  name="startTime"
                  icon="clockOutline"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
              <Text fontWeight="bold">Término</Text>

              <VFlow vSpacing={0.5}>
                <TimeInput
                  // style={{ marginTop: "25px" }}
                  name="startTime"
                  icon="clockOutline"
                  onChange={this.onStartChange(fieldValue, change)}
                />
              </VFlow>
              <VFlow vSpacing={0.5}>
                <DateField
                  name="endDate"
                  onChange={this.onEndChange(fieldValue, change)}
                />
              </VFlow>
            </HFlow>
            <HFlow hSpacing={1}>
              <VFlow vSpacing={0.5}>
                <Text fontWeight="bold">Local</Text>
                <TextInput
                  style={{ width: "680px", height: "32px" }}
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
                  style={{ width: "680px", height: "131px" }}
                  name="localEvent"
                  placeholder="Descrição do evento"
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

const createStyles = theme => {
  return {
    logo: {
      flexGrow: 1,
      img: {
        height: "2rem",
        width: "4.5rem"
      }
    },
    logoSvg: {
      "#meu, #bridge": {
        fill: `${theme.pallete.text.main} !important`
      }
    },
    leftContainer: {
      background: theme.pallete.surface.main,
      width: "54vw",
      height: "100vh",
      paddingRight: "3.125rem"
    },
    textArea: {
      width: "100px"
    },

    rightContainer: {
      boxShadow: `inset 11px 0px 15px -5px ${theme.pallete.divider}`,
      width: "46vw",
      height: "100vh",
      paddingLeft: "3.5rem",
      background: theme.pallete.surface.main,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 3rem bottom 2rem",
      a: {
        textDecoration: "none",
        color: theme.pallete.text.main,
        fontSize: "14px",
        fontWeight: "bold"
      }
    },
    loginButton: {
      background: theme.pallete.surface.main,
      width: "21.5625rem",
      height: "4rem",
      paddingLeft: "2rem",
      paddingRight: "1.5rem",
      border: `solid 1px ${theme.pallete.divider}`,
      borderRadius: "0.25rem",
      marginTop: "1.75rem"
    },
    welcomeText: {
      color: theme.pallete.text.secondary,
      fontSize: "24px"
    },
    googleIcn: {
      paddingTop: "0.25rem",
      width: "2rem",
      height: "2rem"
    },
    arrowRight: {
      paddingTop: "0.5rem",
      "#seta": {
        fill: `${theme.pallete.text.main} !important`
      }
    },
    logoB: {
      "#b": {
        fill: `${theme.pallete.text.main} !important`
      },
      position: "absolute",
      bottom: "20px",
      right: "40px"
    }
  };
};

export default EventsCreateView;
