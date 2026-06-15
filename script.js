// Efeito de digitação estilo terminal (Typing Effect)
const titleText = "> Sistema de Defesa Ativado_";
let charIndex = 0;
const typingSpeed = 100; // Velocidade da digitação em milissegundos

function typeWriter() {
    if (charIndex < titleText.length) {
        document.getElementById("typing-text").innerHTML += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Inicia o efeito quando a página termina de carregar
window.onload = typeWriter;

// Simulação de verificação de segurança (Botão do Hero)
function iniciarScan() {
    const resultElement = document.getElementById("scan-result");
    const button = document.querySelector(".btn");
    
    // Desativa o botão para evitar múltiplos cliques
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
    
    resultElement.style.color = "#e0e0e0";
    resultElement.innerHTML = "[*] Iniciando varredura de portas locais...";

    setTimeout(() => {
        resultElement.innerHTML = "[*] Analisando tráfego de rede e pacotes...";
    }, 1500);

    setTimeout(() => {
        resultElement.innerHTML = "[*] Verificando integridade de arquivos do sistema...";
    }, 3000);

    setTimeout(() => {
        resultElement.style.color = "#00ff41";
        resultElement.innerHTML = "[+] Sistema Seguro. Nenhuma vulnerabilidade detectada.";
        
        // Reativa o botão
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
    }, 4500);
}
