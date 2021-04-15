function getOrdinaryTime() {
    const time = new Date();
    let hours = time.getHours();
    if (hours < 10) hours = '0' + hours;

    let minutes = time.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = time.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function getShortTime() {
    const time = new Date();
    let hours = time.getHours();
    if (hours > 12) hours -= 12;

    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const amPm = (hours > 12) ? "PM" : "AM";

    return `${hours}:${minutes}:${seconds} ${amPm}`;
}