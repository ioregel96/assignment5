function makeBigger() {
    alert("Hello, world!");
document.getElementById("inputText").style.fontSize = "24pt";
}

function applyStyle() {
    alert("Hello, world!");
    var inputText = document.getElementById("inputText");
    if (document.getElementById("fancyShmancy").checked) {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none";
    }
}

function mooify() {
    alert("Hello, world!");
    var inputText = document.getElementById("inputText");
    var text = inputText.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim();
        if (!sentences[i].includes("-MOO")) {
            sentences[i] += ".";
        }
    }
    inputText.value = sentences.join("-MOO ");
}
