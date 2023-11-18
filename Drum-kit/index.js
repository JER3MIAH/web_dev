let doc = document.querySelectorAll(".drum");

for (let i = 0; i < doc.length; i++) {
    doc[i].addEventListener("click", function () {
        alert("Button clicked");
    });
}