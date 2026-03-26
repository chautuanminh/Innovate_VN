document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('companySearch');
    const sectorChips = document.querySelectorAll('.filter-chips .chip');
    const batchFilter = document.getElementById('batchFilter');
    const cards = document.querySelectorAll('.dir-card');

    let currentSector = 'all';
    let currentBatch = 'all';
    let searchQuery = '';

    function filterCards() {
        cards.forEach(card => {
            const cardSector = card.getAttribute('data-sector');
            const cardBatch = card.getAttribute('data-batch');
            const cardName = card.querySelector('.dir-name').innerText.toLowerCase();

            const matchesSector = currentSector === 'all' || cardSector === currentSector;
            const matchesBatch = currentBatch === 'all' || cardBatch === currentBatch;
            const matchesSearch = cardName.includes(searchQuery);

            if (matchesSector && matchesBatch && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sector Chips
    sectorChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sectorChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentSector = chip.getAttribute('data-filter');
            filterCards();
        });
    });

    // Batch Dropdown
    if (batchFilter) {
        batchFilter.addEventListener('change', (e) => {
            currentBatch = e.target.value;
            filterCards();
        });
    }

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterCards();
        });
    }
});
