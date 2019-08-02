import {
  Icon,
  Tag,
  Theme,
  Tooltip,
  useStyles,
  VFlow,
  withStyles,
  WithStylesProps
} from "bold-ui";
import { Styles } from "bold-ui/lib/styles/withStyles";
import { VTabLink, VTabs } from "./VTabs";
import React, { CSSProperties } from "react";

class MenuBar extends React.Component {
  render() {
    const { css, theme } = this.props;

    const styles = {
      container: {
        display: "flex",
        background: theme.pallete.surface.main,
        borderRight: `1px solid ${theme.pallete.divider}`,
        minHeight: "100vh",
        height: "100%",
        paddingTop: "1rem",
        flexDirection: "column"
      },
      imgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "4.875rem",
        height: "3rem"
      }
    };

    return (
      <div className={css(styles.container)}>
        <VTabs>
          <VFlow vSpacing={1}>
            <Tooltip text="Registro diário">
              <VTabLink to="/dailyregister">
                <div className={css(styles.imgContainer)}>
                  <Icon icon="timerFilled" />
                </div>
              </VTabLink>
            </Tooltip>
            <Tooltip text="Horário semanal">
              <VTabLink to="/schedule">
                <div className={css(styles.imgContainer)}>
                  <Icon icon="calendarFilled" />
                </div>
              </VTabLink>
            </Tooltip>
            <Tooltip text="Férias">
              <VTabLink to="/vacation">
                <div className={css(styles.imgContainer)}>
                  <Icon icon="beach" />
                </div>
              </VTabLink>
            </Tooltip>
            <Tooltip text="Colaboradores">
              <VTabLink to="/collaborator">
                <div className={css(styles.imgContainer)}>
                  <Icon icon="multipleUsers" />
                </div>
              </VTabLink>
            </Tooltip>
            <Tooltip text="Eventos">
              <VTabLink to="/collaborator">
                <div className={css(styles.imgContainer)}>
                  <Icon icon="multipleUsers" />
                </div>
              </VTabLink>
            </Tooltip>
          </VFlow>
        </VTabs>
      </div>
    );
  }
}

const roleLabelStyles = theme => ({
  roleContainer: {
    textAlign: "center",
    width: "5rem",
    marginTop: "auto",
    position: "fixed",
    bottom: "10px"
  },
  roleLabelText: {
    padding: "5px",
    fontSize: "10px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: theme.pallete.gray.c40,
    background: theme.pallete.gray.c90,
    borderRadius: "2px"
  }
});

export default withStyles(MenuBar);
