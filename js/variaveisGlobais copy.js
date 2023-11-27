// Variáveis Globais

let movimentos = 0;

// Emojis aleatórios
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
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (!emojisAleatorios.includes(randomEmoji)) {
      emojisAleatorios.push(randomEmoji);
    }
  }

  return emojisAleatorios;
}

let grupoCartas = emojisAleatorios(100);

let nivelAtual = 0;

let niveis = [
  {
    cartas: emojis.slice(0, 3), 
    movimentosMax: 6, 
  },
  {
    cartas: emojis.slice(3, 5), 
    movimentosMax: 10, 
  },
  {
    cartas: emojis.slice(5, 8), 
    movimentosMax: 15, 
  },
  {
    cartas: emojis.slice(8, 12), 
    movimentosMax: 25, 
  },
  {
    cartas: emojis.slice(12, 16), 
    movimentosMax: 40, 
  },
];



