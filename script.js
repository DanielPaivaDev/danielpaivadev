document.addEventListener('DOMContentLoaded', () => {
    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1200, // duração das animações em ms
        once: true,    // animações ocorrem apenas uma vez
        mirror: false, // se as animações devem se repetir ao rolar para cima
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Smooth Scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu mobile após clicar em um link
            if (navbar.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });

    // Efeito de escrita na seção Hero (opcional, pode ser mais avançado com uma lib)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = ''; // Limpa o texto original

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 70); // Velocidade de escrita
        }
    }
    // Atrasar um pouco para a animação AOS terminar primeiro
    setTimeout(typeWriter, 1500); 

    // Adiciona o efeito glow nos links do menu ao passar o mouse
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textShadow = `0 0 8px var(--neon-green)`;
        });
        link.addEventListener('mouseout', () => {
            link.style.textShadow = 'none';
        });
    });

    // Simulação de envio de formulário de contato (apenas para demonstração)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em breve Daniel entrará em contato.');
            this.reset(); // Limpa o formulário
            // Em um ambiente real, você enviaria os dados para um backend aqui
        });
    }
});