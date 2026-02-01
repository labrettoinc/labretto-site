/**
 * Labretto Interactive Scripts
 * Управление эффектами скролла и сменой тем
 */

document.addEventListener('DOMContentLoaded', () => {

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const body = document.body;

        // Порог срабатывания эффекта (в пикселях)
        // 50px достаточно, чтобы запустить анимацию при начале движения
        if (scrollPosition > 50) {
            if (!body.classList.contains('scrolled')) {
                body.classList.add('scrolled');
            }
        } else {
            if (body.classList.contains('scrolled')) {
                body.classList.remove('scrolled');
            }
        }
    };

    // Слушаем событие прокрутки
    window.addEventListener('scroll', handleScroll);

    // Запускаем проверку один раз при загрузке (на случай, если страница открыта не сверху)
    handleScroll();

    console.log('Labretto Engine: Scroll observer initialized ✨');
});

/**
 * Дополнительно: Плавная навигация для якорных ссылок
 * (Хотя scroll-behavior: smooth в CSS это делает, JS обеспечивает стабильность)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});