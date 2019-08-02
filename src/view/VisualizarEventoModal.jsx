import React, { useState } from "react";
import {
  Heading,
  Text,
  Radio,
  TabItem,
  Tabs,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalFooter,
  HFlow,
  VFlow,
  FileUploader,
  Card,
  PagedTable
} from "bold-ui";
import arraiaImg from "../images/arraia.jpg";

function VisualizarEventoModal(props) {
  const [convidados, setAba] = useState(1);
  const [visualizarOpen, setOpen] = useState(1);

  const fechar = () => {
    setOpen(0);
    props.history.push("/events");
  };

  return (
    <Modal open={visualizarOpen} onClose={fechar} size="large">
      <ModalBody>
        <Heading level={2}>Visualizar evento</Heading>
        <hr />
        <HFlow>
          <VFlow vSpacing={0} style={"margin-right: 50px"}>
            <Text>Hoje</Text>
            <Text>
              <strong>2 de Ago</strong>
            </Text>
            <Text>
              <strong>20:00 até 23:00</strong>
            </Text>
            <Text>Sexta-feira</Text>
          </VFlow>
          <HFlow hSpacing={0.5}>
            <Icon icon="mapMarkerFilled" />
            <VFlow vSpacing={0}>
              <Text>Laboratório Bridge</Text>
              <Text>Rua Lauro Linhares, 2055 - Trindade - 880360-01</Text>
            </VFlow>
          </HFlow>
        </HFlow>
        <VFlow style={"margin-top: 20px"} vSpacing={0.5}>
          <Text>Confirmar presença</Text>
          <HFlow>
            <Radio name="default" label="Sim" />
            <Radio name="default" label="Não" />
            <Radio name="default" label="Talvez" />
          </HFlow>
          <Tabs style={"border-bottom: 1px solid lightgray"}>
            <TabItem active={convidados} onClick={() => setAba(1)}>
              Convidados
            </TabItem>
            <TabItem active={!convidados} onClick={() => setAba(0)}>
              Imagens
            </TabItem>
          </Tabs>
          {!convidados ? <Imagens /> : <AltTable />}
        </VFlow>
      </ModalBody>
      <ModalFooter>
        <HFlow justifyContent="flex-end">
          <Button kind="primary">Salvar</Button>
        </HFlow>
      </ModalFooter>
    </Modal>
  );
}

function Imagens() {
  return (
    <VFlow>
      <FileUploader text="Clique ou arraste seu arquivo aqui" />
      <ImageCard />
    </VFlow>
  );
}

function ImageCard() {
  return (
    <VFlow vSpacing={0.5}>
      <HFlow hSpacing={0.5}>
        <img src={arraiaImg} height="150" width="250" />
        <img src={arraiaImg} height="150" width="250" />
        <img src={arraiaImg} height="150" width="250" />
      </HFlow>
      <HFlow hSpacing={0.5}>
        <img src={arraiaImg} height="150" width="250" />
        <img src={arraiaImg} height="150" width="250" />
        <img src={arraiaImg} height="150" width="250" />
      </HFlow>
    </VFlow>
  );
}

function AltTable() {
  const allRows = Array(10)
    .fill(true)
    .reduce(
      curr => [
        { nome: "Odilon Ferreira", presenca: "Sim" },
        { nome: "Rodrigo Costa", presenca: "Sim" },
        { nome: "Isabelle Pinheiro", presenca: "Sim" },
        { nome: "Giselle Nascimento", presenca: "Sim" },
        { nome: "Antonio Taha", presenca: "Sim" },
        { nome: "Verônica", presenca: "Sim" },
        { nome: "Gustavo Moser", presenca: "Sim" },
        { nome: "Teste", presenca: "Sim" },
        { nome: "Teste", presenca: "Não" },
        { nome: "Teste", presenca: "Talvez" }
      ],
      []
    );

  const [params, setParams] = useState({
    page: 0,
    size: 5,
    totalElements: allRows.length,
    totalPages: allRows.length / 5
  });

  const rows = allRows.slice(
    params.page * params.size,
    params.page * params.size + params.size
  );

  const handlePageChange = page => setParams(state => ({ ...state, page }));

  return (
    <PagedTable
      rows={rows}
      page={params.page}
      size={params.size}
      totalPages={params.totalPages}
      totalElements={params.totalElements}
      onPageChange={handlePageChange}
      columns={[
        {
          name: "nome",
          header: "Nome",
          render: item => item.nome
        },
        {
          name: "presenca",
          header: "Presença",
          render: item => item.presenca
        }
      ]}
    />
  );
}

export default VisualizarEventoModal;
