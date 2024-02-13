import * as React from 'react';
import { navigate } from 'gatsby';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from '@mui/icons-material/Info';

import useBreakpoint from './useBreakpoint';

// @ts-ignore
import gtfo from '../images/gtfo.gif';
// @ts-ignore
import covidfaceshields from '../images/covidfaceshields2.jpg';
// @ts-ignore
import hypercube from '../images/hypercube.jpg';
// @ts-ignore
import strangerLights from '../images/stranger.gif';
// @ts-ignore
import nfcUnlock from '../images/unlock.gif';

const itemData = [
  {
    img: gtfo,
    title: 'Gently Tell Folks Out',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      window.open('https://github.com/sowiecki/gtfo');
    },
    rows: 2,
    cols: 2,
    featured: true,
    linkIcon: <OpenInNewIcon />,
  },
  {
    img: covidfaceshields,
    title: 'Covid Face Shields',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      window.open('https://www.linkedin.com/in/seanowiecki/overlay/1587855615727/single-media-viewer/?profileId=ACoAABX_yDMByQOsS1EH63IoqTQW40XtjqpbkYE');
    },
    linkIcon: <OpenInNewIcon />,
  },
  {
    img: hypercube,
    title: 'HyperCube',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      navigate('/projects/hypercube');
    },
    linkIcon: <InfoIcon />,
  },
  {
    img: nfcUnlock,
    title: 'NFC-Controlled Deadbolt',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      window.open('https://github.com/sowiecki/deadbolt-nfc');
    },
    linkIcon: <OpenInNewIcon />,
  },
  {
    img: strangerLights,
    title: 'Stranger Lights',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      window.open('https://github.com/sowiecki/Stranger-Lights');
    },
    cols: 2,
    linkIcon: <OpenInNewIcon />,
  },
];

const ProjectList = () => {
  const breakpoint = useBreakpoint()[0];
  const cols = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 5,
  }[breakpoint];

  return (
    <ImageList cols={cols}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                onClick={item.onClick}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {item.linkIcon}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProjectList;
