import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import JavascriptIcon from '@mui/icons-material/Javascript';
import List from '@mui/material/List';

const StyledButton = styled(Button)(() => ({
  justifyContent: 'left',
}));

const links = [
  {
    text: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/sowiecki',
    ariaLabel: 'github link',
  },
  {
    text: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/seanowiecki/',
    ariaLabel: 'LinkedIn link',
  },
  {
    text: 'NPM',
    icon: JavascriptIcon,
    url: 'https://www.npmjs.com/~nase',
    ariaLabel: 'NPMJS link',
  },
];

const GeneralLinks = () => (
  <List>
    <ButtonGroup orientation="vertical" size="large" variant="contained" aria-label="Links">
      {(links.map((link) => (
        <StyledButton
          aria-label={link.ariaLabel}
          key={link.text}
          href={link.url}
          startIcon={<link.icon />}
          // @ts-ignore
          target="_blank"
        >
          {link.text}
        </StyledButton>
      )))}
      <StyledButton aria-label="email" href="mailto:me@seanowiecki.com" startIcon={<EmailIcon />}>me@seanowiecki.com</StyledButton>
    </ButtonGroup>
  </List>
);

export default GeneralLinks;
