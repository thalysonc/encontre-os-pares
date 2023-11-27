// Adiciona um ouvinte de evento de clique para cada botão de reinício
// Chama a função de reinício quando um botão é clicado
document.querySelectorAll(".reiniciar").forEach(function (btn) {
  btn.addEventListener("click", reiniciar);
});

let tempoRestanteMillis = 0;

document.querySelector("#inicio-btn").addEventListener("click", iniciaJogo);

document
  .querySelector("#proximoNivel-btn")
  .addEventListener("click", proximoNivel);


// INÍCIO da function iniciaJogo()
// Remove a classe "visivel" da tela inicial
// Chama a função de inicialização do jogo

function iniciaJogo() {
  document.querySelector("#tela-inicial").classList.remove("visivel");
  iniciar();
}

// FIM da function iniciaJogo()


// INÍCIO da function iniciar()
// Reinicia variáveis e configurações do jogo
// Adiciona um ouvinte de evento à carta coringa se estiver no nível adequado
// Distribui as cartas no tabuleiro
// Atualiza elementos HTML
// Inicia ou reinicia o contador de tempo

function iniciar() {
  movimentos = 0;
  tempoRestanteMillis = niveis[nivelAtual].tempo * 1000;
  if (nivelAtual >= 2) {
    document
      .querySelector("#carta-coringa")
      .addEventListener("click", usarCartaCoringa);
  }
  reparteCartas(niveis[nivelAtual].cartas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector("#endGame").classList.remove("visivel");
  document.querySelector("#gameOver").classList.remove("visivel");
  document.querySelector("#gameOver-tempo").classList.remove("visivel");
  document.querySelector("#proximoNivel").classList.remove("visivel");

  clearInterval(contadorTempo);

  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", revelar);
  });
  iniciarContadorTempo();
}

// FIM da function iniciar()


// INÍCIO da function reiniciar()
// Oculta a carta coringa e reinicia o jogo no nível 0
// Atualiza o nível
// Inicia o jogo

function reiniciar() {
  location.reload(); // Atualiza a página volta a a home com as informações do jogo

  // Para utilizar o código abaixo, deve comentar o location.reload(); acima. O código abaixo inicia o jogo do Nível 1

  // document.querySelector("#carta-coringa").style.display = "none";
  // nivelAtual = 0;
  // atualizaNivel();
  // iniciar();
}

// FIM da function reiniciar()


// INÍCIO da function atualizaNivel()
// Atualiza o número do nível exibido

function atualizaNivel() {
  let nivelTexto = nivelAtual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

// FIM da function atualizaNivel()


// INÍCIO da function proximoNivel()
// Avança para o próximo nível
// Exibe a carta coringa se estiver no nível adequado
// Reinicia o contador de tempo e inicia o jogo

function proximoNivel() {
  nivelAtual++;
  if (nivelAtual >= 2) {
    document.querySelector("#carta-coringa").style.display = "inline-block";
  }
  clearInterval(contadorTempo);
  atualizaNivel();
  iniciar();
}

// FIM da function proximoNivel()


// INÍCIO da function embaralhaCartas()
// Cria pares duplicando as cartas
// Embaralha as cartas
// Retorna o resultado do embaralhamento

function embaralhaCartas(cartas) {
  let pares = cartas.concat(cartas); // Duplique as cartas para formar pares
  let resultado = [];

  while (pares.length > 0) {
    const index = Math.floor(Math.random() * pares.length);
    const carta = pares.splice(index, 1)[0];
    resultado.push(carta);
  }

  return resultado;
}

// FIM da function embaralhaCartas()


// INÍCIO da function reparteCartas()
// Limpa o tabuleiro
// Embaralha e exibe as cartas no tabuleiro

function reparteCartas(cartas) {
  let mesa = document.querySelector("#mesa");
  let cartasEmbaralhadas = embaralhaCartas(cartas);
  mesa.innerHTML = "";

  cartasEmbaralhadas.forEach(function (emoji) {
    let carta = document.createElement("div");

    carta.innerHTML =
      "<div class='carta coluna" +
      nivelAtual +
      " ' data-valor= " +
      emoji +
      ">" +
      "<div class='carta__emoji'>" +
      emoji +
      "</div>" +
      "</div>";

    mesa.appendChild(carta);
  });
}

// FIM da function reparteCartas()


let contadorTempo;

// INÍCIO da function atualizaTempo()
// Converte o tempo restante para minutos e segundos
// Atualiza o elemento HTML com o tempo formatado

function atualizaTempo() {
  const minutos = Math.floor(tempoRestanteMillis / 60000); // Converter milissegundos em minutos
  const segundos = Math.floor((tempoRestanteMillis % 60000) / 1000); // Converter milissegundos restantes em segundos
  document.querySelector("#tempo").innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

// FIM da function atualizaTempo()


// INÍCIO da function reiniciarTempo()
// Reinicia o contador de tempo
// Atualiza o tempo restante

function reiniciarTempo() {
  clearInterval(contadorTempo);
  tempoRestante = niveis[nivelAtual].tempo;
  atualizaTempo();
  iniciarContadorTempo();
}

// FIM da function reiniciarTempo()


// INÍCIO da function reiniciarTempo()
// Inicia o contador de tempo
// Atualiza o tempo restante a cada segundo
// Mostra a tela de Game Over por tempo se o tempo esgotar

function iniciarContadorTempo() {
  contadorTempo = setInterval(function () {
    tempoRestanteMillis -= 1000;
    atualizaTempo();
    if (tempoRestanteMillis <= 0) {
      clearInterval(contadorTempo);
      // adiciona o modal de GameOver por tempo
      document.querySelector("#gameOver-tempo").classList.add("visivel");
    }
  }, 1000);
}

// FIM da function reiniciarTempo()


