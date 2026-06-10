function openGift() {

    document
        .getElementById("clickSound")
        .play();

    setTimeout(() => {
        document
            .getElementById("revealSound")
            .play();
    }, 300);

    setTimeout(() => {
        document
            .getElementById("celebrationSound")
            .play();
    }, 1200);

    document
        .getElementById("giftScreen")
        .classList.add("hidden");

    document
        .getElementById("birthdayCard")
        .classList.remove("hidden");

    createConfetti();
}

function createConfetti() {

    for (let i = 0; i < 250; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        piece.style.animationDuration =
            (Math.random()*3+2) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}