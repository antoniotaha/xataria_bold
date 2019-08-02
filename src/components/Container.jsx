import { withStyles, WithStylesProps } from "bold-ui";
import { Interpolation } from "emotion";
import React from "react";

class Container extends React.PureComponent {
  static defaultProps = {};

  render() {
    const { theme, style } = this.props;
    const styles = {
      container: {
        width: "928px",
        margin: "0 auto",

        [theme.breakpoints.down("lg")]: {
          width: "768px"
        }
      }
    };

    return (
      <div className={this.props.css(styles.container, style)}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(Container);
