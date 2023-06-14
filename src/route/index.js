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

    layout: 'big',
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


// Підключаємо роутер до бек-енду
module.exports = router
