const questionsData = [
  {
    id: 1,
    title: 'What is the capital of France?',
    answers: [
      { id: 'a1', text: 'Paris', isCorrect: true },
      { id: 'a2', text: 'Rome', isCorrect: false },
      { id: 'a3', text: 'Berlin', isCorrect: false },
      { id: 'a4', text: 'Madrid', isCorrect: false },
    ],
  },
  {
    id: 2,
    title: 'Which planet is known as the Red Planet?',
    answers: [
      { id: 'b1', text: 'Earth', isCorrect: false },
      { id: 'b2', text: 'Venus', isCorrect: false },
      { id: 'b3', text: 'Mars', isCorrect: true },
      { id: 'b4', text: 'Jupiter', isCorrect: false },
    ],
  },
  {
    id: 3,
    title: 'Who wrote "To be, or not to be"?',
    answers: [
      { id: 'c1', text: 'Charles Dickens', isCorrect: false },
      { id: 'c2', text: 'William Shakespeare', isCorrect: true },
      { id: 'c3', text: 'Jane Austen', isCorrect: false },
      { id: 'c4', text: 'Leo Tolstoy', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'How many continents are there on Earth?',
    answers: [
      { id: 'd1', text: 'Five', isCorrect: false },
      { id: 'd2', text: 'Six', isCorrect: false },
      { id: 'd3', text: 'Seven', isCorrect: true },
      { id: 'd4', text: 'Eight', isCorrect: false },
    ],
  },
  {
    id: 5,
    title: 'Which is the largest ocean on Earth?',
    answers: [
      { id: 'e1', text: 'Atlantic Ocean', isCorrect: false },
      { id: 'e2', text: 'Indian Ocean', isCorrect: false },
      { id: 'e3', text: 'Pacific Ocean', isCorrect: true },
      { id: 'e4', text: 'Arctic Ocean', isCorrect: false },
    ],
  },
  {
    id: 6,
    title: 'In what year did the Titanic sink?',
    answers: [
      { id: 'f1', text: '1912', isCorrect: true },
      { id: 'f2', text: '1916', isCorrect: false },
      { id: 'f3', text: '1920', isCorrect: false },
      { id: 'f4', text: '1905', isCorrect: false },
    ],
  },
  {
    id: 7,
    title: 'What is the smallest country in the world?',
    answers: [
      { id: 'g1', text: 'Monaco', isCorrect: false },
      { id: 'g2', text: 'Malta', isCorrect: false },
      { id: 'g3', text: 'Vatican City', isCorrect: true },
      { id: 'g4', text: 'San Marino', isCorrect: false },
    ],
  },
  {
    id: 8,
    title: 'What is the rarest blood type?',
    answers: [
      { id: 'h1', text: 'O', isCorrect: false },
      { id: 'h2', text: 'A', isCorrect: false },
      { id: 'h3', text: 'B', isCorrect: false },
      { id: 'h4', text: 'AB Negative', isCorrect: true },
    ],
  },
  {
    id: 9,
    title: 'Who painted the Mona Lisa?',
    answers: [
      { id: 'i1', text: 'Vincent Van Gogh', isCorrect: false },
      { id: 'i2', text: 'Leonardo da Vinci', isCorrect: true },
      { id: 'i3', text: 'Pablo Picasso', isCorrect: false },
      { id: 'i4', text: 'Claude Monet', isCorrect: false },
    ],
  },
  {
    id: 10,
    title: 'What is the hardest natural substance on Earth?',
    answers: [
      { id: 'j1', text: 'Gold', isCorrect: false },
      { id: 'j2', text: 'Iron', isCorrect: false },
      { id: 'j3', text: 'Diamond', isCorrect: true },
      { id: 'j4', text: 'Quartz', isCorrect: false },
    ],
  }, {
    id: 11,
    title: 'Which chemical element has the highest electrical conductivity?',
    answers: [
      { id: 'k1', text: 'Iron', isCorrect: false },
      { id: 'k2', text: 'Silver', isCorrect: true },
      { id: 'k3', text: 'Copper', isCorrect: false },
      { id: 'k4', text: 'Gold', isCorrect: false },
    ],
  },
  {
    id: 12,
    title: 'What is the powerhouse of the cell?',
    answers: [
      { id: 'l1', text: 'Nucleus', isCorrect: false },
      { id: 'l2', text: 'Mitochondria', isCorrect: true },
      { id: 'l3', text: 'Ribosome', isCorrect: false },
      { id: 'l4', text: 'Endoplasmic reticulum', isCorrect: false },
    ],
  },
  {
    id: 13,
    title: 'What name is given to the longest side of a right triangle?',
    answers: [
      { id: 'm1', text: 'Hypotenuse', isCorrect: true },
      { id: 'm2', text: 'Adjacent', isCorrect: false },
      { id: 'm3', text: 'Opposite', isCorrect: false },
      { id: 'm4', text: 'Perimeter', isCorrect: false },
    ],
  },
  {
    id: 14,
    title: 'Who is considered the father of modern physics?',
    answers: [
      { id: 'n1', text: 'Isaac Newton', isCorrect: false },
      { id: 'n2', text: 'Albert Einstein', isCorrect: true },
      { id: 'n3', text: 'Niels Bohr', isCorrect: false },
      { id: 'n4', text: 'Galileo Galilei', isCorrect: false },
    ],
  },
  {
    id: 15,
    title: 'What is the term for a word that is similar in meaning to another word?',
    answers: [
      { id: 'o1', text: 'Antonym', isCorrect: false },
      { id: 'o2', text: 'Synonym', isCorrect: true },
      { id: 'o3', text: 'Homonym', isCorrect: false },
      { id: 'o4', text: 'Acronym', isCorrect: false },
    ],
  },
  {
    id: 16,
    title: 'Which country has the most natural lakes?',
    answers: [
      { id: 'p1', text: 'United States', isCorrect: false },
      { id: 'p2', text: 'Canada', isCorrect: true },
      { id: 'p3', text: 'Russia', isCorrect: false },
      { id: 'p4', text: 'China', isCorrect: false },
    ],
  },
  {
    id: 17,
    title: 'In computer science, what does "GUI" stand for?',
    answers: [
      { id: 'q1', text: 'General Utility Interface', isCorrect: false },
      { id: 'q2', text: 'Graphical User Interface', isCorrect: true },
      { id: 'q3', text: 'Global Unicast Interface', isCorrect: false },
      { id: 'q4', text: 'General User Integration', isCorrect: false },
    ],
  },
  {
    id: 18,
    title: 'Which planet has the most moons?',
    answers: [
      { id: 'r1', text: 'Earth', isCorrect: false },
      { id: 'r2', text: 'Jupiter', isCorrect: true },
      { id: 'r3', text: 'Saturn', isCorrect: false },
      { id: 'r4', text: 'Uranus', isCorrect: false },
    ],
  },
  {
    id: 19,
    title: 'What is the main component of the sun?',
    answers: [
      { id: 's1', text: 'Liquid Lava', isCorrect: false },
      { id: 's2', text: 'Solid Metallic Hydrogen', isCorrect: false },
      { id: 's3', text: 'Plasma', isCorrect: true },
      { id: 's4', text: 'Gasoline', isCorrect: false },
    ],
  },
  {
    id: 20,
    title: 'Which of the following is a non-renewable resource?',
    answers: [
      { id: 't1', text: 'Solar Energy', isCorrect: false },
      { id: 't2', text: 'Wind Energy', isCorrect: false },
      { id: 't3', text: 'Coal', isCorrect: true },
      { id: 't4', text: 'Timber', isCorrect: false },
    ],},{
      id: 21,
      title: 'What mathematical concept is defined as the set of all points equidistant from a given point?',
      answers: [
        { id: 'u1', text: 'Plane', isCorrect: false },
        { id: 'u2', text: 'Sphere', isCorrect: true },
        { id: 'u3', text: 'Circle', isCorrect: false },
        { id: 'u4', text: 'Ellipse', isCorrect: false },
      ],
    },
    {
      id: 22,
      title: 'Which king signed the Magna Carta in 1215?',
      answers: [
        { id: 'v1', text: 'King Henry VIII', isCorrect: false },
        { id: 'v2', text: 'King John', isCorrect: true },
        { id: 'v3', text: 'King Richard III', isCorrect: false },
        { id: 'v4', text: 'King Edward I', isCorrect: false },
      ],
    },
    {
      id: 23,
      title: 'In Shakespeare’s play Julius Caesar, who says "Beware the Ides of March"?',
      answers: [
        { id: 'w1', text: 'Julius Caesar', isCorrect: false },
        { id: 'w2', text: 'Cassius', isCorrect: false },
        { id: 'w3', text: 'Brutus', isCorrect: false },
        { id: 'w4', text: 'Soothsayer', isCorrect: true },
      ],
    },
    {
      id: 24,
      title: 'Which philosopher is famous for the quote "Cogito, ergo sum"?',
      answers: [
        { id: 'x1', text: 'Aristotle', isCorrect: false },
        { id: 'x2', text: 'René Descartes', isCorrect: true },
        { id: 'x3', text: 'Plato', isCorrect: false },
        { id: 'x4', text: 'Socrates', isCorrect: false },
      ],
    },
    {
      id: 25,
      title: 'What is the heaviest naturally occurring element found on Earth?',
      answers: [
        { id: 'y1', text: 'Uranium', isCorrect: true },
        { id: 'y2', text: 'Lead', isCorrect: false },
        { id: 'y3', text: 'Osmium', isCorrect: false },
        { id: 'y4', text: 'Plutonium', isCorrect: false },
      ],
    },
    {
      id: 26,
      title: 'The Dvorak keyboard layout was designed to replace which layout?',
      answers: [
        { id: 'z1', text: 'AZERTY', isCorrect: false },
        { id: 'z2', text: 'QWERTY', isCorrect: true },
        { id: 'z3', text: 'QWERTZ', isCorrect: false },
        { id: 'z4', text: 'Colemak', isCorrect: false },
      ],
    },
    {
      id: 27,
      title: 'What is the process by which plants use sunlight to synthesize foods from carbon dioxide and water called?',
      answers: [
        { id: 'aa1', text: 'Photosynthesis', isCorrect: true },
        { id: 'aa2', text: 'Chemosynthesis', isCorrect: false },
        { id: 'aa3', text: 'Respiration', isCorrect: false },
        { id: 'aa4', text: 'Fermentation', isCorrect: false },
      ],
    },
    {
      id: 28,
      title: 'Which physicist developed the principle of superposition?',
      answers: [
        { id: 'ab1', text: 'Isaac Newton', isCorrect: false },
        { id: 'ab2', text: 'Niels Bohr', isCorrect: false },
        { id: 'ab3', text: 'Erwin Schrödinger', isCorrect: true },
        { id: 'ab4', text: 'Albert Einstein', isCorrect: false },
      ],
    },
    {
      id: 29,
      title: 'Which of these historical figures is known for his extensive work on the classification of plants and animals?',
      answers: [
        { id: 'ac1', text: 'Gregor Mendel', isCorrect: false },
        { id: 'ac2', text: 'Carl Linnaeus', isCorrect: true },
        { id: 'ac3', text: 'Charles Darwin', isCorrect: false },
        { id: 'ac4', text: 'Louis Pasteur', isCorrect: false },
      ],
    },
    {
      id: 30,
      title: 'The Byzantine Empire was most closely associated with which major city?',
      answers: [
        { id: 'ad1', text: 'Rome', isCorrect: false },
        { id: 'ad2', text: 'Athens', isCorrect: false },
        { id: 'ad3', text: 'Constantinople', isCorrect: true },
        { id: 'ad4', text: 'Jerusalem', isCorrect: false },
      ],
    },{
      id: 31,
      title: 'What theorem establishes the relationship between the sides and angles of a right triangle?',
      answers: [
        { id: 'ae1', text: 'Pythagorean theorem', isCorrect: true },
        { id: 'ae2', text: 'Fermat’s Last Theorem', isCorrect: false },
        { id: 'ae3', text: 'Binomial theorem', isCorrect: false },
        { id: 'ae4', text: 'Fundamental theorem of algebra', isCorrect: false },
      ],
    },
    {
      id: 32,
      title: 'Who is credited with the invention of the first successful airplane?',
      answers: [
        { id: 'af1', text: 'The Montgolfier Brothers', isCorrect: false },
        { id: 'af2', text: 'Leonardo da Vinci', isCorrect: false },
        { id: 'af3', text: 'The Wright Brothers', isCorrect: true },
        { id: 'af4', text: 'Gustave Whitehead', isCorrect: false },
      ],
    },
    {
      id: 33,
      title: 'Which one of these elements is named after the creator of the periodic table?',
      answers: [
        { id: 'ag1', text: 'Curium', isCorrect: false },
        { id: 'ag2', text: 'Gadolinium', isCorrect: false },
        { id: 'ag3', text: 'Mendelevium', isCorrect: true },
        { id: 'ag4', text: 'Einsteinium', isCorrect: false },
      ],
    },
    {
      id: 34,
      title: 'Which novelist wrote "The Sound and the Fury" and "As I Lay Dying"?',
      answers: [
        { id: 'ah1', text: 'William Faulkner', isCorrect: true },
        { id: 'ah2', text: 'Ernest Hemingway', isCorrect: false },
        { id: 'ah3', text: 'John Steinbeck', isCorrect: false },
        { id: 'ah4', text: 'F. Scott Fitzgerald', isCorrect: false },
      ],
    },
    {
      id: 35,
      title: 'The Battle of Thermopylae was fought between an alliance of Greek city-states and which empire?',
      answers: [
        { id: 'ai1', text: 'The Roman Empire', isCorrect: false },
        { id: 'ai2', text: 'The Persian Empire', isCorrect: true },
        { id: 'ai3', text: 'The Macedonian Empire', isCorrect: false },
        { id: 'ai4', text: 'The Ottoman Empire', isCorrect: false },
      ],
    },
    {
      id: 36,
      title: 'What principle states that, for a liquid in a container, a change in pressure at any point is transmitted undiminished to all points in the liquid?',
      answers: [
        { id: 'aj1', text: 'Bernoulli’s principle', isCorrect: false },
        { id: 'aj2', text: 'Pascal’s principle', isCorrect: true },
        { id: 'aj3', text: 'Archimedes’ principle', isCorrect: false },
        { id: 'aj4', text: 'Hooke’s law', isCorrect: false },
      ],
    },
    {
      id: 37,
      title: 'The concept of "tabula rasa," the idea that individuals are born without built-in mental content, is associated with which philosopher?',
      answers: [
        { id: 'ak1', text: 'John Locke', isCorrect: true },
        { id: 'ak2', text: 'Immanuel Kant', isCorrect: false },
        { id: 'ak3', text: 'Plato', isCorrect: false },
        { id: 'ak4', text: 'Aristotle', isCorrect: false },
      ],
    },
    {
      id: 38,
      title: 'What is the name of the conjecture that every even integer greater than two is the sum of two prime numbers?',
      answers: [
        { id: 'al1', text: 'Riemann Hypothesis', isCorrect: false },
        { id: 'al2', text: 'Goldbach’s Conjecture', isCorrect: true },
        { id: 'al3', text: 'Fermat’s Last Theorem', isCorrect: false },
        { id: 'al4', text: 'Poincaré Conjecture', isCorrect: false },
      ],
    },
    {
      id: 39,
      title: 'Who is known for formulating the four laws of thermodynamics?',
      answers: [
        { id: 'am1', text: 'Isaac Newton', isCorrect: false },
        { id: 'am2', text: 'Albert Einstein', isCorrect: false },
        { id: 'am3', text: 'James Clerk Maxwell', isCorrect: false },
        { id: 'am4', text: 'Nicolas Léonard Sadi Carnot', isCorrect: true },
      ],
    },
    {
      id: 40,
      title: 'Which painter is known for the artwork "The Starry Night"?',
      answers: [
        { id: 'an1', text: 'Pablo Picasso', isCorrect: false },
        { id: 'an2', text: 'Vincent van Gogh', isCorrect: true },
        { id: 'an3', text: 'Claude Monet', isCorrect: false },
        { id: 'an4', text: 'Johannes Vermeer', isCorrect: false },
      ],
    },{
      id: 41,
      title: 'Which animal produces pink milk?',
      answers: [
        { id: 'ao1', text: 'Hippos', isCorrect: true },
        { id: 'ao2', text: 'Koalas', isCorrect: false },
        { id: 'ao3', text: 'Sea Lions', isCorrect: false },
        { id: 'ao4', text: 'Platypus', isCorrect: false },
      ],
    },
    {
      id: 42,
      title: 'In what type of matter are atoms most tightly packed?',
      answers: [
        { id: 'ap1', text: 'Plasma', isCorrect: false },
        { id: 'ap2', text: 'Liquid', isCorrect: false },
        { id: 'ap3', text: 'Gas', isCorrect: false },
        { id: 'ap4', text: 'Solid', isCorrect: true },
      ],
    },
    {
      id: 43,
      title: 'Which mathematical constant is known as Archimedes\' constant?',
      answers: [
        { id: 'aq1', text: 'e', isCorrect: false },
        { id: 'aq2', text: 'Pi', isCorrect: true },
        { id: 'aq3', text: 'The Golden Ratio', isCorrect: false },
        { id: 'aq4', text: 'Avogadro\'s Number', isCorrect: false },
      ],
    },
    {
      id: 44,
      title: 'What is the hardest known natural material?',
      answers: [
        { id: 'ar1', text: 'Graphene', isCorrect: false },
        { id: 'ar2', text: 'Diamond', isCorrect: true },
        { id: 'ar3', text: 'Boron Nitride', isCorrect: false },
        { id: 'ar4', text: 'Wurtzite Boron Nitride', isCorrect: false },
      ],
    },
    {
      id: 45,
      title: 'Which of these elements is not a noble gas?',
      answers: [
        { id: 'as1', text: 'Neon', isCorrect: false },
        { id: 'as2', text: 'Argon', isCorrect: false },
        { id: 'as3', text: 'Xenon', isCorrect: false },
        { id: 'as4', text: 'Hydrogen', isCorrect: true },
      ],
    },
    {
      id: 46,
      title: 'What was the first synthetic polymer to be invented?',
      answers: [
        { id: 'at1', text: 'Nylon', isCorrect: false },
        { id: 'at2', text: 'Polyethylene', isCorrect: false },
        { id: 'at3', text: 'Bakelite', isCorrect: true },
        { id: 'at4', text: 'PVC', isCorrect: false },
      ],
    },
    {
      id: 47,
      title: 'Which of these languages is considered the oldest?',
      answers: [
        { id: 'au1', text: 'Sanskrit', isCorrect: false },
        { id: 'au2', text: 'Latin', isCorrect: false },
        { id: 'au3', text: 'Tamil', isCorrect: true },
        { id: 'au4', text: 'Greek', isCorrect: false },
      ],
    },
    {
      id: 48,
      title: 'Which planet has the most moons?',
      answers: [
        { id: 'av1', text: 'Earth', isCorrect: false },
        { id: 'av2', text: 'Jupiter', isCorrect: true },
        { id: 'av3', text: 'Saturn', isCorrect: false },
        { id: 'av4', text: 'Neptune', isCorrect: false },
      ],
    },
    {
      id: 49,
      title: 'Who is considered the father of modern taxonomy?',
      answers: [
        { id: 'aw1', text: 'Charles Darwin', isCorrect: false },
        { id: 'aw2', text: 'Carl Linnaeus', isCorrect: true },
        { id: 'aw3', text: 'Gregor Mendel', isCorrect: false },
        { id: 'aw4', text: 'Alfred Wallace', isCorrect: false },
      ],
    },
    {
      id: 50,
      title: 'What is the term for a group of stars that forms an imaginary outline or meaningful pattern on the celestial sphere?',
      answers: [
        { id: 'ax1', text: 'Galaxy', isCorrect: false },
        { id: 'ax2', text: 'Nebula', isCorrect: false },
        { id: 'ax3', text: 'Constellation', isCorrect: true },
        { id: 'ax4', text: 'Cluster', isCorrect: false },
      ],
    }
  
];

export default questionsData;
