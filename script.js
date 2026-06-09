/* script.js - Lógica Interativa do Convite */

// 1. CONFIGURAÇÃO DO CONVITE
const CONFIG = {
  whatsappNumber: '5500000000000',
  whatsappMessage: 'Olá! Estou confirmando minha presença no aniversário de Ana Luísa.',
  googleMapsUrl: 'https://maps.app.goo.gl/Hu7PBUov5WkNzxAi8', 
  pixKey: '12.345.678/0001-90'
};

let toggleConfettiPause = null;

// Função utilitária resiliente de cópia para clipboard (com fallback para Webviews e HTTP)
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    return new Promise((resolve, reject) => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          resolve();
        } else {
          reject(new Error('Falha ao copiar via execCommand'));
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}

// 1. INICIALIZAÇÃO DOS COMPONENTES (Executado imediatamente no rodapé do body)
initActionButtons();
initModal();
initConfetti();
initScrollAnimations();

// Controle da tela de carregamento (Preloader)
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 3000); // Segurança: remove após 3s em caso de falha de conexão

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('fade-out')) {
    preloader.classList.add('fade-out');
  }
}


// 2. CONFIGURAÇÃO DOS LINKS DE AÇÃO
function initActionButtons() {
  const btnConfirm = document.getElementById('btn-confirm-rsvp');
  const btnLocation = document.getElementById('btn-view-location');

  if (btnConfirm) {
    const encodedMsg = encodeURIComponent(CONFIG.whatsappMessage);
    btnConfirm.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
    btnConfirm.target = '_blank';
    btnConfirm.rel = 'noopener noreferrer';
  }

  if (btnLocation) {
    btnLocation.href = CONFIG.googleMapsUrl;
    btnLocation.target = '_blank';
    btnLocation.rel = 'noopener noreferrer';
  }
}

// 3. CONTROLE DO MODAL (SUGESTÕES DE PRESENTES)
function initModal() {
  const modal = document.getElementById('gifts-modal');
  const btnOpen = document.getElementById('btn-open-gifts');
  const btnClose = document.getElementById('btn-close-modal');
  const btnCopyPix = document.getElementById('btn-copy-pix');
  const pixToast = document.getElementById('pix-toast');

  if (!modal) return;

  // Função para abrir o modal
  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (toggleConfettiPause) toggleConfettiPause(true); // Pausa a queda de confetes para poupar bateria
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (toggleConfettiPause) toggleConfettiPause(false); // Retoma os confetes
  };

  if (btnOpen) btnOpen.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  // Fecha o modal ao clicar na área escura (overlay)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fecha o modal ao pressionar a tecla ESC (Acessibilidade)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Copiar chave PIX para a área de transferência com suporte resiliente
  if (btnCopyPix) {
    btnCopyPix.addEventListener('click', () => {
      copyToClipboard(CONFIG.pixKey).then(() => {
        // Mostra o toast animado
        if (pixToast) {
          pixToast.classList.add('show');
          setTimeout(() => {
            pixToast.classList.remove('show');
          }, 2500);
        }
      }).catch(err => {
        console.error('Erro ao copiar chave PIX: ', err);
      });
    });
  }
}

// 4. ANIMAÇÃO SUAVE DE PETALAS/CONFETES NO CANVAS
function initConfetti() {
  const canvas = document.getElementById('confetti');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return; // Aborta graciosamente caso o contexto 2D não esteja disponível

  let particles = [];
  let isConfettiPaused = false;

  // Controlador global de pausa para ser acessado de fora do escopo
  toggleConfettiPause = (paused) => {
    isConfettiPaused = paused;
    if (paused) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas ao pausar
    }
  };

  // Paleta de cores baseada em tons suaves de azul e branco
  const colors = ['#041632', '#43617d', '#b7c7eb', '#ffffff', '#cee5ff'];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height - canvas.height;
      this.size = Math.random() * 5 + 2;
      this.speedY = Math.random() * 0.8 + 0.3; // Velocidade suave e lenta
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.35 + 0.1; // Muito sutil
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.angle += this.spin;
      if (this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      // Desenha pétalas ovais suaves
      ctx.ellipse(0, 0, this.size, this.size / 1.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function setup() {
    resizeCanvas();
    particles = [];
    const maxParticles = window.innerWidth < 768 ? 25 : 50; // Menos partículas no mobile para melhor performance
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
  }

  function loop() {
    if (!isConfettiPaused) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }
    requestAnimationFrame(loop);
  }

  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      resizeCanvas();
    }
  });

  setup();
  loop();
}

// 5. ANIMAÇÕES DE REVELAÇÃO NO SCROLL (INTERSECTION OBSERVER)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Executa apenas uma vez
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
  elementsToReveal.forEach(el => {
    observer.observe(el);
  });
}
