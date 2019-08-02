//import { AbsenceDto } from "backend";
import {
  Form,
  Heading,
  HFlow,
  DatePickerInput,
  Grid,
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
import { useState } from 'react'

function EventsListView () {

  const [valueDataInicio, setValueDataInicio] = useState()
  const [valueDataFim, setValueDataFim] = useState()
  const changeDataInicio = (selectedDateInicio) => setValueDataInicio(selectedDateInicio)
  const changeDataFim = (selectedDateFim) => setValueDataFim(selectedDateFim)
    return (
      <div>
        <Heading level={1}>Eventos</Heading>
        <HFlow hSpacing={1}>
          <DatePickerInput name="dataInicio" value={valueDataInicio} onChange={changeDataInicio} />
          <DatePickerInput name="dataFim" value={valueDataFim} onChange={changeDataFim}/>
        </HFlow>
        <img src={"../images/timeline.png"} alt="timeline" />
      </div>
    )
  };

export default EventsListView;
