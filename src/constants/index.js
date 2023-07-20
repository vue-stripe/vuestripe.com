export const PROXY_EMAIL = '9jad6zep@duck.com';

export const COMMAND_HELP = 'help';
export const COMMAND_GO_GITHUB = 'go github';
export const COMMAND_GO_STACKOVERFLOW = 'go stackoverflow';
export const COMMAND_GO_BLOG = 'go blog';
export const COMMAND_GO_LINKEDIN = 'go linkedin';
export const COMMAND_GO_TWITTER = 'go twitter';
export const COMMAND_GO_BENTO = 'go bento';
export const COMMAND_CONTACT = 'contact';
export const COMMAND_CLEAR = 'clear';
export const COMMAND_PRETTY_MODE = 'gui';

export const SOCIAL_LINKS = [
  {
    icon: 'lab la-github',
    name: 'github',
    url: 'https://github.com/jofftiquez',
  },
  {
    icon: 'lab la-stack-overflow',
    name: 'stackoverflow',
    url: 'https://stackoverflow.com/users/2889614/jofftiquez',
  },
  {
    icon: 'lab la-linkedin-in',
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jofftiquez/',
  },
  {
    icon: 'lab la-twitter',
    name: 'twitter',
    url: 'https://twitter.com/jrtiquez',
  },
  {
    icon: 'las la-pen-fancy',
    name: 'blog',
    url: 'https://blog.ossph.org/',
  },
  {
    icon: 'las la-utensils',
    name: 'bento',
    url: 'https://bento.me/jofftiquez',
  },
];

export const SOCIAL_LINKS_NAMES = SOCIAL_LINKS.map((link) => link.name);
export const SOCIAL_LINKS_URLS = SOCIAL_LINKS.map((link) => link.url);
