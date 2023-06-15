
const numOfDrum = document.querySelectorAll(".drum").length;

//Detect button clicks
for (let i = 0; i < numOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimate(buttonInnerHTML);
    }
    )
}

//Detect keyboard press. event = pressed key attributes (Check console log for attributes)
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimate(event.key);
})


function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

function buttonAnimate(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}


document
    .getElementById("cymbals")
    .addEventListener("click", function () {
        console.log("Button click");
        window.dataLayer.push({
            event: "cymbals_click",
        });
    });
