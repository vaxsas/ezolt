// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Koliko ima kontinenata na planeti?",
    answer: "7",
    options: [
      "6",
      "8",
      "5",
      "7"
    ]
  },
    {
    numb: 2,
    question: "Koliko ima okeana na planeti?",
    answer: "5",
    options: [
      "4",
      "6",
      "5",
      "7"
    ]
  },
    {
    numb: 3,
    question: "Koliku povrsinu Zemlje zauzima voda?",
    answer: "71%",
    options: [
      "70%",
      "71%",
      "73%",
      "69%"
    ]
  },
    {
    numb: 4,
    question: "koliko planeta ima u svemiru?",
    answer: "8",
    options: [
      "8",
      "7",
      "6",
      "9"
    ]
  },
    {
    numb: 5,
    question: "Koja je najvece jezero u Crnoj Gori?",
    answer: "Skadarsko",
    options: [
      "Crno",
      "Skadarsko",
      "Krupac",
      "Pivsko"
    ]
  },
  {
    numb: 6,
    question: "Koja je najveca planina na svijetu?",
    answer: "Mount Everes",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everes",
      "Lhotse"
    ]
  },
  {
    numb: 7,
    question: "Koji je glavni grad Japana?",
    answer: "Tokyo",
    options: [
      "Kyoto",
      "Tokyo",
      "Hirosima",
      "Osaka"
    ]
  },
  {
    numb: 8,
    question: "Koja zemlja ima najviše stanovnika?",
    answer: "Kina",
    options: [
      "Japan",
      "Grad Vatikan",
      "Kina",
      "Rusija"
    ]
  },
  {
    numb: 9,
    question: "Koja je zemlja poznata po drevnim piramidama?",
    answer: "Egipat",
    options: [
      "Grčka",
      "Sparta",
      "Spanija",
      "Egipat"
    ]
  },
  {
    numb: 10,
    question: "Koji je najveći kontinent na svijetu?",
    answer: "Azija",
    options: [
      "Sjeverna Amerika",
      "Azija",
      "Južna Amerika",
      "Sjeverna Amerika"
    ]
  },
  {
    numb: 11,
    question: "Koja zemlja ima najmanje stanovnika?",
    answer: "Vatikan",
    options: [
      "Mongolija",
      "Vatikan",
      "Sjeverna Koreja",
      "Tajland"
    ]
  },
  {
    numb: 12,
    question: "Koji je vodopad najveći na svijetu?",
    answer: "Salto Ángel",
    options: [
      "Slapovi Niagare",
      "Viktorijini slapovi",
      "Salto Ángel",
      "Slapovi Iguazu"
    ]
  },
  {
    numb: 13,
    question: "Koja država ima najdužu obalu?",
    answer: "Kanada",
    options: [
      "Indonezija",
      "Kanada",
      "Rusija",
      "Filipini"
    ]
  },
  {
    numb: 14,
    question: "Koje je najvece ostrvo na svijetu?",
    answer: "Grenland",
    options: [
      "Bahami",
      "Grenland",
      "Miloš, Grčka",
      "Australija"
    ]
  },
  {
    numb: 15,
    question: "Koji je glavni grad Zimbabvea?",
    answer: "Harare",
    options: [
      "Lusaka",
      "Harare",
      "Luanda",
      "Salisbury"
    ]
  },
  {
    numb: 16,
    question: "Koji je glavni grad Sjedinjenih Država?",
    answer: "Washington DC",
    options: [
      "Washington DC",
      "New Jersey",
      "Philadelphia",
      "New York City"
    ]
  },
  {
    numb: 17,
    question: "Koji je glavni grad Južne Koreje?",
    answer: "Seul",
    options: [
      "Seul",
      "Pjongjang",
      "Busan",
      "Gyeonggi-do"
    ]
  },
  {
    numb: 18,
    question: "Kroz koliko država teče rijeka Mississippi?",
    answer: "31",
    options: [
      "48",
      "29",
      "31",
      "44"
    ]
  },
  {
    numb: 19,
    question: "Koja je zemlja dom Mount Everesta?",
    answer: "Nepal",
    options: [
      "Azerbejdžan",
      "Belize",
      "Nepal",
      "Katar"
    ]
  },
  {
    numb: 20,
    question: "Koje je najveće veštačko jezero u Crnoj Gori?",
    answer: "Pivsko jezero ",
    options: [
      "Zminičko jezero ",
      "Borovičko jezero",
      "Pivsko jezero ",
      "Otilovićko jezero"
    ]
  },
  {
    numb: 21,
    question: "Koji je glavni grad države New York?",
    answer: "Albany",
    options: [
      "Bangkok",
      "Albany",
      "Nizozemska",
      "Barcelona"
    ]
  },
  {
    numb: 22,
    question: "Koje je drugo najvece jezero u Crnoj Gori?",
    answer: "Šaško jezero",
    options: [
      "Otilovićko jezero",
      "Šaško jezero",
      "Zminičko jezero ",
      "Crno jezero "
    ]
  },
  {
    numb: 23,
    question: "Ko je prvi od Evropljana otkrio Ameriku?",
    answer: "Vikinzi",
    options: [
      "Iliri",
      "Kristofr Kolumbo",
      "Vikinzi",
      "Monte Kristo"
        ]
  },
  {
    numb: 24,
    question: "Sta su favele?",
    answer: "Divlja naselja u Brazilu",
    options: [
      "Divlja naselja u Filipinima",
      "Divlja naselja u Meksiku",
      "Divlja naselja u Brazilu",
      "Divlja naselja u Crnoj Gori "
    ]
  },
  {
    numb: 25,
    question: "Koliko mostova postoji na rijeci Amazon?",
    answer: "0",
    options: [
      "3",
      "5",
      "0",
      "1"
    ]
  },
  {
    numb: 26,
    question: "Zlatarsko jezero, po postanku je?",
    answer: "veštačko",
    options: [
      "eolsko",
      "kraško",
      "veštačko",
      "ledničko"
    ]
  },
  {
    numb: 27,
    question: "Koja jedina država ima jednosložno ime?",
    answer: "Mejn",
    options: [
      "Filipini",
      "Mejn",
      "Jordan",
      "Kostarika"
    ]
  },
  {
    numb: 28,
    question: "Kako se zove jedino more koje nema obalu?",
    answer: "Sargasso more",
    options: [
      "Vendelsovo more",
      "Sargasso more",
      "Lincolnovo more",
      "Beaufortovo more"
    ]
  },
  {
    numb: 29,
    question: "Koliko zemalja još ima šiling kao valutu?",
    answer: "4",
    options: [
      "7",
      "13",
      "4",
      "9"
    ]
  },
  {
    numb: 30,
    question: "Koliko ostrva imaju Filipini?",
    answer: "7,640",
    options: [
      "7,640",
      "1.400",
      "6,440",
      "4.000"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
