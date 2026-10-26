/* Progressive enhancement: content and links also work without JavaScript. */
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

const archive = document.querySelector('#publication-archive');
if (archive) {
  const papers = [...archive.querySelectorAll('.paper')];
  const years = [...archive.querySelectorAll('.year-group')];
  const search = document.querySelector('#publication-search');
  const status = document.querySelector('#results-count');
  const emptyState = document.querySelector('#empty-state');
  const normalize = text => text.toLowerCase().normalize('NFKD').replace(/\p{Diacritic}/gu, '');

  function updateResults() {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    papers.forEach(paper => {
      const text = normalize(paper.textContent);
      const matchesSearch = terms.every(term => text.includes(term));
      paper.hidden = !matchesSearch;
      if (!paper.hidden) visible++;
    });
    years.forEach(year => { year.hidden = ![...year.querySelectorAll('.paper')].some(paper => !paper.hidden); });
    status.textContent = visible === papers.length ? `${visible} publications` : `${visible} of ${papers.length} publications`;
    emptyState.hidden = visible > 0;
  }

  search.addEventListener('input', updateResults);
  document.querySelector('#reset-filters').addEventListener('click', () => {
    search.value = '';
    updateResults();
    search.focus();
  });
  updateResults();
}
