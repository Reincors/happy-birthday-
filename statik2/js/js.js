// Отримуємо елемент аудіо
let audio = document.getElementById("myAudio");

// Устанавливает громкость на 30% (от 0 до 1)   
audio.volume = 0.1;

// Функція для відтворення аудіо
function playAudio() {
    audio.play();
}