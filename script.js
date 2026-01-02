// 1. Логика Модального окна
const modal = document.getElementById("aboutModal");
const btn = document.getElementById("aboutBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// 2. Поиск (фильтрация по заголовкам)
const searchInput = document.getElementById('searchInput');
const entries = document.querySelectorAll('.entry');

searchInput.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    entries.forEach(function(entry) {
        const title = entry.getAttribute('data-title').toLowerCase();
        entry.style.display = title.includes(term) ? 'block' : 'none';
    });
});

// 3. PAGE RECOVERY SYSTEM (Второй поиск)
const recoveryInput = document.getElementById('recoveryInput');

recoveryInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const code = recoveryInput.value.trim(); // Получаем текст без пробелов
        
        // Здесь ты задаешь коды и куда они ведут
        // Пример: если ввели "c2VjcmV0Lmh0bWw=" (это закодированное secret.html), то переходим
        // Или если ввели просто слово "GHOST"
        
        if (code === "GHOST") {
            window.location.href = "secret-ghost-page.html";
        } 
        else if (code === "c2VjcmV0Lmh0bWw=") { // Это Base64 от secret.html
             window.location.href = "secret.html";
        }
        else {
            alert("ERROR: INVALID RECOVERY KEY.");
            recoveryInput.value = ""; // Очистить поле
        }
    }
});

// 4. Переключатель языка (заглушка)
document.getElementById('langSwitch').addEventListener('click', () => {
    alert("Language Protocol: Only ENGLISH available in this sector.");
});
