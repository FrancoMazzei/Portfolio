function matrixRain() {
    let density = 500;
    for (let i = 0; i < density; i++) {
        setTimeout(() => {
            let digit = document.createElement('span');
            digit.textContent = Math.random() > 0.5 ? '1' : '0';
            digit.className = 'matrix-digit';
            digit.style.left = Math.random() * 100 + 'vw';
            digit.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(digit);
        }, Math.random() * 2000);
    }
}
window.onload = function() {
    matrixRain();
};