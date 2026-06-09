/* script.js - Lógica Interativa do Convite */

// 1. CONFIGURAÇÃO DO CONVITE
// Altere estas variáveis para personalizar o convite com suas informações
const CONFIG = {
  // WhatsApp para RSVP (Apenas números, incluindo código do país e DDD)
  whatsappNumber: '5500000000000',
  // Mensagem automática enviada ao clicar em Confirmar Presença
  whatsappMessage: 'Olá! Estou confirmando minha presença no aniversário de Ana Luísa.',
  // Link para a localização (Google Maps ou Waze)
  googleMapsUrl: 'https://maps.app.goo.gl/Hu7PBUov5WkNzxAi8', 
  // Chave PIX para sugestão de presentes
  pixKey: '12.345.678/0001-90'
};

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa a configuração dos botões
  initActionButtons();
  // Inicializa o controle do modal
  initModal();
  // Inicializa a animação de confete/pétalas
  initConfetti();
  // Inicializa a revelação suave de elementos ao rolar a página
  initScrollAnimations();
});

// 2. CONFIGURAÇÃO DOS LINKS DE AÇÃO
function initActionButtons() {
  const btnConfirm = document.getElementById('btn-confirm-rsvp');
  const btnLocation = document.getElementById('btn-view-location');

  if (btnConfirm) {
    btnConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      const encodedMsg = encodeURIComponent(CONFIG.whatsappMessage);
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  if (btnLocation) {
    btnLocation.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(CONFIG.googleMapsUrl, '_blank', 'noopener,noreferrer');
    });
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
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
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

  // Copiar chave PIX para a área de transferência
  if (btnCopyPix) {
    btnCopyPix.addEventListener('click', () => {
      navigator.clipboard.writeText(CONFIG.pixKey).then(() => {
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
  let particles = [];
  
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
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
