import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
  {
    icon: GitHubIcon,
    url: '',
  },
  {
    icon: TwitterIcon,
    url: '',
  },
  {
    icon: InstagramIcon,
    url: '',
  },
  {
    icon: FacebookIcon,
    url: '',
  },
  {
    icon: LinkedInIcon,
    url: '',
  },
];

const Social = ({ direction }) => {
  return (
    <Grid container direction={direction || 'row'} spacing={2}>
      {socialItems.map((item) => (
        <Grid item>
          <IconButton>
            <Link href={item.url}>
              <item.icon />
            </Link>
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
