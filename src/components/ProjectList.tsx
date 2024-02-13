import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
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
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: covidfaceshields,
    title: 'Covid Face Shields',
  },
  {
    img: hypercube,
    title: 'HyperCube',
  },
  {
    img: nfcUnlock,
    title: 'NFC-Controlled Deadbolt',
    cols: 2,
  },
  {
    img: strangerLights,
    title: 'Stranger Lights',
    cols: 2,
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
        <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
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
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProjectList;
