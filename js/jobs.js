document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('jobSearch');
    const roleFilter = document.getElementById('roleFilter');
    const locationFilter = document.getElementById('locationFilter');
    const jobRows = document.querySelectorAll('.job-row');

    function filterJobs() {
        const query = searchInput.value.toLowerCase();
        const role = roleFilter.value;
        const loc = locationFilter.value;

        jobRows.forEach(row => {
            const title = row.querySelector('.job-title').innerText.toLowerCase();
            const company = row.querySelector('.job-company span').innerText.toLowerCase();
            const rowRole = row.getAttribute('data-role');
            const rowLoc = row.getAttribute('data-location');

            const matchesSearch = title.includes(query) || company.includes(query);
            const matchesRole = role === 'all' || rowRole === role;
            const matchesLoc = loc === 'all' || rowLoc === loc;

            if (matchesSearch && matchesRole && matchesLoc) {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterJobs);
    roleFilter.addEventListener('change', filterJobs);
    locationFilter.addEventListener('change', filterJobs);
});
