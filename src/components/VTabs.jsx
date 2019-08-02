import { Styles, Theme, withStyles, WithStylesProps } from "bold-ui";
import { Interpolation } from "emotion";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const createStyles = theme => {
  return {
    ul: {
      listStyle: "none",
      padding: "0",
      margin: "0 -1rem",
      fontSize: theme.typography.sizes.button
    },
    a: {
      display: "inline-block",
      color: theme.pallete.text.main,
      margin: "0 1rem",
      transition: ".2s color",

      "&.active": {
        color: theme.pallete.primary.main,
        borderRight: "2px solid currentColor"
      }
    }
  };
};

class VTabs extends React.Component {
  render() {
    const { css, theme, children, style } = this.props;
    const styles = createStyles(theme);

    return (
      <ul className={css(styles.ul, style)} role="verticaltablist">
        {children}
      </ul>
    );
  }
}

class VTabLink extends React.Component {
  static defaultProps = {
    active: false
  };

  render() {
    const { css, theme, active, children, ...rest } = this.props;
    const styles = createStyles(theme);

    return (
      <li className={css(styles.li)} role="presentation">
        <NavLink
          className={css(styles.a)}
          isActive={this.isActive}
          role="tab"
          {...rest}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  isActive = (match, location) => {
    return this.props.active || match;
  };
}

VTabs = withStyles(VTabs);
VTabLink = withStyles(VTabLink);

export { VTabs, VTabLink };
