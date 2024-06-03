import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '../../assets/icons';

type FooterLink = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

export const footerLinks: Array<FooterLink> = [
  { name: 'github', icon: GitHubIcon, url: 'https://github.com/Koscee' },
  {
    name: 'linkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/koscee-a-268848302',
  },
  {
    name: 'x',
    icon: XIcon,
    url: 'https://x.com/k2keedvip?ref_src=twsrc%5Etfw',
  },
  {
    name: 'discord',
    icon: DiscordIcon,
    url: 'https://discord.com/invite/pc4M8g3U',
  },
];
