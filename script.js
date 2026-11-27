function showMessage() {
    alert("Welcome to my website!");
}

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

function displayName() {
    let name = prompt("Enter your name:");

    if (name) {
        document.getElementById("output").innerHTML =
            "Hello, " + name + "! Welcome to my website.";
    }
}
