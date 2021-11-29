import {
    diffDates,
    diffToHtml
} from "./datecalc.js";
import {
    formatError
} from "./utils.js";
import {
    tickedStop,
    ticked,

} from "./timing.js";
import {
    toggle
} from "./toggle.js";

import "./gman.mp3"

const toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener('click', toggle);

/*Ссылки на кнопки таймера*/
const startTimerBtn = document.getElementById("startTimer");
const stopTimerBtn = document.getElementById("stopTimer");

startTimerBtn.addEventListener("click", ticked);
stopTimerBtn.addEventListener("click", tickedStop);


/*ссылки на форму и на тег с выводом результата*/
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    let {
        firstDate,
        secondDate
    } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}