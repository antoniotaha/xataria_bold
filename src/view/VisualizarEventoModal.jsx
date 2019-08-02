import React from 'react';
import { 
    Heading,
    Text, 
    Radio, 
    TabLink, 
    Tabs, 
    Button, 
    Icon,  
    Modal, 
    ModalBody, 
    ModalFooter, 
    HFlow, 
    VFlow } from 'bold-ui'

class VisualizarEventoModal extends React.Component {   
    render() {
        return (
            <Modal open={true} size='large'>
                <ModalBody> 
                    <Heading level={2}>Visualizar evento</Heading>
                    <hr />
                    <HFlow>
                        <VFlow vSpacing={0} style={'margin-right: 50px'}>
                            <Text>Hoje</Text>
                            <Text><strong>2 de Ago</strong></Text>
                            <Text><strong>20:00 até 23:00</strong></Text>
                            <Text>Sexta-feira</Text>
                        </VFlow>
                        <HFlow hSpacing={0.5}>
                            <Icon icon='mapMarkerFilled' />
                            <VFlow vSpacing={0}>
                                <Text>Laboratório Bridge</Text>
                                <Text>Rua Lauro Linhares, 2055 - Trindade - 880360-01</Text>
                            </VFlow> 
                        </HFlow>
                    </HFlow>
                    <VFlow style={'margin-top: 20px'} vSpacing={0.5}>
                        <Text>Confirmar presença</Text>
                        <HFlow> 
                            <Radio name='default' label="Sim" />
                            <Radio name='default' label="Não" />
                            <Radio name='default' label="Talvez" />
                        </HFlow>
                        <Tabs>
                            <TabLink to='/visualizar/confirmados'>Convidados</TabLink>
                            <TabLink to='/visualizar/confirmados'>Imagens</TabLink>
                        </Tabs>
                    </VFlow>
                </ModalBody>
                <ModalFooter>
                        <HFlow justifyContent='flex-end'>
                            <Button kind='primary'>Salvar</Button>
                        </HFlow>
                </ModalFooter>
            </Modal>        
    )}
}


export default VisualizarEventoModal;