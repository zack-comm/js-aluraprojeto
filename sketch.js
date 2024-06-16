function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255); // cor do texto (branco)
  }
  
  function draw() {
    background(0); // fundo preto
    
    // Criando as bolinhas uhuuuuuuu!
    for (let i = 0; i < 10; i++) { // reduzindo a quantidade de bolinhas para melhor visualização
      let x = random(width); // posição x aleatória
      let y = random(height); // posição y aleatória
      let diameter = random(10, 50); // diâmetro aleatório entre 10 e 50
      let r = random(255); // componente vermelho da cor aleatória
      let g = random(255); // componente verde da cor aleatória
      let b = random(255); // componente azul da cor aleatória
      fill(r, g, b); // define a cor da bolinha
      noStroke(); // sem contorno
      ellipse(x, y, diameter, diameter); // desenha a bolinha
    }
    
    // Texto "Olá mundo eterno!" no centro da tela
    text("Vamos festejar?", width/2, height/2);
  }
  