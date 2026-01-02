// 1. Логика Модального окна (About Us)
const modal = document.getElementById("aboutModal");
const btn = document.getElementById("aboutBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 2. Логика Поиска (фильтрация)
const searchInput = document.getElementById('searchInput');
const entries = document.querySelectorAll('.entry');

searchInput.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    
    entries.forEach(function(entry) {
        const title = entry.getAttribute('data-title').toLowerCase();
        if(title.includes(term)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
});

// 3. Логика Языка (Упрощенная)
// Здесь можно добавить функционал замены текста
const langBtn = document.getElementById('langSwitch');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    if(currentLang === 'en') {
        alert("Switching to Russian protocol... (Логику нужно дописать под конкретные тексты)");
        currentLang = 'ru';
    } else {
        alert("Switching to English protocol...");
        currentLang = 'en';
    }
});
