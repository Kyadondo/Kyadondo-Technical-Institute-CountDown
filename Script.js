function countdown() {
    const graduationDate = new Date("July 29, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = graduationDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "Congratulations! It's graduation day!";
    }
}

setInterval(countdown, 1000);
