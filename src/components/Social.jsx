import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

const Social = () => {
  return (
    <div>
      {socialItems.map((item) => (
        <item.icon />
      ))}
    </div>
  );
};

export default Social;
