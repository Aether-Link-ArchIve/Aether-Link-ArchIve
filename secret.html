---
permalink: /secret
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AETHER-LINK | TERMINAL</title>
    <link rel="icon" type="image/jpeg" href="favicon.jpg">
    <style>
        body { font-family: 'Courier New', Courier, monospace; background: #050505; color: #00ff41; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; overflow: hidden; }
        .top-bar { position: absolute; top: 20px; right: 30px; font-size: 0.9rem; color: rgba(0, 255, 65, 0.6); text-align: right; }
        .top-bar b { color: #00ff41; text-shadow: 0 0 8px rgba(0, 255, 65, 0.8); }
        
        .box { border: 1px solid #00ff41; padding: 40px; background: rgba(0, 20, 0, 0.95); box-shadow: 0 0 30px rgba(0, 255, 65, 0.15); max-width: 550px; width: 90%; z-index: 10; text-align: center; }
        .terminal-logo { width: 100px; filter: invert(1) sepia(1) saturate(10) hue-rotate(70deg); margin-bottom: 20px; }

        /* Таймер */
        #timer-display { font-size: 2rem; margin: 20px 0; display: none; font-weight: bold; border: 1px dashed #00ff41; padding: 10px; }
        .warning { color: #ff3333 !important; animation: blink 1s infinite; text-shadow: 0 0 10px red; }
        @keyframes blink { 50% { opacity: 0.3; } }

        input { background: transparent; border: 1px solid #00ff41; color: #00ff41; padding: 12px; width: 100%; box-sizing: border-box; margin: 20px 0; outline: none; text-align: center; font-size: 1.2rem; }
        button { background: #00ff41; color: #000; border: none; padding: 14px; cursor: pointer; font-weight: bold; width: 100%; text-transform: uppercase; font-family: inherit; margin-bottom: 10px; }
        button:hover { background: #003b11; color: #00ff41; }
        
        .mode-select { display: none; flex-direction: column; gap: 10px; }
        #content { display: none; line-height: 1.6; text-align: left; }
        .glitch-text { color: #ff3333; font-weight: bold; }
    </style>
</head>
<body>

<div class="top-bar">
    SYS_REF: <b>AhUi90a8</b><br>
    LANG: EN / <span style="opacity: 0.3;">??</span>
</div>

<div class="box">
    <img src="favicon.jpg" class="terminal-logo" alt="LOGO">
    
    <div id="login-ui">
        <h2>AETHER-LINK ACCESS</h2>
        <input type="password" id="accessKey" placeholder="ENTER KEY" autofocus onkeydown="playBeep()">
        <button onclick="unlock()">DECRYPT</button>
    </div>

    <div id="mode-ui" class="mode-select">
        <h2>CHOOSE DATA MODE</h2>
        <button onclick="showArchive()">[1] ORIGINAL ARCHIVE</button>
        <button onclick="startChallenge()" style="background: #ff3333; color: white;">[2] INITIATE ARG CHALLENGE</button>
    </div>

    <div id="timer-display">01:00:00</div>
    
    <div id="content">
        <h2 class="glitch-text">DATA STREAM ACTIVE</h2>
        <div id="secret-text"></div>
        <br>
        <button onclick="addTime()" id="refill-btn" style="display:none; background: #005500; color: #00ff41; font-size: 0.7rem;">+ REFILL PROTOCOL</button>
        <button onclick="disconnect()" style="background: transparent; border: 1px solid #00ff41; color: #00ff41;">TERMINATE</button>
    </div>
</div>

<script>
    let timeLeft = 3600; // 1 час в секундах
    let timerId = null;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playBeep() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.005, audioCtx.currentTime);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + 0.04);
    }

    function unlock() {
        if (document.getElementById('accessKey').value === "AhUi90a8") {
            document.getElementById('login-ui').style.display = 'none';
            document.getElementById('mode-ui').style.display = 'flex';
        } else { alert("DENIED"); }
    }

    function showArchive() {
        document.getElementById('mode-ui').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('secret-text').innerHTML = "Welcome to the static archive. No time limit applied.";
    }

    function startChallenge() {
        document.getElementById('mode-ui').style.display = 'none';
        document.getElementById('timer-display').style.display = 'block';
        document.getElementById('content').style.display = 'block';
        document.getElementById('refill-btn').style.display = 'block';
        document.getElementById('secret-text').innerHTML = "ARG MODE ACTIVE. You have 60 minutes to find the truth. Subject No. 1 is watching.";
        startTimer();
    }

    function startTimer() {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft === 900) { // 15 минут
                document.getElementById('timer-display').classList.add('warning');
                alert("CRITICAL WARNING: 15 MINUTES REMAINING. Refill connection or system will reset.");
            }
            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("CONNECTION LOST. RESTARTING...");
                location.reload();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        document.getElementById('timer-display').innerText = 
            `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function addTime() {
        timeLeft += 600; // Добавить 10 минут
        if (timeLeft > 900) document.getElementById('timer-display').classList.remove('warning');
        playBeep();
    }

    function disconnect() {
        window.location.href = window.location.origin + '/';
    }
</script>
</body>
</html>
