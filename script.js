const subjectSel = document.getElementById('subject');
const gradeBtns = document.querySelectorAll('.segmented .seg');
const searchInput = document.getElementById('q');
const grid = document.getElementById('grid');
const countEl = document.getElementById('count');
const yearEl = document.getElementById('year');
const dayNumEl = document.getElementById('dayNum');

if (yearEl) yearEl.textContent = new Date().getFullYear();

/** 100日チャレンジ：開始日を「2025-08-17（JST推定）」に固定 */
const start = new Date('2025-08-17T00:00:00+09:00');
const now = new Date();
const msPerDay = 24*60*60*1000;
const diffDays = Math.min(100, Math.max(1, Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(start.getFullYear(), start.getMonth(), start.getDate()))/msPerDay)+1));
if (dayNumEl) dayNumEl.textContent = diffDays;

let currentGrade = 'all';
gradeBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    gradeBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentGrade = btn.dataset.grade;
    applyFilters();
  }, {passive:true});
});

subjectSel.addEventListener('change', applyFilters, {passive:true});
searchInput.addEventListener('input', applyFilters, {passive:true});

function applyFilters(){
  const subject = subjectSel.value;
  const q = searchInput.value.trim().toLowerCase();
  let visible = 0;
  [...grid.children].forEach(card=>{
    const okSubject = (subject==='all' || card.dataset.subject===subject);
    const okGrade = (currentGrade==='all' || card.dataset.grade===currentGrade);
    const text = (card.textContent + ' ' + (card.dataset.keywords||'')).toLowerCase();
    const okSearch = (!q || text.includes(q));
    const show = okSubject && okGrade && okSearch;
    card.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  countEl.textContent = visible;
}
applyFilters();
