const questoesData = [
  {
    id: 1,
    title: 'Qual é a capital da França?',
    answers: [
      { id: 'a1', text: 'Paris', isCorrect: true },
      { id: 'a2', text: 'Roma', isCorrect: false },
      { id: 'a3', text: 'Berlim', isCorrect: false },
      { id: 'a4', text: 'Madri', isCorrect: false },
    ],
  },
  {
    id: 2,
    title: 'Qual planeta é conhecido como o Planeta Vermelho?',
    answers: [
      { id: 'b1', text: 'Terra', isCorrect: false },
      { id: 'b2', text: 'Vênus', isCorrect: false },
      { id: 'b3', text: 'Marte', isCorrect: true },
      { id: 'b4', text: 'Júpiter', isCorrect: false },
    ],
  },
  {
    id: 3,
    title: 'Quem escreveu "Ser ou não ser"?',
    answers: [
      { id: 'c1', text: 'Charles Dickens', isCorrect: false },
      { id: 'c2', text: 'William Shakespeare', isCorrect: true },
      { id: 'c3', text: 'Jane Austen', isCorrect: false },
      { id: 'c4', text: 'Leo Tolstoy', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'Quantos continentes existem na Terra?',
    answers: [
      { id: 'd1', text: 'Cinco', isCorrect: false },
      { id: 'd2', text: 'Seis', isCorrect: false },
      { id: 'd3', text: 'Sete', isCorrect: true },
      { id: 'd4', text: 'Oito', isCorrect: false },
    ],
  },{
    id: 5,
    title: 'Qual é o maior órgão do corpo humano?',
    answers: [
      { id: 'e1', text: 'Coração', isCorrect: false },
      { id: 'e2', text: 'Pele', isCorrect: true },
      { id: 'e3', text: 'Fígado', isCorrect: false },
      { id: 'e4', text: 'Rim', isCorrect: false },
    ],
  },
  {
    id: 6,
    title: 'Onde estão localizadas as pirâmides mais famosas?',
    answers: [
      { id: 'f1', text: 'México', isCorrect: false },
      { id: 'f2', text: 'Egito', isCorrect: true },
      { id: 'f3', text: 'Sudão', isCorrect: false },
      { id: 'f4', text: 'Peru', isCorrect: false },
    ],
  },
  {
    id: 7,
    title: 'Qual é a partitura musical escrita para nove instrumentos?',
    answers: [
      { id: 'g1', text: 'Solo', isCorrect: false },
      { id: 'g2', text: 'Duo', isCorrect: false },
      { id: 'g3', text: 'Octeto', isCorrect: false },
      { id: 'g4', text: 'Noneto', isCorrect: true },
    ],
  },
  {
    id: 8,
    title: 'Qual elemento tem o símbolo químico "O"?',
    answers: [
      { id: 'h1', text: 'Ouro', isCorrect: false },
      { id: 'h2', text: 'Oxigênio', isCorrect: true },
      { id: 'h3', text: 'Ósmio', isCorrect: false },
      { id: 'h4', text: 'Oligoelemento', isCorrect: false },
    ],
  },
  {
    id: 9,
    title: 'Quem é o autor de "Dom Quixote"?',
    answers: [
      { id: 'i1', text: 'Miguel de Cervantes', isCorrect: true },
      { id: 'i2', text: 'Gabriel García Márquez', isCorrect: false },
      { id: 'i3', text: 'Jorge Luis Borges', isCorrect: false },
      { id: 'i4', text: 'Pablo Neruda', isCorrect: false },
    ],
  },
  {
    id: 10,
    title: 'Qual é a moeda do Japão?',
    answers: [
      { id: 'j1', text: 'Renminbi', isCorrect: false },
      { id: 'j2', text: 'Yuan', isCorrect: false },
      { id: 'j3', text: 'Yen', isCorrect: true },
      { id: 'j4', text: 'Won', isCorrect: false },
    ],
  },
  {
    id: 11,
    title: 'Qual elemento químico possui a maior condutividade elétrica?',
    answers: [
      { id: 'k1', text: 'Ferro', isCorrect: false },
      { id: 'k2', text: 'Prata', isCorrect: true },
      { id: 'k3', text: 'Cobre', isCorrect: false },
      { id: 'k4', text: 'Ouro', isCorrect: false },
    ],
  },
  {
    id: 12,
    title: 'Qual é a usina energética da célula?',
    answers: [
      { id: 'l1', text: 'Núcleo', isCorrect: false },
      { id: 'l2', text: 'Mitocôndria', isCorrect: true },
      { id: 'l3', text: 'Ribossomo', isCorrect: false },
      { id: 'l4', text: 'Retículo endoplasmático', isCorrect: false },
    ],
  },
  {
    id: 13,
    title: 'Como é chamado o lado mais longo de um triângulo retângulo?',
    answers: [
      { id: 'm1', text: 'Hipotenusa', isCorrect: true },
      { id: 'm2', text: 'Adjacente', isCorrect: false },
      { id: 'm3', text: 'Oposto', isCorrect: false },
      { id: 'm4', text: 'Perímetro', isCorrect: false },
    ],
  },
  {
    id: 14,
    title: 'Quem é considerado o pai da física moderna?',
    answers: [
      { id: 'n1', text: 'Isaac Newton', isCorrect: false },
      { id: 'n2', text: 'Albert Einstein', isCorrect: true },
      { id: 'n3', text: 'Niels Bohr', isCorrect: false },
      { id: 'n4', text: 'Galileu Galilei', isCorrect: false },
    ],
  },
  {
    id: 15,
    title: 'Qual é o termo para uma palavra que é semelhante em significado a outra palavra?',
    answers: [
      { id: 'o1', text: 'Antônimo', isCorrect: false },
      { id: 'o2', text: 'Sinônimo', isCorrect: true },
      { id: 'o3', text: 'Homônimo', isCorrect: false },
      { id: 'o4', text: 'Acrônimo', isCorrect: false },
    ],
  },
  {
    id: 16,
    title: 'Qual país possui o maior número de lagos naturais?',
    answers: [
      { id: 'p1', text: 'Estados Unidos', isCorrect: false },
      { id: 'p2', text: 'Canadá', isCorrect: true },
      { id: 'p3', text: 'Rússia', isCorrect: false },
      { id: 'p4', text: 'China', isCorrect: false },
    ],
  },
  {
    id: 17,
    title: 'Em ciência da computação, o que significa "GUI"?',
    answers: [
      { id: 'q1', text: 'Interface Geral de Utilidade', isCorrect: false },
      { id: 'q2', text: 'Interface Gráfica do Usuário', isCorrect: true },
      { id: 'q3', text: 'Interface Unicast Global', isCorrect: false },
      { id: 'q4', text: 'Integração Geral do Usuário', isCorrect: false },
    ],
  },
  {
    id: 18,
    title: 'Qual planeta possui o maior número de luas?',
    answers: [
      { id: 'r1', text: 'Terra', isCorrect: false },
      { id: 'r2', text: 'Júpiter', isCorrect: true },
      { id: 'r3', text: 'Saturno', isCorrect: false },
      { id: 'r4', text: 'Urano', isCorrect: false },
    ],
  },
  {
    id: 19,
    title: 'Qual é o componente principal do sol?',
    answers: [
      { id: 's1', text: 'Lava Líquida', isCorrect: false },
      { id: 's2', text: 'Hidrogênio Metálico Sólido', isCorrect: false },
      { id: 's3', text: 'Plasma', isCorrect: true },
      { id: 's4', text: 'Gasolina', isCorrect: false },
    ],
  },
  {
    id: 20,
    title: 'Qual dos seguintes é um recurso não renovável?',
    answers: [
      { id: 't1', text: 'Energia Solar', isCorrect: false },
      { id: 't2', text: 'Energia Eólica', isCorrect: false },
      { id: 't3', text: 'Carvão', isCorrect: true },
      { id: 't4', text: 'Madeira', isCorrect: false },
    ],
},
  {
    "id": 21,
    "title": "Qual conceito matemático é definido como o conjunto de todos os pontos equidistantes de um determinado ponto?",
    "answers": [
      { "id": "u1", "text": "Plano", "isCorrect": false },
      { "id": "u2", "text": "Esfera", "isCorrect": true },
      { "id": "u3", "text": "Círculo", "isCorrect": false },
      { "id": "u4", "text": "Elipse", "isCorrect": false }
    ]
  },
  {
    "id": 22,
    "title": "Qual rei assinou a Magna Carta em 1215?",
    "answers": [
      { "id": "v1", "text": "Rei Henrique VIII", "isCorrect": false },
      { "id": "v2", "text": "Rei João", "isCorrect": true },
      { "id": "v3", "text": "Rei Ricardo III", "isCorrect": false },
      { "id": "v4", "text": "Rei Eduardo I", "isCorrect": false }
    ]
  },
  {
    "id": 23,
    "title": "Na peça de Shakespeare Júlio César, quem diz 'Cuidado com os Idos de Março'?",
    "answers": [
      { "id": "w1", "text": "Júlio César", "isCorrect": false },
      { "id": "w2", "text": "Cássio", "isCorrect": false },
      { "id": "w3", "text": "Bruto", "isCorrect": false },
      { "id": "w4", "text": "Adivinho", "isCorrect": true }
    ]
  },
  {
    "id": 24,
    "title": "Qual filósofo é famoso pela citação 'Penso, logo existo'?",
    "answers": [
      { "id": "x1", "text": "Aristóteles", "isCorrect": false },
      { "id": "x2", "text": "René Descartes", "isCorrect": true },
      { "id": "x3", "text": "Platão", "isCorrect": false },
      { "id": "x4", "text": "Sócrates", "isCorrect": false }
    ]
  },
  {
    "id": 25,
    "title": "Qual é o elemento naturalmente mais pesado encontrado na Terra?",
    "answers": [
      { "id": "y1", "text": "Urânio", "isCorrect": true },
      { "id": "y2", "text": "Chumbo", "isCorrect": false },
      { "id": "y3", "text": "Ósmio", "isCorrect": false },
      { "id": "y4", "text": "Plutônio", "isCorrect": false }
    ]
  },
  {
    "id": 26,
    "title": "O layout de teclado Dvorak foi projetado para substituir qual layout?",
    "answers": [
      { "id": "z1", "text": "AZERTY", "isCorrect": false },
      { "id": "z2", "text": "QWERTY", "isCorrect": true },
      { "id": "z3", "text": "QWERTZ", "isCorrect": false },
      { "id": "z4", "text": "Colemak", "isCorrect": false }
    ]
  },
  {
    "id": 27,
    "title": "Qual é o processo pelo qual as plantas utilizam a luz solar para sintetizar alimentos a partir do dióxido de carbono e água chamado?",
    "answers": [
      { "id": "aa1", "text": "Fotossíntese", "isCorrect": true },
      { "id": "aa2", "text": "Quimiossíntese", "isCorrect": false },
      { "id": "aa3", "text": "Respiração", "isCorrect": false },
      { "id": "aa4", "text": "Fermentação", "isCorrect": false }
    ]
  },
  {
    "id": 28,
    "title": "Qual físico desenvolveu o princípio da superposição?",
    "answers": [
      { "id": "ab1", "text": "Isaac Newton", "isCorrect": false },
      { "id": "ab2", "text": "Niels Bohr", "isCorrect": false },
      { "id": "ab3", "text": "Erwin Schrödinger", "isCorrect": true },
      { "id": "ab4", "text": "Albert Einstein", "isCorrect": false }
    ]
  },
  {
    "id": 29,
    "title": "Qual dessas figuras históricas é conhecida por seu extenso trabalho na classificação de plantas e animais?",
    "answers": [
      { "id": "ac1", "text": "Gregor Mendel", "isCorrect": false },
      { "id": "ac2", "text": "Carl Linnaeus", "isCorrect": true },
      { "id": "ac3", "text": "Charles Darwin", "isCorrect": false },
      { "id": "ac4", "text": "Louis Pasteur", "isCorrect": false }
    ]
  },
  {
    "id": 30,
    "title": "O Império Bizantino estava mais intimamente associado a qual grande cidade?",
    "answers": [
      { "id": "ad1", "text": "Roma", "isCorrect": false },
      { "id": "ad2", "text": "Atenas", "isCorrect": false },
      { "id": "ad3", "text": "Constantinopla", "isCorrect": true },
      { "id": "ad4", "text": "Jerusalém", "isCorrect": false }
    ]
  },
  {
    "id": 31,
    "title": "Qual teorema estabelece a relação entre os lados e ângulos de um triângulo retângulo?",
    "answers": [
      { "id": "ae1", "text": "Teorema de Pitágoras", "isCorrect": true },
      { "id": "ae2", "text": "Último Teorema de Fermat", "isCorrect": false },
      { "id": "ae3", "text": "Teorema Binomial", "isCorrect": false },
      { "id": "ae4", "text": "Teorema Fundamental da Álgebra", "isCorrect": false }
    ]
  },
  {
    "id": 32,
    "title": "Quem é creditado com a invenção do primeiro avião bem-sucedido?",
    "answers": [
      { "id": "af1", "text": "Os Irmãos Montgolfier", "isCorrect": false },
      { "id": "af2", "text": "Leonardo da Vinci", "isCorrect": false },
      { "id": "af3", "text": "Os Irmãos Wright", "isCorrect": true },
      { "id": "af4", "text": "Gustave Whitehead", "isCorrect": false }
    ]
  },
  {
    "id": 33,
    "title": "Qual desses elementos é nomeado em homenagem ao criador da tabela periódica?",
    "answers": [
      { "id": "ag1", "text": "Cúrio", "isCorrect": false },
      { "id": "ag2", "text": "Gadolínio", "isCorrect": false },
      { "id": "ag3", "text": "Mendelévio", "isCorrect": true },
      { "id": "ag4", "text": "Einstênio", "isCorrect": false }
    ]
  },
  {
    "id": 34,
    "title": "Qual romancista escreveu 'O Som e a Fúria' e 'Enquanto Agonizo'?",
    "answers": [
      { "id": "ah1", "text": "William Faulkner", "isCorrect": true },
      { "id": "ah2", "text": "Ernest Hemingway", "isCorrect": false },
      { "id": "ah3", "text": "John Steinbeck", "isCorrect": false },
      { "id": "ah4", "text": "F. Scott Fitzgerald", "isCorrect": false }
    ]
  },
  {
    "id": 35,
    "title": "A Batalha de Termópilas foi travada entre uma aliança de cidades-estado gregas e qual império?",
    "answers": [
      { "id": "ai1", "text": "O Império Romano", "isCorrect": false },
      { "id": "ai2", "text": "O Império Persa", "isCorrect": true },
      { "id": "ai3", "text": "O Império Macedônico", "isCorrect": false },
      { "id": "ai4", "text": "O Império Otomano", "isCorrect": false }
    ]
  },
  {
    "id": 36,
    "title": "Qual princípio afirma que, para um líquido em um recipiente, uma mudança de pressão em qualquer ponto é transmitida sem diminuição para todos os pontos no líquido?",
    "answers": [
      { "id": "aj1", "text": "Princípio de Bernoulli", "isCorrect": false },
      { "id": "aj2", "text": "Princípio de Pascal", "isCorrect": true },
      { "id": "aj3", "text": "Princípio de Arquimedes", "isCorrect": false },
      { "id": "aj4", "text": "Lei de Hooke", "isCorrect": false }
    ]
  },
  {
    "id": 37,
    "title": "O conceito de 'tabula rasa', a ideia de que os indivíduos nascem sem conteúdo mental inato, está associado a qual filósofo?",
    "answers": [
      { "id": "ak1", "text": "John Locke", "isCorrect": true },
      { "id": "ak2", "text": "Immanuel Kant", "isCorrect": false },
      { "id": "ak3", "text": "Platão", "isCorrect": false },
      { "id": "ak4", "text": "Aristóteles", "isCorrect": false }
    ]
  },
  {
    "id": 38,
    "title": "Qual é o nome da conjectura que afirma que todo número inteiro par maior que dois é a soma de dois números primos?",
    "answers": [
      { "id": "al1", "text": "Hipótese de Riemann", "isCorrect": false },
      { "id": "al2", "text": "Conjectura de Goldbach", "isCorrect": true },
      { "id": "al3", "text": "Último Teorema de Fermat", "isCorrect": false },
      { "id": "al4", "text": "Conjectura de Poincaré", "isCorrect": false }
    ]
  },
  {
    "id": 39,
    "title": "Quem é conhecido por formular as quatro leis da termodinâmica?",
    "answers": [
      { "id": "am1", "text": "Isaac Newton", "isCorrect": false },
      { "id": "am2", "text": "Albert Einstein", "isCorrect": false },
      { "id": "am3", "text": "James Clerk Maxwell", "isCorrect": false },
      { "id": "am4", "text": "Nicolas Léonard Sadi Carnot", "isCorrect": true }
    ]
  },
  {
    "id": 40,
    "title": "Qual pintor é conhecido pela obra 'A Noite Estrelada'?",
    "answers": [
      { "id": "an1", "text": "Pablo Picasso", "isCorrect": false },
      { "id": "an2", "text": "Vincent van Gogh", "isCorrect": true },
      { "id": "an3", "text": "Claude Monet", "isCorrect": false },
      { "id": "an4", "text": "Johannes Vermeer", "isCorrect": false }
    ]
  },  
  {
    "id": 41,
    "title": "Qual animal produz leite cor-de-rosa?",
    "answers": [
      { "id": "ao1", "text": "Hipopótamos", "isCorrect": true },
      { "id": "ao2", "text": "Coalas", "isCorrect": false },
      { "id": "ao3", "text": "Leões-marinhos", "isCorrect": false },
      { "id": "ao4", "text": "Ornitorrinco", "isCorrect": false }
    ]
  },
  {
    "id": 42,
    "title": "Em qual tipo de matéria os átomos estão mais fortemente compactados?",
    "answers": [
      { "id": "ap1", "text": "Plasma", "isCorrect": false },
      { "id": "ap2", "text": "Líquido", "isCorrect": false },
      { "id": "ap3", "text": "Gás", "isCorrect": false },
      { "id": "ap4", "text": "Sólido", "isCorrect": true }
    ]
  },
  {
    "id": 43,
    "title": "Qual constante matemática é conhecida como a constante de Arquimedes?",
    "answers": [
      { "id": "aq1", "text": "e", "isCorrect": false },
      { "id": "aq2", "text": "Pi", "isCorrect": true },
      { "id": "aq3", "text": "A Razão Áurea", "isCorrect": false },
      { "id": "aq4", "text": "Número de Avogadro", "isCorrect": false }
    ]
  },
  {
    "id": 44,
    "title": "Qual é o material natural mais duro conhecido?",
    "answers": [
      { "id": "ar1", "text": "Grafeno", "isCorrect": false },
      { "id": "ar2", "text": "Diamante", "isCorrect": true },
      { "id": "ar3", "text": "Nitreto de Boro", "isCorrect": false },
      { "id": "ar4", "text": "Nitreto de Boro Wurtzita", "isCorrect": false }
    ]
  },
  {
    "id": 45,
    "title": "Qual destes elementos não é um gás nobre?",
    "answers": [
      { "id": "as1", "text": "Neônio", "isCorrect": false },
      { "id": "as2", "text": "Argônio", "isCorrect": false },
      { "id": "as3", "text": "Xenônio", "isCorrect": false },
      { "id": "as4", "text": "Hidrogênio", "isCorrect": true }
    ]
  },
  {
    "id": 46,
    "title": "Qual foi o primeiro polímero sintético a ser inventado?",
    "answers": [
      { "id": "at1", "text": "Náilon", "isCorrect": false },
      { "id": "at2", "text": "Polietileno", "isCorrect": false },
      { "id": "at3", "text": "Baquelite", "isCorrect": true },
      { "id": "at4", "text": "PVC", "isCorrect": false }
    ]
  },
  {
    "id": 47,
    "title": "Qual destes idiomas é considerado o mais antigo?",
    "answers": [
      { "id": "au1", "text": "Sânscrito", "isCorrect": false },
      { "id": "au2", "text": "Latim", "isCorrect": false },
      { "id": "au3", "text": "Tâmil", "isCorrect": true },
      { "id": "au4", "text": "Grego", "isCorrect": false }
    ]
  },
  {
    "id": 48,
    "title": "Qual planeta tem mais luas?",
    "answers": [
      { "id": "av1", "text": "Terra", "isCorrect": false },
      { "id": "av2", "text": "Júpiter", "isCorrect": true },
      { "id": "av3", "text": "Saturno", "isCorrect": false },
      { "id": "av4", "text": "Netuno", "isCorrect": false }
    ]
  },
  {
    "id": 49,
    "title": "Quem é considerado o pai da taxonomia moderna?",
    "answers": [
      { "id": "aw1", "text": "Charles Darwin", "isCorrect": false },
      { "id": "aw2", "text": "Carl Linnaeus", "isCorrect": true },
      { "id": "aw3", "text": "Gregor Mendel", "isCorrect": false },
      { "id": "aw4", "text": "Alfred Wallace", "isCorrect": false }
    ]
  },
  {
    "id": 50,
    "title": "Qual é o termo para um grupo de estrelas que forma um contorno imaginário ou um padrão significativo na esfera celeste?",
    "answers": [
      { "id": "ax1", "text": "Galáxia", "isCorrect": false },
      { "id": "ax2", "text": "Nebulosa", "isCorrect": false },
      { "id": "ax3", "text": "Constelação", "isCorrect": true },
      { "id": "ax4", "text": "Aglomerado", "isCorrect": false }
    ]
  }
  
];


export default questoesData;
