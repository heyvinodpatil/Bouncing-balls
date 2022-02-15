// Balls color change
const colorPicker1 = document.querySelector(".color-picker1");
colorPicker1.addEventListener("input", updateColor.bind(this, "updateColor1"));

const colorPicker2 = document.querySelector(".color-picker2");
colorPicker2.addEventListener("input", updateColor.bind(this, "updateColor2"));

const colorPicker3 = document.querySelector(".color-picker3");
colorPicker3.addEventListener("input", updateColor.bind(this, "updateColor3"));

const colorPicker4 = document.querySelector(".color-picker4");
colorPicker4.addEventListener("input", updateColor.bind(this, "updateColor4"));

const colorPicker5 = document.querySelector(".color-picker5");
colorPicker5.addEventListener("input", updateColor.bind(this, "updateColor5"));

function bgColorChange(element) {
    const ballColor = document.querySelector(element);
    const ballBgColor = ballColor.style.backgroundColor = event.target.value;
}

function updateColor(color) {
    if (color === "updateColor1") {
        bgColorChange("li:nth-child(1)");
    } else if (color === "updateColor2") {
        bgColorChange("li:nth-child(2)");
    } else if (color === "updateColor3") {
        bgColorChange("li:nth-child(3)");
    } else if (color === "updateColor4") {
        bgColorChange("li:nth-child(4)");
    } else {
        bgColorChange("li:nth-child(5)");
    }
}

// Balls adjust range
const range1 = document.querySelector('.range1');
const range2 = document.querySelector('.range2');
const range3 = document.querySelector('.range3');
const range4 = document.querySelector('.range4');
const range5 = document.querySelector('.range5');


function rangeValue(value) {
    if (value === "range1") {
        let newValue = range1.value;
        const target = document.querySelector('li:nth-child(1)');
        let finalTarget = "1." + newValue + "s";
        target.style.animationDuration = finalTarget;
    } else if (value === "range2") {
        let newValue = range2.value;
        const target = document.querySelector('li:nth-child(2)');
        let finalTarget = "1." + newValue + "s";
        target.style.animationDuration = finalTarget;
    } else if (value === "range3") {
        let newValue = range1.value;
        const target = document.querySelector('li:nth-child(3)');
        let finalTarget = "1." + newValue + "s";
        target.style.animationDuration = finalTarget;
    } else if (value === "range4") {
        let newValue = range3.value;
        const target = document.querySelector('li:nth-child(4)');
        let finalTarget = "1." + newValue + "s";
        target.style.animationDuration = finalTarget;
    } else {
        let newValue = range5.value;
        const target = document.querySelector('li:nth-child(5)');
        let finalTarget = "1." + newValue + "s";
        target.style.animationDuration = finalTarget;
    }
}

range1.addEventListener("input", rangeValue.bind(this, "range1"));
range2.addEventListener("input", rangeValue.bind(this, "range2"));
range3.addEventListener("input", rangeValue.bind(this, "range3"));
range4.addEventListener("input", rangeValue.bind(this, "range4"));
range5.addEventListener("input", rangeValue.bind(this, "range5"));