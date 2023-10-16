// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ per month',
  address: 'м. Київ, проспект Любомира Гузара 1',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
            tournament position, goals etc), analyzing by simple mathematics models and preparing probability
            for such events like: money line - first win / draw / second win, totals etc.`
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      hobbies:[
        {
          name: 'Спорт',
          isMain: true, 
        },
        {
          name: 'Волонтерство',
          isMain: false, 
        },
        {
          name: 'ІТ',
          isMain: true, 
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: false,
        },
        {
          name: 'Git',
          point: 10,
        },
        {
          name: 'Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      certificates: [
        {
          name: 'Сертифікат one',
          id: '87467356325646',
        },
        {
          name: 'Сертифікат two',
          id: '13456789',
        },
        {
          name: 'Сертифікат',
          id: '0982456748596',
        },
      ],
      educations: [
        {
          name: 'Видавничо-поліграфічний інститут НТУУ "КПІ"',
          isEnd: true,
        },
        {
          name: 'Державний університет телекомунікацій (ДУТ)',
          isEnd: false,
        },
        {
          name: 'Київський національний університет імені Тараса Шевченка (КНУ)',
          isEnd: true,
        },
        {
          name: 'Київський університет імені Бориса Грінченка',
          isEnd: false,
        },
        {
          name: 'Національна академія внутрішніх справ (НАВС)',
          isEnd: false,
        },
        {
          name: 'Національний авіаційний університет (НАУ)',
          isEnd: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'basic',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
     works: [
      {
       position: 'Junior Fullstack Developer',
       company: {
        name:'IT Brains',
        url: 'https://it-brains.com.ua/',
       },
       duration: {
         from: '20.02.2023',
         to: null,
       },
       projectAmount: 3,

       projects:[
          {
            name: 'Resume',
            url: 'https://resume.com.ua/',
            about: 'Buying a car abroad',
            stacks: [
            {
              name: 'React.js',
            },
            {
              name: 'HTML | CSS',
            },
            {
              name: 'Node.js',
            },
           ],
           awards:[
            {
              name: 'Our great disadvantage is that we give up too quickly. The surest way to success – all the time to try one more time.',
            },
            {
              name: 'In any project, the most important factor is the belief in success. Without faith, success is impossible.',
            },
           ],
           stacksAmount: 3,
           awardsAmount: 2,
          },
       ],
      },
     ],
    },

    footer,
  })
})



// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {

    layout: 'basic',
    page: {
      title: 'Resume | Person',
    },

    person: 
    {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {

    layout: 'basic',
    page: {
      title: 'Resume | Bio',
    },


    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})


// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {

    layout: 'basic',
    page: {
      title: 'Resume | Program',
    },


    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})


// ================================================================

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {

    layout: 'basic',
    page: {
      title: 'Resume | Web',
    },


    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================


router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layout: 'basic',
    page: {
      title: 'Resume | Js',
    },

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {

    layout: 'basic',
    page: {
      title: 'Resume | Task21',
    },


    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {

    layout: 'basic',
    page: {
      title: 'Resume | Task22',
    },

    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================


// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopreview', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopreview', {
    layout: 'basic',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },
    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================



// Підключаємо роутер до бек-енду
module.exports = router
