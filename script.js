'use strict';

let inputText = document.querySelector('.input-text').querySelector('input[type=text]');
let result = document.querySelector('.result');

function debounce(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= t)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    };
}

inputText.addEventListener('keyup', debounce(onKeyUp, 300));

function onKeyUp() {
    result.textContent = `${inputText.value}`;
}

