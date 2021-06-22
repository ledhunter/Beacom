function open1() {
    document.getElementById("blok3-false").style.display = "none";
    document.getElementById("blok3-true").style.display = "block";
    alert(document.getElementById("blok3-true").style.display = "block");
}

function select(clicked_value) {
    document.getElementById("sump1").innerHTML = clicked_value;
    document.getElementById("d1").open = false;
}

function select2(clicked_value) {
    document.getElementById("sump2").innerHTML = clicked_value;
    document.getElementById("d2").open = false;
}

window.onload = function input() {
    document.getElementById("field-billing-information-lastName-input").value = "Fame";
}