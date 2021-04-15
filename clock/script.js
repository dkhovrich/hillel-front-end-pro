const timeFormat = Object.freeze({
    short: "H:M AM/PM",
    ordinary: "HH:MM:SS"
});

function getTimeFormatted(format) {
    switch (format) {
        case timeFormat.short:
            return getShortTime();
        case timeFormat.ordinary:
            return getOrdinaryTime();
        default:
            throw new Error("Invalid format");
    }
}

const formats = [timeFormat.short, timeFormat.ordinary];

const select = createSelect();
const timeWrapper = createWrapper();

document.body.appendChild(select);
document.body.appendChild(timeWrapper);

const containers = [];
let intervalId = null;

select.addEventListener("change", event => {
    showTime(event.target.value);
});

function showTime(format) {
    clearInterval(intervalId);

    createClock(format);
    intervalId = setInterval(() => updateClock(format), 1000);
}

showTime(formats[0]);

function createClock(format) {
    const timeFormatted = getTimeFormatted(format);
    console.log("create clock", timeFormatted);

    timeWrapper.innerHTML = "";
    containers.length = 0;

    for (const symbol of timeFormatted) {
        const container = createTimeSymbolContainer(symbol)
        containers.push(container);
    }

    containers.forEach(c => timeWrapper.appendChild(c));
}

function updateClock(format) {
    const timeFormatted = getTimeFormatted(format);
    console.log("update clock", timeFormatted);

    for (let i = 0; i < timeFormatted.length; i++) {
        const container = containers[i];
        const symbol = timeFormatted[i];

        if (container.innerHTML !== symbol) {
            container.innerHTML = symbol;
        }
    }
}

