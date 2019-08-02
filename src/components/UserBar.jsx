import { useStyles } from 'bold-ui';
import { ReactComponent as MeuBridgeLogo } from '../images/meubridge-logo.svg';
import React from 'react';

export function UserBar(props) {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.container}>
        <MeuBridgeLogo width={129} height={25} />
    </div>
  )}

const createStyles = (theme) => ({
  container: {
    borderBottom: `1px solid ${theme.pallete.divider}`,
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 4rem',
    height: '4rem',
    background: theme.pallete.surface.main,
    color: theme.pallete.text.main,
  },
  logo: {
    flexGrow: 1,
    img: {
      height: '2rem',
      width: '4.5rem',
    },
  },
  logoSvg: {
    '#meu, #bridge': {
      fill: `${theme.pallete.text.main} !important`,
    },
  },
  user: {
    borderRight: `1px solid ${theme.pallete.divider}`,
    paddingRight: '1rem',
    height: '4rem',
    alignItems: 'center',
  },
  photo: {
    width: '2rem',
    height: '2rem',
    objectFit: 'contain',
    borderRadius: '0.25rem',
  },
  logout: {
    paddingLeft: '0.5rem',
  },
  lightBulbo: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    height: '4rem',
    alignItems: 'center',
  },
})
