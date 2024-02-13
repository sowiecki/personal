import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import useBreakpoint from '../useBreakpoint';

// @ts-ignore
import me from '../../images/me.jpg';

const CoverItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'primary',
  ...theme.typography.body2,
  padding: `${theme.spacing(2)} ${theme.spacing(1.5)}`,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  boxShadow: `0 0 0 4px ${theme.palette.secondary.contrastText}, 0 0 0 8px ${theme.palette.secondary.main}`,
}));


const Cover = () => {
  const breakpoint = useBreakpoint()[0];
  const heightAndWidth = {
    xs: { width: 320, height: 320 },
    sm: { width: 200, height: 200 },
    md: { width: 200, height: 200 },
    lg: { width: 200, height: 200 },
    xl: { width: 200, height: 200 },
  }[breakpoint];
  const h1FontSize = {
    xs: '4rem',
    sm: '4rem',
    md: '4rem',
    lg: '4rem',
    xl: '6rem',
  }[breakpoint];
  const h2FontSize = {
    xs: '1.1rem',
    sm: '1.625rem',
    md: '1.625rem',
    lg: '1.625rem',
    xl: '2.5rem',
  }[breakpoint];

  return (
    <CoverItem>
      <Grid container spacing={4}>
        <Grid md={4} lg={3} xl={2}>
          <StyledAvatar alt="Sean Owiecki" src={me} sx={{
            ...heightAndWidth,
          }} />
        </Grid>
        <Grid md={8} lg={9} xl={10} textAlign="left">
          <Typography variant="h1" color='secondary' sx={{ fontSize: h1FontSize, fontFamily: '"Sono", sans-serif' }}>
            Sean Owiecki
          </Typography>
          <Typography variant="h2" color='tertiary' sx={{ fontSize: h2FontSize, fontFamily: '"Sono", sans-serif' }}>
            Full Stack Software Engineer
          </Typography>
        </Grid>
      </Grid>
    </CoverItem>
  );
};

export default Cover;
