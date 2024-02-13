import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import List from '@mui/material/List';

const links = [
  {
    text: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/sowiecki',
  },
  {
    text: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/seanowiecki/',
  },
];

const GeneralLinks = () => (
  <List>
    <ButtonGroup orientation="vertical" size="large" variant="contained" aria-label="Links">
      {(links.map((link) => (
        <Button href={link.url} target="_blank" startIcon={<link.icon />}>{link.text}</Button>
      )))}
    </ButtonGroup>
  </List>
);

export default GeneralLinks;
