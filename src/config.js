module.exports = {
  siteTitle: 'Sajal Goyal',
  siteDescription:
    'Sajal Goyal, Junior Undergraduate, Dept. of Chemical Engineering, IIT Kanpur.',
  siteKeywords:
    'Sajal Goyal, Sajal, Goyal, Chemical Engineering ,iit, iit kanpur, iitk, data science, machine learning, agra, auv, auviitk, sajal goyal iitk',
  siteUrl: 'https://sajalgoyal113.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-6B0Z34CZQJ',
  googleVerification: '3X9_yiURZY4g8cOxTd9CJ4kq9kszJezHGwkM2rUsUoM',
  name: 'Sajal Goyal',
  location: 'Agra, India',
  email: 'sajalg113@gmail.com',
  github: 'https://github.com/sajalgoyal113',
  twitterHandle: '@sajalgo',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sajalgoyal113',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sajalgoyal/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sajalgoyal_/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sajalgo',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
