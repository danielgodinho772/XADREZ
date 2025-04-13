const tabuleiro = document.getElementById('tabuleiro');

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        const quadrado = document.createElement('div');
    
        if ((linha + coluna) % 2 === 0) {
            quadrado.classList.add('quadrado', 'branco');
        } else {
            quadrado.classList.add('quadrado', 'preto');
        }
        tabuleiro.appendChild(quadrado);
    }

    


}