// gitprofile.config.js
const config = {
  github: {
    username: 'whoshayyan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'http://www.Linkedin.com/in/hayan-al-jabr',
    facebook: '',
    phone: '00963993462682',
    email: 'hayanjaber6@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1zzwScdRCEC3zDKx2_k-N8OCkPRlKcvXU/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Laravel',
    'php',
    'MySQL',
    'Git/Github',
    'Python',
    'C/C++',
  ],
  certifications: [
    {
      name: 'Udemy 28 hours',
      body: 'by Jonas Schmedtmann ',
      year: 'Build a Real API with Laravel ',
      link: '',
    },
    {
      name: '',
      body: 'Lynda',
      year: 'Building RESTful APIs in Laravel ',
      link: '',
    },
  ],
  education: [
    {
      institution: 'Information Technology Engineering',
      degree: 'Damascus University',
      from: '',
      to: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Todo',
      description: 'Simple Todo list app, Allowing users to order their daily missions',
      imageUrl:'',
      link: 'https://github.com/whoshayyan/todo',
    },
    {
      title: 'ConsultME',
      description:'An laravel 8 API project wich alow people to get consultations in many domains',
      imageUrl:'',
      link: '',
    },
    {
      title: 'OneForAll',
      description:'OneForAll, it is a fully functioning C2C E-commerce website where people get to buy and sell products through a points-based billing system. And for the administrator there is a dashboard where he can manage the whole website',
      imageUrl: 'https://camo.githubusercontent.com/d7d18135e7fece8fbdaaba6e59c32f88bd893c344fa00cd5ad8297573e094e67/68747470733a2f2f692e6962622e636f2f5648674b7044682f4f6e652d466f722d416c6c2d312e706e67',
      link: 'https://www.youtube.com/watch?v=PU6Gmy2KrZI&feature=youtu.be',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dark','light'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
