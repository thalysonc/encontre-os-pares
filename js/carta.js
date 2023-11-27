// INÍCIO da function revelar()
// Obtém todas as cartas reveladas que ainda não foram acertadas
// Limita a ação se já houver duas cartas reveladas
// Adiciona a classe "revelada" à carta clicada
// Reproduz um som de clique
// Compara as cartas reveladas se houver pelo menos duas

function revelar() {
  let cartasReveladas;
  let totalReveladas = document.querySelectorAll(".revelada:not(.acerto)");

  if (totalReveladas.length > 1) {
    return;
  }

  this.classList.add("revelada");
  audioCarta = document.querySelector("#audio-carta");
  audioCarta.volume = 0.8;
  audioCarta.cloneNode().play();

  cartasReveladas = document.querySelectorAll(".revelada:not(.acerto)");
  if (cartasReveladas.length < 2) {
    return;
  }

  comparar(cartasReveladas);
}

// FIM da function revelar()


// INÍCIO da function revelarTodasAsCartas()
// Revela todas as cartas que ainda não foram acertadas
// Reproduz um som específico
// Oculta as cartas reveladas após 2 segundos

function revelarTodasAsCartas() {
  audioAcerto = document.querySelector("#audio-coringa");
  audioAcerto.volume = 0.8;
  audioAcerto.play();
  document.querySelectorAll(".carta:not(.acerto)").forEach(function (elemento) {
    elemento.classList.add("revelada");
  });

  setTimeout(function () {
    document
      .querySelectorAll(".carta:not(.acerto)")
      .forEach(function (elemento) {
        elemento.classList.remove("revelada");
      });
  }, 2000);
}

// FIM da function revelarTodasAsCartas()


// INÍCIO da function usarCartaCoringa()
// Revela todas as cartas e oculta a carta coringa

function usarCartaCoringa() {
  revelarTodasAsCartas();
  document.querySelector("#carta-coringa").style.display = "none";
}

// FIM da function usarCartaCoringa()


// INÍCIO da function comparar()
// Compara duas cartas e chama a função correspondente (acertou ou errou)

function comparar(cartas) {
  if (cartas[0].dataset.valor === cartas[1].dataset.valor) {
    acertou(cartas);
  } else {
    errou(cartas);
  }
}

// FIM da function usarCartaCoringa()


// INÍCIO da function acertou()
// Adiciona a classe "acerto" às cartas acertadas
// Reproduz um som de acerto
// Atualiza o contador de movimentos
// Verifica se todas as cartas foram acertadas ou se os movimentos máximos foram atingidos

function acertou(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("acerto");
  });
  audioAcerto = document.querySelector("#audio-acertou");
  audioAcerto.volume = 0.8;
  audioAcerto.play();
  atualizaContador();
  cartasNaoReveladas = document.querySelectorAll(".carta:not(.acerto)");
  if (cartasNaoReveladas.length === 0) {
    setTimeout(fimRodada, 1000);
  } else if (movimentos > niveis[nivelAtual].movimentosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visivel");
    }, 1000);
    return;
  }
}

// FIM da function acertou()


// INÍCIO da function errou()
// Adiciona a classe "errou" às cartas erradas
// Reproduz um som de erro
// Atualiza o contador de movimentos
// Oculta as cartas erradas após 1 segundo
// Verifica se os movimentos máximos foram atingidos

function errou(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("errou");
  });

  let audioErrou = document.querySelector("#audio-errou");
  audioErrou.volume = 0.28;
  audioErrou.play();
  atualizaContador();
  setTimeout(function () {
    cartas.forEach(function (elemento) {
      elemento.classList.remove("revelada");
      elemento.classList.remove("errou");
    });
  }, 1000);

  if (movimentos > niveis[nivelAtual].movimentosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visivel");
    }, 1000);
    return;
  }
}

// FIM da function errou()


// INÍCIO da function atualizaContador()
// Incrementa o contador de movimentos
// Atualiza o texto do elemento HTML

function atualizaContador() {
  let movimentosTexto;
  movimentos++;
  movimentosTexto = movimentos;

  if (movimentos < 10) {
    movimentosTexto = "0" + movimentos;
  }
  document.querySelector("#mov").innerText = movimentosTexto;
}

// FIM da function atualizaContador()


// INÍCIO da function maxContador()
// Atualiza o texto do elemento HTML com o número máximo de movimentos

function maxContador() {
  let movimentosMaxTexto = niveis[nivelAtual].movimentosMax;
  if (movimentosMaxTexto < 10) {
    movimentosMaxTexto = "0" + movimentosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimentosMaxTexto;
}

// FIM da function maxContador()


// INÍCIO da function fimRodada()
// Exibe um modal de próximo nível se houver mais níveis, caso contrário, chama a função para vencer o jogo

function fimRodada() {
  if (nivelAtual < niveis.length - 1) {
    document.querySelector("#proximoNivel").classList.add("visivel");
    //alert(nivelAtual);
  } else {
    venceJogo();
  }
}

// FIM da function fimRodada()


// INÍCIO da function venceJogo()
// Exibe um modal de jogo vencido
// Reproduz um som de vitória
// Adiciona um efeito de confete à página

function venceJogo() {
  document.querySelector("#endGame").classList.add("visivel");
  let audioVenceu = document.querySelector("#audio-venceu");
  audioVenceu.volume = 0.8;
  audioVenceu.play();
  (() => {
    new Confetti({
      width: window.innerWidth,
      height: window.innerHeight,
      length: 80,
      duration: 5000,
    });
  })();
}

// FIM da function venceJogo()
