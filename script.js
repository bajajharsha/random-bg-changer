let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = $('.btn')
let colorText = $('.color-text')


btn.click(function () {

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumGenerate()];
    }
    // console.log(hexColor)

    colorText.text(hexColor);
    $('body').css('background-color', hexColor)
    $(colorText).css('color', hexColor)
})

function randomNumGenerate() {
    return Math.floor(Math.random() * hex.length);
}