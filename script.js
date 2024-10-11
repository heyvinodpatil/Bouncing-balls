// Balls color change and range accent color update
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

function bgColorChange(element, rangeClass) {
    const ballColor = document.querySelector(element);
    const newColor = event.target.value;
    ballColor.style.backgroundColor = newColor;

    // Change the accent color of the corresponding range input
    const range = document.querySelector(rangeClass);
    range.style.accentColor = newColor;
}

function updateColor(color) {
    if (color === "updateColor1") {
        bgColorChange("li:nth-child(1)", ".range1");
    } else if (color === "updateColor2") {
        bgColorChange("li:nth-child(2)", ".range2");
    } else if (color === "updateColor3") {
        bgColorChange("li:nth-child(3)", ".range3");
    } else if (color === "updateColor4") {
        bgColorChange("li:nth-child(4)", ".range4");
    } else {
        bgColorChange("li:nth-child(5)", ".range5");
    }
}

// Balls adjust range
const range1 = document.querySelector('.range1');
const range2 = document.querySelector('.range2');
const range3 = document.querySelector('.range3');
const range4 = document.querySelector('.range4');
const range5 = document.querySelector('.range5');

function rangeValue(value) {
    let newValue;
    let target;
    let finalTarget;

    if (value === "range1") {
        newValue = range1.value;
        target = document.querySelector('li:nth-child(1)');
    } else if (value === "range2") {
        newValue = range2.value;
        target = document.querySelector('li:nth-child(2)');
    } else if (value === "range3") {
        newValue = range3.value;
        target = document.querySelector('li:nth-child(3)');
    } else if (value === "range4") {
        newValue = range4.value;
        target = document.querySelector('li:nth-child(4)');
    } else {
        newValue = range5.value;
        target = document.querySelector('li:nth-child(5)');
    }

    finalTarget = "1." + newValue + "s";
    target.style.animationDuration = finalTarget;
}

range1.addEventListener("input", rangeValue.bind(this, "range1"));
range2.addEventListener("input", rangeValue.bind(this, "range2"));
range3.addEventListener("input", rangeValue.bind(this, "range3"));
range4.addEventListener("input", rangeValue.bind(this, "range4"));
range5.addEventListener("input", rangeValue.bind(this, "range5"));