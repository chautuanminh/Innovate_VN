document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#libraryTabs li');
    const articles = document.querySelectorAll('.article-card');
    const featuredArticle = document.getElementById('featuredArticle');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state on tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            // Hide/Show Featured Article
            if (featuredArticle) {
                if (filter === 'all' || featuredArticle.getAttribute('data-category') === filter) {
                    featuredArticle.style.display = 'block';
                } else {
                    featuredArticle.style.display = 'none';
                }
            }

            // Hide/Show Article Cards
            articles.forEach(article => {
                if (filter === 'all' || article.getAttribute('data-category') === filter) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});
