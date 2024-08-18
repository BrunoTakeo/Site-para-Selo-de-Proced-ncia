const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTrack = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 20; // Largura dos itens + margem
let index = 0;

// Clone os itens e adicione ao final da faixa
items.forEach(item => {
  const clone = item.cloneNode(true);
  carouselTrack.appendChild(clone);
});

// Atualiza a largura da faixa do carrossel
carouselTrack.style.width = `${itemWidth * totalItems * 2}px`;

// Atualiza a posição do carrossel
function updateCarousel() {
  const offset = -index * itemWidth;
  carouselTrack.style.transform = `translateX(${offset}px)`;
}

// Avança para o próximo item
function goToNext() {
  index++;
  if (index >= totalItems) {
    index = 0;
    carouselTrack.style.transition = 'none';
    carouselTrack.style.transform = `translateX(0)`;
    setTimeout(() => {
      carouselTrack.style.transition = 'transform 0.5s ease';
    }, 20); // Espera para remover o estilo de transição
  }
  updateCarousel();
}

// Volta para o item anterior
function goToPrev() {
  index--;
  if (index < 0) {
    index = totalItems - 1;
    carouselTrack.style.transition = 'none';
    carouselTrack.style.transform = `translateX(-${itemWidth * totalItems}px)`;
    setTimeout(() => {
      carouselTrack.style.transition = 'transform 0.5s ease';
    }, 20); // Espera para remover o estilo de transição
  }
  updateCarousel();
}

// Adiciona eventos de clique aos botões
prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

// Atualiza o carrossel a cada 3 segundos (opcional)
setInterval(goToNext, 3000);

// Inicializa o carrossel
updateCarousel();

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-links li a');
  
    // Obtém o caminho da URL atual
    const currentUrl = window.location.href;
  
    // Loop através de cada link
    navLinks.forEach(link => {
      // Verifica se o href do link corresponde ao caminho da URL atual
      if (link.href === currentUrl) {
        link.classList.add('active');
      }
    });
  });


 