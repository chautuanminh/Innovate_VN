document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all
            faqItems.forEach(faq => faq.classList.remove('open'));
            
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
});
