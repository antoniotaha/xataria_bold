//import { AbsenceDto } from "backend";
import { Form, Heading, HFlow, DatePickerInput, VFlow, Button } from "bold-ui";
import React from "react";
import timeLineImg from "../images/timeline.png";
import { useState } from "react";

function EventsListView(props) {
  const [valueDataInicio, setValueDataInicio] = useState();
  const [valueDataFim, setValueDataFim] = useState();
  const changeDataInicio = selectedDateInicio =>
    setValueDataInicio(selectedDateInicio);

  const changeDataFim = selectedDateFim => setValueDataFim(selectedDateFim);
  return (
    <div
      style={{
        marginTop: 30
      }}
    >
      <VFlow alignItems="center">
        <HFlow hSpacing={1}>
          <Heading level={1}>Eventos</Heading>
          <DatePickerInput
            name="dataInicio"
            value={valueDataInicio}
            onChange={changeDataInicio}
          />
          <DatePickerInput
            name="dataFim"
            value={valueDataFim}
            onChange={changeDataFim}
          />
          <Button
            kind="primary"
            size="small"
            onClick={() => props.history.push("/events/create")}
          >
            Criar novo
          </Button>
        </HFlow>
        <img
          style={{
            marginTop: 60,
            textAlign: "center"
          }}
          src={timeLineImg}
          width="1000"
          height="600"
          alt="timeline"
        />
      </VFlow>
    </div>
  );
}

export default EventsListView;
