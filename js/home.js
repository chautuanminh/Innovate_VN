// Company Roller Highlight Logic
const rollerItems = document.querySelectorAll('.roller-item');
let rollerIndex = 0;

setInterval(() => {
    if (rollerItems.length > 0) {
        rollerItems.forEach(item => item.classList.remove('active'));
        rollerItems[rollerIndex].classList.add('active');
        rollerIndex = (rollerIndex + 1) % rollerItems.length;
    }
}, 1500); // Shift active item slightly out of sync with CSS animation for dynamic feel

// Counter Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('h4[data-target]');
            stats.forEach(stat => {
                const targetStr = stat.getAttribute('data-target');
                const target = parseFloat(targetStr);
                const prefix = stat.getAttribute('data-prefix') || '';
                const suffix = stat.getAttribute('data-suffix') || '';
                const isDecimal = targetStr.includes('.');
                
                let current = 0;
                const increment = target / 50; // 50 steps
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.innerText = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
                }, 30);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) {
    statsObserver.observe(statsStrip);
}
