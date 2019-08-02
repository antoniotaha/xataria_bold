//import { AbsenceDto } from "backend";
import { Form, Heading, HFlow, DatePickerInput, VFlow, Button, Text } from "bold-ui";
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
        marginTop: 50,
        marginLeft: 380,
        marginRight: 380
      }}
    >
      <VFlow>
        <HFlow alignItems='Left' hSpacing={1} style={'border-bottom: 1px solid lightgray'}>
          <Heading level={1}>Eventos</Heading>
        </HFlow>
        <VFlow hSpacing={0.2}><strong>Período</strong></VFlow>
        <HFlow>
          <HFlow hSpacing={1}>
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
          </HFlow>
          <HFlow hSpacing={1} style={'margin-left: 400px'}>
            <Button
              kind="primary"
              size="small"
              onClick={() => props.history.push("/events/create")}
            >
              Criar evento
          </Button>
          </HFlow>
        </HFlow>
        <img
          onClick={() => props.history.push("/events/visualize")}
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
