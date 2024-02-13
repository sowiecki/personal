import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { styled } from '@mui/material/styles';
import {
  Paper,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Cover from '../components/Cover';
import ProjectList from '../components/ProjectList';
import GeneralLinks from '../components/GeneralLinks';
import useBreakpoint from '../components/useBreakpoint';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'secondary',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IndexPage: React.FC<PageProps> = () => {
  const breakpoint = useBreakpoint()[0];
  const margin = {
    xs: '1rem',
    sm: '1rem',
    md: '2rem 10rem',
    lg: '2rem 10rem',
    xl: '2rem 14rem',
  }[breakpoint];

  return (
    <Box sx={{ flexGrow: 1, }} margin={margin}>
      <Grid container spacing={2} justifyContent="center">
        <Grid md={12}>
          <Cover />
        </Grid>
        <Grid xs={12} md={12}>
          <Item>
            {/* skills */}
            <Typography variant="subtitle1" color='primary' sx={{ fontWeight: 600 }}>React | TypeScript | GraphQL | Node.js | Embedded | 3D Printing</Typography>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <GeneralLinks />
          </Item>
        </Grid>
        <Grid md={9}>
          <Item>
            <ProjectList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <title>Sean Owiecki</title>
  </>
);
