// Переменные таймера
let timeLeft = 3600; // 1 час в секундах
let timerId = null;

// Инициализация аудио-контекста (для системного звука)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Функция системного звука при нажатии клавиш
function playBeep() {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime); // Частота звука
    gain.gain.setValueAtTime(0.005, audioCtx.currentTime); // Громкость
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
}

// Функция авторизации (вход в систему)
function unlock() {
    const val = document.getElementById('accessKey').value;
    if (val === "AhUi90a8") {
        document.getElementById('login-ui').style.display = 'none';
        document.getElementById('mode-ui').style.display = 'flex';
        playBeep();
    } else {
        alert("ACCESS DENIED: UNAUTHORIZED ATTEMPT");
    }
}

// Режим 1: Обычный архив
function showArchive() {
    document.getElementById('mode-ui').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('secret-text').innerHTML = "Welcome to the STATIC ARCHIVE. All time constraints disabled. Browse at your own pace.";
}

// Режим 2: Испытание ARG (Таймер)
function startChallenge() {
    document.getElementById('mode-ui').style.display = 'none';
    document.getElementById('timer-display').style.display = 'block';
    document.getElementById('content').style.display = 'block';
    document.getElementById('refill-btn').style.display = 'block';
    document.getElementById('secret-text').innerHTML = "ARG MODE ACTIVE. System purge initiated. Find the hidden data before connection is lost.";
    
    startTimer();
}

// Логика таймера
function startTimer() {
    if (timerId !== null) return; // Чтобы таймер не запускался дважды

    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        // Предупреждение на 15 минутах (900 секунд)
        if (timeLeft === 900) {
            document.getElementById('timer-display').classList.add('warning');
            alert("SYSTEM WARNING: 15 MINUTES REMAINING. Refill connection now!");
        }

        // Время вышло
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("CONNECTION LOST. DATA PURGED.");
            location.reload(); // Перезагрузка страницы
        }
    }, 1000);
}

// Обновление цифр на экране
function updateTimerDisplay() {
    let h = Math.floor(timeLeft / 3600);
    let m = Math.floor((timeLeft % 3600) / 60);
    let s = timeLeft % 60;
    
    const display = document.getElementById('timer-display');
    display.innerText = 
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Пополнение времени (+10 минут)
function addTime() {
    timeLeft += 600; 
    // Убираем красное мигание, если времени стало больше 15 минут
    if (timeLeft > 900) {
        document.getElementById('timer-display').classList.remove('warning');
    }
    playBeep();
    console.log("Time refilled: +10 minutes");
}

// Выход из системы
function disconnect() {
    const box = document.querySelector('.box');
    box.style.opacity = '0.3';
    box.innerHTML = "<h2>LOGGING OUT...</h2>";
    
    setTimeout(() => {
        // Переход на главную страницу сайта
        window.location.href = window.location.origin + '/';
    }, 1000);
}
