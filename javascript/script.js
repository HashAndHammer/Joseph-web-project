function showGreeting() {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        document.getElementById("output").innerText = "Please enter a name!";
    } else {
        document.getElementById("output").innerText = "Hello, " + name + "! Welcome to Project 4.";
    }
}