const root = document.documentElement;

(() => {
    const sign = prompt('암호를 입력해 주세요.');
    const pw   = '메리 크리스마스';
    
    if (sign === pw) {
        alert('편지 봉투를 열어봐 ♡>_<♡');
        root.style.display = 'block';
    }
    else {
        alert('메~롱 약오르지 까꿍 *^^*');
        while(root.firstChild) root.removeChild(root.firstChild);
    }
})();

function openCard() {
    const audio    = document.getElementById('audio');
    const envelope = document.querySelector('.envelope');

    envelope.style.display = 'none';
    audio.play();
}

document.querySelector('.card__open-btn').addEventListener('click', openCard);

function setVh() {
    const vh = window.innerHeight * 0.01;
    root.style.setProperty('--vh', vh + 'px');
}

setVh();
window.addEventListener('resize', setVh);