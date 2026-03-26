document.addEventListener('DOMContentLoaded', () => {
    // Stats Counter logic copied for About page
    const counters = document.querySelectorAll('.counter');
    
    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const steps = 50;
                const stepTime = Math.abs(Math.floor(duration / steps));
                let current = 0;
                const inc = target / steps;

                const isDecimal = target % 1 !== 0;

                const timer = setInterval(() => {
                    current += inc;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    let displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
                    
                    // Add prefixes/suffixes based on target
                    if (target === 1.2) {
                        counter.innerText = '$' + displayValue + 'B+';
                    } else if (target === 180) {
                        counter.innerText = displayValue + '+';
                    } else {
                        counter.innerText = displayValue;
                    }

                }, stepTime);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => countObserver.observe(counter));
});
