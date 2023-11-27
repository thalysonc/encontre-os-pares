// Variáveis Globais

let movimentos = 0;
let tempoRestante = 0;

function emojisAleatorios(total) {
  let emojis = [
    "🦄", "🍦", "☂️", "🌈", "👽", "🍉", "🤖", "🎃", "🤡", "💩",
    "👹", "🐭", "☠️", "🍕", "👾", "⚽️", "🍔", "🎈", "🚀", "🐶",
    "🐱", "🐻", "🐯", "🦁", "🐴", "🦋", "🌻", "🌺", "🍀", "🍁",
    "🍂", "🍃", "🌊", "🌍", "🌎", "🌏", "🌕", "🌖", "🌗", "🌘",
    "🌑", "🌒", "🌓", "🌔", "🌘", "🌛", "🌜", "🌝", "🌞", "⭐",
    "🌟", "💫", "✨", "🔥", "💥", "💧", "💦", "💨", "🌪️", "🌫️",
    "❄️", "☃️", "⛄", "🌦️", "🌧️", "🌨️", "🌩️", "🌪️", "🌫️",
    "🌬️", "🌱", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
    "🍏", "🍑", "🍒", "🍓", "🥥", "🥝", "🍅", "🥑", "🍆", "🥦",
    "🥒", "🌽", "🥕", "🥔", "🍠", "🥐", "🍞", "🥖", "🧀", "🥨",
    "🥯", "🥞", "🧇", "🧆", "🥚", "🍳", "🥓", "🥩", "🍗", "🍖",
    "🦴", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🌮", "🌯", "🍜",
    "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🍡", "🥟", "🥠", "🥡",
    "🥢", "🍽️", "🍴", "🥄", "🧂", "🧈", "🍽️", "🧊", "🥂", "🍾"
  ];

  let emojisAleatorios = [];

  while (emojisAleatorios.length < total) {
    let emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    emojisAleatorios.push(emojiAleatorio);
  }

  return emojisAleatorios;
}

let nivelAtual = 0;
let niveis = [
  { // nível 1
    cartas: emojisAleatorios(3),
    movimentosMax: 6,
    tempo: 60,
  },
  { // nível 2
    cartas: emojisAleatorios(5),
    movimentosMax: 10,
    tempo: 90,
  },
  { // nível 3
    cartas: emojisAleatorios(8),
    movimentosMax: 15,
    tempo: 120,
  },
  { // nível 4
    cartas: emojisAleatorios(12),
    movimentosMax: 25,
    tempo: 150,
  },
  { // nível 5
    cartas: emojisAleatorios(16),
    movimentosMax: 40,
    tempo: 200,
  },
];
