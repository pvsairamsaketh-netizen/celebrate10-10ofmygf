document.addEventListener('DOMContentLoaded', () => {
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');
    const body = document.getElementById('body');
    const passcodeInput = document.getElementById('passcode-input');
    const unlockBtn = document.getElementById('unlock-btn');
    const errorMsg = document.getElementById('error-msg');
    const placementLoader = document.getElementById('placement-loader');

    // System access control values
    const validPasscodes = ['10', '10/10', '10.0'];

    // Professional, dynamic placement track cycles
    const statusMessages = [
        "Syncing core fundamentals...",
        "Optimizing resume matrix...",
        "Compiling DSA algorithms...",
        "Refining mock interviews...",
        "Ready to dominate placements."
    ];

    function handleUnlock() {
        const enteredValue = passcodeInput.value.trim();

        if (validPasscodes.includes(enteredValue)) {
            errorMsg.style.opacity = '0';
            
            // Premium viewport morph fadeout out
            lockScreen.classList.add('opacity-0', 'scale-95');
            
            setTimeout(() => {
                lockScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                body.classList.remove('overflow-hidden');
                
                setTimeout(() => {
                    mainContent.classList.remove('opacity-0');
                    mainContent.classList.add('opacity-100');
                    
                    // Fire canvas canvas-confetti particle generators
                    triggerConfettiCelebration();
                    
                    // Initialize placement text machine cycles
                    runStatusSequencer();
                }, 50);
                
            }, 700);
        } else {
            errorMsg.style.opacity = '1';
            passcodeInput.classList.add('border-red-500', 'animate-shake');
            setTimeout(() => {
                passcodeInput.classList.remove('border-red-500', 'animate-shake');
            }, 600);
            passcodeInput.value = '';
        }
    }

    function runStatusSequencer() {
        let index = 0;
        const interval = setInterval(() => {
            if (index < statusMessages.length - 1) {
                index++;
                placementLoader.textContent = statusMessages[index];
            } else {
                clearInterval(interval);
            }
        }, 3000); // Transitions gracefully every 3 seconds
    }

    function triggerConfettiCelebration() {
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 60,
                origin: { x: 0, y: 0.8 },
                colors: ['#ec4899', '#8b5cf6', '#10b981']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 60,
                origin: { x: 1, y: 0.8 },
                colors: ['#ec4899', '#8b5cf6', '#10b981']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    unlockBtn.addEventListener('click', handleUnlock);
    passcodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUnlock();
    });
});