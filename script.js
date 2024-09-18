document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Røyken Videregående";
    let index = 0;
    let speed = 100;

    function typeText() {
        document.getElementById('displayText').innerText = text.slice(0, index);
        index = (index + 1) % (text.length + 1);
        setTimeout(typeText, speed);
    }

    document.getElementById('speed').addEventListener('input', function() {
        speed = parseInt(this.value, 10);
        document.getElementById('speedValue').innerText = speed;
    });

    typeText();
});

function mot(EmilsinTall) {
    if (EmilsinTall >= 1 && EmilsinTall <= 1000) {
        return 1001 - EmilsinTall;
    }
    return null;
}

let mittTall = 500;
let result = mot(mittTall);  
console.log(result);
