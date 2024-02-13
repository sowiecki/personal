import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// import ProjectsCarousel from '../components/ProjectsCarousel';
import ProjectList from '../components/ProjectList';
import GeneralLinks from '../components/GeneralLinks';
import useBreakpoint from '../components/useBreakpoint';
import '../styles/global.css';
// @ts-ignore
import me from '../images/me.jpg';

// TODO move to theme
const primary = '#1A2027';
const secondary = '#FB5012';
const tertiary = '#01FDF6';
const q = '#03FCBA';

const Cover = styled(Paper)(({ theme }) => ({
  backgroundColor: primary,
  ...theme.typography.body2,
  padding: `${theme.spacing(2)} ${theme.spacing(1.5)}`,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: secondary,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IndexPage: React.FC<PageProps> = () => {
  const breakpoint = useBreakpoint()[0];
  const margin = {
    xs: '4px 4px',
    sm: '4px 4px',
    md: '10px 100px',
    lg: '10px 100px',
    xl: '10px 100px',
  }[breakpoint];

  return (
    <Box sx={{ flexGrow: 1 }} margin={margin}>
      <Grid container spacing={2} justifyContent="center">
        <Grid md={12}>
          <Cover>
            <Grid container spacing={2}>
              <Grid md={2}>
                <Avatar alt="Sean Owiecki" src={me} sx={{ width: 200, height: 200, boxShadow: `0 0 0 12px ${primary}, 0 0 0 20px ${tertiary}` }} />
              </Grid>
              <Grid md={10} textAlign="left">
                <Typography variant="h3" color={secondary}>
                  Sean Owiecki
                </Typography>
                <Typography variant="h4" color={tertiary}>
                  Full stack software engineer
                </Typography>
              </Grid>
            </Grid>
          </Cover>
        </Grid>
        <Grid md={12}>
          <Item>
            {/* experience */}
            <Typography variant="subtitle1" color={primary} sx={{ fontWeight: 600 }}>React | TypeScript | GraphQL | Node.js</Typography>
          </Item>
        </Grid>
        <Grid md={3}>
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
  )
};

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <title>Sean Owiecki</title>
  </>
);
