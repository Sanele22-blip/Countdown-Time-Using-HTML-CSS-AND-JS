const countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("day").innerText = 0;
        document.getElementById("hour").innerText = 0;
        document.getElementById("minute").innerText = 0;
        document.getElementById("second").innerText = 0;
    }
}, 1000);
