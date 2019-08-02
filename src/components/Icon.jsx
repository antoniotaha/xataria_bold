import { Icon as BoldIcon, IconProps, Theme, useStyles } from "bold-ui";
import React from "react";

export function Icon(props) {
  const { classes } = useStyles(createStyles);
  const { style, ...rest } = props;
  return <BoldIcon {...rest} style={classes.icon} />;
}

const createStyles = theme => ({
  icon: {
    color: theme.pallete.gray.c40
  }
});
