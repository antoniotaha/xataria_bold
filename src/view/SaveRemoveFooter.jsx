import { Button, HFlow, SubmitButton, Text } from "bold-ui";
import { Icon } from "../components/Icon";
import React from "react";

class SaveRemoveFooter extends React.Component {
  render() {
    const { editMode } = this.props;

    if (!editMode) {
      return (
        <HFlow justifyContent="flex-end">
          <SubmitButton
            handleSubmit={this.props.onSaveClick}
            disabled={this.props.enableSubmitButton}
          >
            Salvar
          </SubmitButton>
        </HFlow>
      );
    }
    return (
      <HFlow justifyContent="space-between">
        <Button skin="ghost" onClick={this.props.onRemoveClick}>
          <Icon icon="trashFilled" style={{ marginRight: "0.25rem" }} />
          <Text>Remover</Text>
        </Button>
        <SubmitButton
          handleSubmit={this.props.onSaveClick}
          disabled={this.props.enableSubmitButton}
        >
          Salvar
        </SubmitButton>
      </HFlow>
    );
  }
}

export default SaveRemoveFooter;
