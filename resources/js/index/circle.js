// Адаптивные размеры кружков
function setCircleSizes() {
    const circles = document.querySelectorAll('.circles li');
    const screenWidth = window.innerWidth;
    // Базовые размеры для разных кружков (множители)
    const baseSizes = [4, 1, 1, 3, 1, 5.5, 7.5, 1.25, 0.75, 7.5];
    // Коэффициент масштабирования в зависимости от размера экрана
    let scaleFactor;
    if (screenWidth <= 480) {
        scaleFactor = 0.08;
    } else if (screenWidth <= 768) {
        scaleFactor = 0.06;
    } else if (screenWidth <= 1200) {
        scaleFactor = 0.04;
    } else {
        scaleFactor = 0.03;
    }
    circles.forEach((circle, index) => {
        const size = baseSizes[index] * screenWidth * scaleFactor;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
    });
}
setCircleSizes();
window.addEventListener('resize', setCircleSizes);